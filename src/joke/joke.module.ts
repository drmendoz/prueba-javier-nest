import { Module } from '@nestjs/common';
import { JokeService } from './joke.service';
import { JokeController } from './joke.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import Joke from './entities/joke.entity';

@Module({
  controllers: [JokeController],
  providers: [JokeService],
  imports: [SequelizeModule.forFeature([Joke])],
})
export class JokeModule {}
