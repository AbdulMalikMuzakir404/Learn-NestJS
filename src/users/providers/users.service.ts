import { Injectable } from '@nestjs/common';
import { GetUserParamDto } from '../dtos/get-user-param.dto';

@Injectable()
export class UsersService {
  public findAll(
    getUsersParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        id: 1,
        firstName: 'Dadang',
        email: 'dadang@gmail.com',
      },
      {
        id: 2,
        firstName: 'Atin',
        email: 'atin@gmail.com',
      },
    ];
  }

  public findOneById(id: number) {
    return {
      id: 1,
      firstName: 'Dadang',
      email: 'dadang@gmail.com',
    };
  }
}
