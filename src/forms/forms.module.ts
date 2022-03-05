import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { formsSchema } from './schemas/forms.schema';
import { formsAuditLogSchema } from './schemas/formsAuditLog.schema' ;
import {ApiResponseService} from '../api-response/api-response.service' ;

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'formsSchema', schema: formsSchema },
    { name: 'formsAuditLogSchema', schema: formsAuditLogSchema },
  ])],
  controllers: [FormsController],
  providers: [FormsService, ApiResponseService]
})
export class FormsModule {}
