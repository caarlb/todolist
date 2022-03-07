import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class AppService {
  getPosts(): string {
    return 'Logic to get data from collection';
  }

  createPost(): string {
    return 'Logic to create post a new task';
  }

  updatePost(id: number) {
    return `logict to update existing task with id: ${id}`;
  }

  deletePost(id: number) {
    return `logict to update existing task with id: ${id}`;
  }
}
