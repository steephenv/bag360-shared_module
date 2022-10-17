import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoService {
    constructor(){
        console.log("mongo service working");
    }
    startConnection(){
        console.log("start connection");
    }

    getModels(){
        return {
            "flight":{}
        }
    }
}
