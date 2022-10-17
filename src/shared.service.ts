import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
    a:number = 0;
    constructor(){;
        this.a++;
        console.log("hello from library",this.a);
    }
    testDemo(){
        console.log("test Demo success");
    }
}
