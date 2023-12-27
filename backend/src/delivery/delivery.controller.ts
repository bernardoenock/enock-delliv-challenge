import { Request, Response } from "express";
import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";

import { JwtAuthGuard } from "src/authentication/auth.guard";
import { DeliveryService } from "./delivery.service";
import { DeliveryOrder } from "./deliveryOrder.model";


@Controller('/delivery')
export class DeliveryController{

  constructor(
    private readonly deliveryService: DeliveryService
    ){}

  @Get()
  @UseGuards(JwtAuthGuard)
  async listAllDeliveryOrder(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any>{

    try {
      
      const result = await this.deliveryService.getAllDeliveryOrder()
      
      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully list delivery order!',
        result: result
      })
    } catch (error) {
      return response.status(500).json({
        status: 'ERROR!',
        message : 'Internal Server Error!'
      })
    }
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async listOneDeliveryOrder(
    @Req() request: Request,
    @Res() response: Response,
    @Param('id') id:string
  ): Promise<any>{

    try {
      
      const result = await this.deliveryService.getOneDeliveryOrder(id)
      
      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully list one delivery order!',
        result: result
      })
    } catch (error) {
      return response.status(500).json({
        status: 'ERROR!',
        message : 'Internal Server Error!'
      })
    }
  }


  @Post('/:userId')
  @UseGuards(JwtAuthGuard)
  async postDeliveryOrder(
    @Req() request: Request,
    @Res() response: Response,
    @Body() postData: DeliveryOrder,
    @Param('userId') userId:string
  ): Promise<any>{

    try {
      postData.user = {
        connect: {
          id: userId
        }
      }
      const result = await this.deliveryService.createDeliveryOrder(postData)
      
      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully create delivery order!',
        result: result
      })
    } catch (err) {
      return response.status(500).json({
        status: 'ERROR',
        message : 'Internal Server Error!',
        log: err
      })
    }
  }

  @Put('/:id')
  @UseGuards(JwtAuthGuard)
  async updateDeliveryOrder(
    @Req() request: Request,
    @Res() response: Response,
    @Body() updateData: DeliveryOrder,
    @Param('id') id:string
  ): Promise<any>{
    try {

      const result = await this.deliveryService.updateDeliveryOrder(id, updateData)
      
      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully update delivery order!',
        result: result
      })
    } catch (err) {
      return response.status(500).json({
        status: 'Ok!',
        message : 'Internal Server Error!'
      })
    }
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  async deleteDeliveryOrder(
    @Req() request: Request,
    @Res() response: Response,
    @Param('id') id:string
  ): Promise<any>{

    try {
      
      const result = await this.deliveryService.deleteDeliveryOrder(id)
      
      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully delete delivery order!',
        result: result
      })
    } catch (err) {
      return response.status(500).json({
        status: 'Ok!',
        message : 'Internal Server Error!'
      })
    }
  }

}