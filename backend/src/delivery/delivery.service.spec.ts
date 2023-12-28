import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryService } from './delivery.service';
import { PrismaService } from '../prisma.service';
import { DeliveryOrder } from './deliveryOrder.model';

const mockPrismaService = {
  deliveryOrder: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

const mockDeliveryOrder: DeliveryOrder = {
  id: 'mock-id',
  country: 'MockCountry',
  city: 'MockCity',
  state: 'MockState',
  street: 'MockStreet',
  district: 'MockDistrict',
  code: 'MockCode',
  status: 'MockStatus',
  user: {
    // Mock user data here
  },
};

describe('DeliveryService', () => {
  let service: DeliveryService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeliveryService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<DeliveryService>(DeliveryService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllDeliveryOrder', () => {
    it('should return an array of delivery orders', async () => {
      mockPrismaService.deliveryOrder.findMany.mockResolvedValueOnce([mockDeliveryOrder]);

      const result = await service.getAllDeliveryOrder();

      expect(result).toEqual([mockDeliveryOrder]);
    });
  });

  describe('getOneDeliveryOrder', () => {
    it('should return a single delivery order', async () => {
      mockPrismaService.deliveryOrder.findUnique.mockResolvedValueOnce(mockDeliveryOrder);

      const result = await service.getOneDeliveryOrder('mock-id');

      expect(result).toEqual(mockDeliveryOrder);
    });
  });

  describe('createDeliveryOrder', () => {
    it('should create a new delivery order', async () => {
      mockPrismaService.deliveryOrder.create.mockResolvedValueOnce(mockDeliveryOrder);

      const result = await service.createDeliveryOrder(mockDeliveryOrder);

      expect(result).toEqual(mockDeliveryOrder);
      expect(mockPrismaService.deliveryOrder.create).toHaveBeenCalledWith({
        data: mockDeliveryOrder,
      });
    });
  });

  describe('updateDeliveryOrder', () => {
    it('should update an existing delivery order', async () => {
      const updatedMockDeliveryOrder: DeliveryOrder = {
        ...mockDeliveryOrder,
        status: 'UpdatedStatus',
      };

      mockPrismaService.deliveryOrder.update.mockResolvedValueOnce(updatedMockDeliveryOrder);

      const result = await service.updateDeliveryOrder('mock-id', updatedMockDeliveryOrder);

      expect(result).toEqual(updatedMockDeliveryOrder);
      expect(mockPrismaService.deliveryOrder.update).toHaveBeenCalledWith({
        where: { id: 'mock-id' },
        data: updatedMockDeliveryOrder,
      });
    });
  });

  describe('deleteDeliveryOrder', () => {
    it('should delete an existing delivery order', async () => {
      mockPrismaService.deliveryOrder.delete.mockResolvedValueOnce(mockDeliveryOrder);

      const result = await service.deleteDeliveryOrder('mock-id');

      expect(result).toEqual(mockDeliveryOrder);
      expect(mockPrismaService.deliveryOrder.delete).toHaveBeenCalledWith({
        where: { id: 'mock-id' },
      });
    });
  });
});
