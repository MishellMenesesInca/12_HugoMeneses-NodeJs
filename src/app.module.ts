import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UbigeoEntity} from "./entities/ubigeo.entity";
import {UbigeoController} from "./controllers/ubigeo.controller";
import {UbigeoService} from "./services/ubigeo.services";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'localhost',
      port: 1521,
      username: 'Softfitt',
      password: '123',
      sid: 'xe',
      entities: [__dirname + '/**/**.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
    }),
      TypeOrmModule.forFeature([UbigeoEntity])
  ],
  controllers: [AppController, UbigeoController],
  providers: [AppService, UbigeoService],
})
export class AppModule {}
