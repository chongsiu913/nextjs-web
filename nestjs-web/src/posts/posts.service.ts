import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
@Injectable()
export class PostsService {
  findAll(): Post[] {
    return [{
        header: '123',
        body: 'body'
    }];
  }
}
