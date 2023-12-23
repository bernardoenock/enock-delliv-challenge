import { Prisma } from "@prisma/client";

export class DeliveryOrder implements Prisma.DeliveryOrderCreateInput{
  id?: string;
  country: string;
  city: string;
  state: string;
  street: string;
  district: string;
  code: string;
  status: string;
  user?: Prisma.UsersCreateNestedOneWithoutDeliveryOrdersInput;
}