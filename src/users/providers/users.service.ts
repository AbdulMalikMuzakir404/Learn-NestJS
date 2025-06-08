import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from '../../auth/providers/auth.service';
import { GetUserParamDto } from '../dtos/get-user-param.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  public findAll(
    getUsersParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();

    console.log(isAuth);

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

  public findOneById(id: string) {
    return {
      id: 1,
      firstName: 'Dadang',
      email: 'dadang@gmail.com',
    };
  }
}
