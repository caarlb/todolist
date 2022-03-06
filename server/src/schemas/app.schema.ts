import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AppDocument = App & Document;

@Schema()
export class App {
  @Prop()
  title: string;

  @Prop()
  done: {
    type: boolean;
    default: false;
  };
}

export const AppSchema = SchemaFactory.createForClass(App);
