import * as bcrypt from 'bcryptjs'
import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { PrismaService } from "src/prisma.service";
import { UsersService } from "src/users/users.service";

import { Users } from 'src/users/users.model';

import { LoginDto } from './dto/login-user.dto';
import { RegisterUsersDto } from './dto/register-user.dto';

@Injectable()
export class AuthService{

  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
    private readonly usersService: UsersService
  ){}

  async login(loginDto: LoginDto): Promise<any>{
    const { email, password } = loginDto;

    const users = await this.prismaService.users.findUnique({
      where: { email }
    })

    if(!users){
      throw new NotFoundException('User not found... {-_-}')
    }

    const validatePassword = await bcrypt.compare(password, users.password)

    if(!validatePassword){
      throw new NotFoundException('Invalid password... {0.0}')
    }

    return {
      token: this.jwtService.sign({ email })
    }
  }

  async register(createDto: RegisterUsersDto): Promise<any>{
    const createUser = new Users();
    createUser.name = createDto.name
    createUser.email = createDto.email
    createUser.password = await bcrypt.hash(createDto.password, 10)
    
    const user = await this.usersService.createUser(createUser);

    return {
      token: this.jwtService.sign({ email: user.email }),
    };
  }
}