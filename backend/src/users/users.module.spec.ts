import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma.service';

describe('UsersModule', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, PrismaService],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe('UsersController', () => {
    it('should be defined', () => {
      expect(usersController).toBeDefined();
    });

  });

  describe('UsersService', () => {
    it('should be defined', () => {
      expect(usersService).toBeDefined();
    });
  });

  describe('PrismaService', () => {
    it('should be defined', () => {
      expect(prismaService).toBeDefined();
    });

    it('should have a defined user property', () => {
      expect(prismaService.users).toBeDefined();
    });

  });

});