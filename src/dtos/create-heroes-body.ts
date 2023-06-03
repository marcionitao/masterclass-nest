import { IsNotEmpty, Length } from 'class-validator';

// esta class é usada como uma interface para o PrismaService
export class CreateHeroesBody {
  @IsNotEmpty()
  @Length(5, 20)
  name: string;

  @IsNotEmpty()
  powers: string;

  @IsNotEmpty({
    message: 'Funções não podem ser vazias',
  })
  functions: string;
}
