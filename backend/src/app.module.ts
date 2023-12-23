import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { AuthModule } from './authentication/auth.module';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [UsersModule, AuthModule, DeliveryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
