import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Model } from 'sequelize-typescript';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';
import Joke from './entities/joke.entity';

@Injectable()
export class JokeService {
  constructor(@InjectModel(Joke) private jokeModel: typeof Joke) {}
  create(createJokeDto: CreateJokeDto) {
    return this.jokeModel.create(createJokeDto as any);
  }

  findAll() {
    return this.jokeModel.findAll({ include: ['comments'] });
  }

  async findOne(id: number) {
    const joke = await this.jokeModel.findByPk(id, {
      include: [
        {
          association: 'comments',
          attributes: ['id', 'descripcion'],
          where: { id: 2 },
        },
      ],
    });
    if (!joke) {
      throw new NotFoundException('No existe joke');
    }
    return joke;
  }

  update(id: number, updateJokeDto: UpdateJokeDto) {
    return this.jokeModel.update(updateJokeDto, { where: { id } });
  }

  remove(id: number) {
    return this.jokeModel.destroy({ where: { id } });
  }
}
