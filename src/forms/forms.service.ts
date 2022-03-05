import { Injectable , NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { formsInterface} from './interfaces/forms.interface'
import {formsAuditLogInterface} from './interfaces/forms.audit.log.interface';
import {ApiResponseService} from '../api-response/api-response.service' ;

@Injectable()
export class FormsService {
  constructor(
    @InjectModel('formsSchema') private readonly formsModel: Model<formsInterface>,   
    @InjectModel('formsAuditLogSchema') private readonly formAuditLogModel: Model<formsAuditLogInterface>,
    private apiResponse: ApiResponseService,     
  ){}
  create(createFormDto: CreateFormDto) {
    return 'This action adds a new form';
  }

  findAll() {
    return `This action returns all forms`;
  }

  async findOne(id: any) {
    const form = await this.formsModel.findById( id ); 

    const auditLog =  await this.formAuditLogModel.find({formId: id }).sort({createdAt: 1 });

    const responseData = {
      formDetails: form, 
      formAuditLog: auditLog
    }; 

    return this.apiResponse.successResponse('form and edit log given ', responseData );
  }

  async update(id: any, updateFormDto: any) {
    const form = await this.formsModel.findById( id );
    let error = false ; 
    let errorMessage = '' ; 

    if( updateFormDto.name ){
      form.name = updateFormDto.name ; 
    }else{
      error = true ; 
      errorMessage = 'Form name missing ' ; 
    }

    if( updateFormDto.location ){
      form.location = updateFormDto.location ; 
    }else{
      error = true ; 
      errorMessage = 'Form location missing ' ; 
    }
    if( updateFormDto.latitude ){
      form.latitude = updateFormDto.latitude; 
    }else{
      error = true ; 
      errorMessage = 'Form latitude missing ' ; 
    }
    if( updateFormDto.longitude ){
      form.longitude = updateFormDto.longitude; 
    }else{
      error = true ; 
      errorMessage = 'Form longitude missing ' ; 
    }

    if( error ){
      return this.apiResponse.errorResponse(errorMessage, 404 );
    }

    await form.save(); 
    
    const logData = {
      formId: form._id , 
      modificationDate: new Date() , 
      modifiedBy: {
        objectId: updateFormDto.userId, 
        name: updateFormDto.userFullName
      }
    };

    const formAuditLog = new  this.formAuditLogModel(logData); 

    await formAuditLog.save(); 

    return this.apiResponse.successResponse('form udpated ', formAuditLog );


  }

  remove(id: number) {
    return `This action removes a #${id} form`;
  }
}
