import { Prisma } from "@prisma/client";

export class Users implements Prisma.UsersCreateInput{
  id?: string;
  name: string;
  email: string;
  password: string;
  deliveryOrders?: Prisma.DeliveryOrderCreateNestedManyWithoutUserInput;
}