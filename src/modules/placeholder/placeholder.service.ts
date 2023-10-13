import { Injectable } from '@nestjs/common';
import { Placeholder } from './placeholder.entity';
import axios from 'axios';

@Injectable()
export class PlaceholderService {
  public async findAll(): Promise<Placeholder[]> {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return posts.data;
  }

  public async findOne(id: number): Promise<Placeholder> {
    const post = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );

    return post.data;
  }
}
