import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeConfigService } from './sequelizeconfig.service';
import { JokeModule } from './joke/joke.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [SequelizeModule.forRootAsync({ useClass: SequelizeConfigService }), JokeModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
