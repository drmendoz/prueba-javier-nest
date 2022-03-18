import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  HasMany,
  Model,
  NotNull,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import Comment from 'src/comment/entities/comment.entity';

@Table({ timestamps: true })
export default class Joke extends Model {
  @Column
  nombre: string;
  @Column(DataType.FLOAT)
  rating: number;
  @CreatedAt
  fechaCreacion: Date;
  @UpdatedAt
  fechaActualizacion: Date;
  @DeletedAt
  fechaEliminacion: Date;
  @HasMany(() => Comment)
  comments: Comment[];
}
