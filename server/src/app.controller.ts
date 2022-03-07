import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPosts(): string {
    return this.appService.getPosts();
  }

  @Post()
  createPost(): string {
    return this.appService.createPost();
  }

  @Patch(':id')
  updatePost(@Param('id') id: number) {
    return this.appService.updatePost(id);
  }

  @Delete(':id')
  deletePost(@Param('id') id: number) {
    return this.appService.deletePost(id);
  }
}
