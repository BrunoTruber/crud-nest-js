import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose/';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:YmPQUoXavZYJcPhN@cluster0.d39pv.mongodb.net/db_user',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
