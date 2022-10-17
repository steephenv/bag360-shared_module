import { Injectable } from '@nestjs/common';

@Injectable()
export class AmqpService {
    startAmqp(){
        console.log("start amqp connection");
    }
}
