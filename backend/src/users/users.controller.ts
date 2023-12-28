import { Controller, Get, Param, Req, Res, UseGuards } from "@nestjs/common";
import { Request, Response } from "express";

import { UsersService } from "./users.service";
import { JwtAuthGuard } from "../authentication/auth.guard";
import { User } from "./user.decorator";

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService){}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllUsers(
    @Req() request: Request,
    @Res() response: Response
    ): Promise<any> {
      try {
        
        const result = await this.userService.getAllUser();

        return response.status(200).json({
          status: 'Ok!',
          message: 'Successfully fetch data!',
          result: result
        })
      } catch (err) {
        
        return response.status(500).json({
          status: 'Ok!',
          message : 'Internal Server Error!'
        })
      }
    }

  @Get('/profile')
  @UseGuards(JwtAuthGuard)
  async getProfileUser(
    @Req() request: Request,
    @Res() response: Response,
    @User() user: any
    ): Promise<any> {
      try {
        
        const result = await this.userService.getOneUser(user.id);

        return response.status(200).json({
          status: 'Ok!',
          message: 'Successfully fetch data!',
          result: result
        })
      } catch (err) {
        
        return response.status(500).json({
          status: 'error',
          message : 'Internal Server Error!'
        })
      }
    }

  @Get('/look/:id')
  @UseGuards(JwtAuthGuard)
  async getOneUser(
    @Req() request: Request,
    @Res() response: Response,
    @Param('id') id:string
    ): Promise<any> {
    try {
        
      const result = await this.userService.getOneUser(id);

      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully fetch data!',
        result: result
      })
    } catch (err) {
      
      return response.status(500).json({
        status: 'error',
        message : 'Internal Server Error!'
      })
    }
  }
}