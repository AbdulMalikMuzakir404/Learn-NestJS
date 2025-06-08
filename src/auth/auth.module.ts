import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
