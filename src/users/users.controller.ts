import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Headers,
  Ip,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Get(['', ':id'])
  public getUsers(
    @Param('id', new DefaultValuePipe(undefined), ParseIntPipe)
    id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(limit);
    console.log(page);
    return 'You sent a get request to users endpoint';
  }

  @Post()
  public createUsers(
    @Body() request: CreateUserDto,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(request);
    console.log(headers);
    console.log(ip);
    return 'You sent a post request to users endpoint';
  }
}
