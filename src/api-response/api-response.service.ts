import { Injectable } from '@nestjs/common';
import { CreateApiResponseDto } from './dto/create-api-response.dto';
import { UpdateApiResponseDto } from './dto/update-api-response.dto';

@Injectable()
export class ApiResponseService {
  create(createApiResponseDto: CreateApiResponseDto) {
    return 'This action adds a new apiResponse';
  }

  findAll() {
    return `This action returns all apiResponse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apiResponse`;
  }

  update(id: number, updateApiResponseDto: UpdateApiResponseDto) {
    return `This action updates a #${id} apiResponse`;
  }

  remove(id: number) {
    return `This action removes a #${id} apiResponse`;
  }

  successResponse(msg=null, data=null, code=200){
    return {
      headers: {},
      message:msg,
      body: {
        data: data,
      },
      statusCode: code,
      error: false
    };
  }

  errorResponse(msg= null, code=400){
    return {
      error: true,
      statusCode: code,
      message: msg
    };
  }
}
