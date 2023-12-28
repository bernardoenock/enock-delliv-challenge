import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma.service";
import { DeliveryOrder } from "./deliveryOrder.model";

@Injectable()
export class DeliveryService{

  constructor(private prisma: PrismaService){}

  async getAllDeliveryOrder(): Promise<DeliveryOrder[]>{
    return this.prisma.deliveryOrder.findMany()
  }

  async getOneDeliveryOrder(id: string): Promise<DeliveryOrder>{
    return this.prisma.deliveryOrder.findUnique({
      where: { id }
    })
  }

  async createDeliveryOrder(data: DeliveryOrder): Promise<DeliveryOrder | null>{
    return this.prisma.deliveryOrder.create({
      data
    })
  }

  async updateDeliveryOrder(id: string, data: DeliveryOrder): Promise<DeliveryOrder>{
    return this.prisma.deliveryOrder.update({
      where: { id },
      data
    })
  }

  async deleteDeliveryOrder(id: string): Promise<DeliveryOrder>{
    return this.prisma.deliveryOrder.delete({
      where: { id }
    })
  }


}