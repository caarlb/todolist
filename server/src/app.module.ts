import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { App, AppSchema } from './schemas/app.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://testing:testing123@cluster0.n6gdj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
