import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';

import { forwardRef, Module } from '@nestjs/common';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [forwardRef(() => UsersModule)],
  exports: [AuthService],
})
export class AuthModule {}
