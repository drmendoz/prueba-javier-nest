import {
  BelongsTo,
  Column,
  CreatedAt,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import Joke from 'src/joke/entities/joke.entity';

@Table({ timestamps: true })
export default class Comment extends Model {
  @Column
  descripcion: string;
  @ForeignKey(() => Joke)
  @Column
  idJoke: number;
  @BelongsTo(() => Joke)
  joke: Joke;
  @CreatedAt
  fechaCreacion: Date;
  @UpdatedAt
  fechaActualizacion: Date;
  @DeletedAt
  fechaEliminacion: Date;
}
