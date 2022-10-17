import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { AmqpModule } from './amqp/amqp.module';
import { MongoModule } from './mongo/mongo.module';

@Module({
  providers: [SharedService],
  exports: [SharedService],
  imports: [AmqpModule, MongoModule],
})
export class SharedModule {}
