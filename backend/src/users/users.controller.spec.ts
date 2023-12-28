import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../authentication/auth.guard';
import { Request } from 'express';
import { PrismaService } from '../prisma.service';
import { Users } from './users.model';

jest.mock('../prisma.service')
describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, PrismaService],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: jest.fn().mockReturnValue(true) })
      .compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  describe('getAllUsers', () => {
    it('should return an array of users', async () => {
      const result = [{ id: '1', name: 'John Doe' }];
      jest.spyOn(usersService, 'getAllUser').mockResolvedValue(result as never);

      const request = {} as Request;
      const response = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await usersController.getAllUsers(request, response);

      expect(response.status).toHaveBeenCalledWith(200);
      expect(response.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'Successfully fetch data!',
        result,
      });
    });

    it('should handle errors and return a 500 status', async () => {
      jest.spyOn(usersService, 'getAllUser').mockRejectedValue(new Error('Internal Server Error'));

      const request = {} as Request;
      const response = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await usersController.getAllUsers(request, response);

      expect(response.status).toHaveBeenCalledWith(500);
      expect(response.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'Internal Server Error!',
      });
    });
  });

  describe('getProfileUser', () => {
    it('should return user profile data', async () => {
      const user: Users = {
        id: 'user123',
        name: 'John Doe',
        email: 'john@example.com',
        password: 'hashedPassword'
      };
      jest.spyOn(usersService, 'getOneUser').mockResolvedValue(user);

      const request = {} as Request;
      const response = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await usersController.getProfileUser(request, response, { id: user.id });

      expect(response.status).toHaveBeenCalledWith(200);
      expect(response.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'Successfully fetch data!',
        result: user,
      });
    });

    it('should handle errors and return a 500 status', async () => {
      jest.spyOn(usersService, 'getOneUser').mockRejectedValue(new Error('Internal Server Error'));

      const request = {} as Request;
      const response = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await usersController.getProfileUser(request, response, { id: 'user123' });

      expect(response.status).toHaveBeenCalledWith(500);
      expect(response.json).toHaveBeenCalledWith({
        status: 'error',
        message: 'Internal Server Error!',
      });
    });
  });

  describe('getOneUser', () => {
    it('should return a specific user data by ID', async () => {
      const user: Users = {
        id: 'user123',
        name: 'John Doe',
        email: 'john@example.com',
        password: 'hashedPassword'
      };
      jest.spyOn(usersService, 'getOneUser').mockResolvedValue(user);

      const request = {} as Request;
      const response = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await usersController.getOneUser(request, response, user.id);

      expect(response.status).toHaveBeenCalledWith(200);
      expect(response.json).toHaveBeenCalledWith({
        status: 'Ok!',
        message: 'Successfully fetch data!',
        result: user,
      });
    });

    it('should handle errors and return a 500 status', async () => {
      jest.spyOn(usersService, 'getOneUser').mockRejectedValue(new Error('Internal Server Error'));

      const request = {} as Request;
      const response = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as any;

      await usersController.getOneUser(request, response, 'user123');

      expect(response.status).toHaveBeenCalledWith(500);
      expect(response.json).toHaveBeenCalledWith({
        status: 'error',
        message: 'Internal Server Error!',
      });
    });
  });
});