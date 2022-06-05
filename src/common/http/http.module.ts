import { Module } from '@nestjs/common';
import Axios from 'axios';
import { AXIOS_INSTANCE_TOKEN } from './http.constants';
import { HttpService } from './http.service';

@Module({
  providers: [
    HttpService,
    {
      provide: AXIOS_INSTANCE_TOKEN,
      useValue: Axios,
    },
  ],
  exports: [HttpService],
})
export class HttpModule {}
