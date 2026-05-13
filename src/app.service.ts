import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealtCheck() {
    return {message: "API is running"};
  }
}
