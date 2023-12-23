import * as bcrypt from 'bcryptjs';
import { NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { usersPrismaMock } from '../users/users.mock';
import { fakeRegister, fakeLogin } from './dto/dto.mock';

describe('AuthService', () => {
  let authService: AuthService;
  let jwtService: JwtService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UsersService,
        { provide: JwtService, useValue: { sign: jest.fn() } }, // Mock JwtService
        { provide: PrismaService, useValue: usersPrismaMock },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('register', () => {
    it('should return an object with a token property', async () => {

      (jwtService.sign as jest.Mock).mockReturnValue('fakeToken');

      const response = await authService.register(fakeRegister);

      expect(response).toHaveProperty('token');
      expect(jwtService.sign).toHaveBeenCalledWith({ email: fakeRegister.email });
    });
  });

  describe('login', () => {
    it('should return an object with a token property on successful login', async () => {
      const bcryptCompareMock = jest.spyOn(bcrypt, 'compare');
      bcryptCompareMock.mockResolvedValue(true as never);

      const usersServiceFindUniqueMock = jest.spyOn(prismaService.users, 'findUnique');
      usersServiceFindUniqueMock.mockResolvedValue({ email: fakeLogin.email, password: 'hashedPassword' } as never);

      (jwtService.sign as jest.Mock).mockReturnValue('fakeToken');

      const response = await authService.login(fakeLogin);

      expect(response).toHaveProperty('token');
      expect(jwtService.sign).toHaveBeenCalledWith({ email: fakeLogin.email });
      expect(usersServiceFindUniqueMock).toHaveBeenCalledWith({ where: { email: fakeLogin.email } });
      expect(bcryptCompareMock).toHaveBeenCalledWith(fakeLogin.password, 'hashedPassword');
    });

    it('should throw NotFoundException for non-existing user during login', async () => {
      const usersServiceFindUniqueMock = jest.spyOn(prismaService.users, 'findUnique');
      usersServiceFindUniqueMock.mockResolvedValue(null);

      await expect(authService.login(fakeLogin)).rejects.toThrowError(NotFoundException);
    });

    it('should throw NotFoundException for invalid password during login', async () => {
      const bcryptCompareMock = jest.spyOn(bcrypt, 'compare');
      bcryptCompareMock.mockResolvedValue(false as never);

      const usersServiceFindUniqueMock = jest.spyOn(prismaService.users, 'findUnique');
      usersServiceFindUniqueMock.mockResolvedValue({ email: fakeLogin.email, password: 'hashedPassword' } as never);

      await expect(authService.login(fakeLogin)).rejects.toThrowError(NotFoundException);
    });
  });
});
