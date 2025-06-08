import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  public findAll(userId: string) {
    return [
      {
        title: 'test title',
        content: 'test content',
      },
      {
        title: 'test title',
        content: 'test content',
      },
    ];
  }
}
