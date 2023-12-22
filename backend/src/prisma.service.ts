import { INestApplication, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";


export class PrismaService extends PrismaClient implements OnModuleInit{

     async onModuleInit() {
          await this.$connect()
     }

     async enableShutdownHooks(app: INestApplication){
        // @ts-expect-error: Unreachable code error
        this.$on('beforeExit',async () => {
                await app.close()
            })
     }

}