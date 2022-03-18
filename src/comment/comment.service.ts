import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import Comment from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment) private commentModel: typeof Comment) {}
  create(createCommentDto: CreateCommentDto) {
    return this.commentModel.create(createCommentDto as any);
  }

  findAll() {
    return this.commentModel.findAll();
  }

  findOne(id: number) {
    return this.commentModel.findByPk(id);
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.commentModel.update(updateCommentDto, { where: { id } });
  }

  remove(id: number) {
    return this.commentModel.destroy({ where: { id } });
  }
}
