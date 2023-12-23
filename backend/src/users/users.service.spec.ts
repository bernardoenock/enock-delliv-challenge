import { Test, TestingModule } from "@nestjs/testing"
import { PrismaService } from "../prisma.service"
import { UsersService } from "./users.service"
import { fakeInputUser, fakeUsers, usersPrismaMock } from "./users.mock"

describe('UsersService', () => {
  let service: UsersService
  let prisma: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: usersPrismaMock }
      ]
    }).compile()

    service = module.get<UsersService>(UsersService)
    prisma = module.get<PrismaService>(PrismaService)
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllUser', () => {
    it(`should return an array of users`, async () => {
      const response = await service.getAllUser();

      expect(response).toEqual(fakeUsers);
      expect(prisma.users.findMany).toHaveBeenCalledTimes(1);
      expect(prisma.users.findMany).toHaveBeenCalledWith(/* nothing */);
    });
  });

  describe('createUser', () => {
    it(`should create a new user`, async () => {

      const response = await service.createUser(fakeInputUser);
      
      expect(response).toEqual(fakeInputUser);
      expect(prisma.users.findUnique).toHaveBeenCalledTimes(1);
      expect(prisma.users.create).toHaveBeenCalledTimes(1);
      expect(prisma.users.create).toHaveBeenCalledWith({
        data: fakeInputUser
      });
    });
  });
})