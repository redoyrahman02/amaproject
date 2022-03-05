import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsModule } from './forms/forms.module';
import { ApiResponseModule } from './api-response/api-response.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), 
    MongooseModule.forRoot(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }),
    FormsModule, ApiResponseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
