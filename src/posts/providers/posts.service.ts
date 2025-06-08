import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId);

    return [
      {
        user: user,
        title: 'test title',
        content: 'test content',
      },
      {
        user: user,
        title: 'test title',
        content: 'test content',
      },
    ];
  }
}
