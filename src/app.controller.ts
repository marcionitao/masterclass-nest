import { Body, Controller, Post } from '@nestjs/common';
import { CreateHeroesBody } from './dtos/create-heroes-body';
import { HeroesRepository } from './repositories/heroes-repository';

@Controller('app')
export class AppController {
  constructor(private heroesRepository: HeroesRepository) {}

  @Post('hello')
  // para passar o parametro prisma - @Body() body: any
  async getHello(@Body() body: CreateHeroesBody) {
    // obtendo os dados do body passado na requisição desetruturando
    const { name, powers, functions } = body;
    // chamando o repositorio para criar um herói
    await this.heroesRepository.create(name, powers, functions);
  }
}
