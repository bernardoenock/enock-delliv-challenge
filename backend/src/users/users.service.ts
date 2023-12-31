import { PrismaService } from "../prisma.service";
import { Users } from "./users.model";
import { ConflictException, Injectable } from "@nestjs/common";

@Injectable()
export class UsersService{
  constructor(private prisma: PrismaService) {}

  async getAllUser():Promise<Users[]>{
    return this.prisma.users.findMany()
  }

  async createUser(data:Users): Promise<Users>{
    const existing = await this.prisma.users.findUnique({
      where: {
        email: data.email
      }
    })

    if(existing) {
      throw new ConflictException('E-mail already registered... {~_~}')
    }

    return this.prisma.users.create({
      data
    })
  }

  async getOneUser(id: string): Promise<Users>{
    return this.prisma.users.findUnique({
      where: {
        id
      }
    })
  }
}