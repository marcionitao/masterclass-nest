import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { HeroesRepository } from './repositories/heroes-repository';
import { PrismaHeroesRepository } from './repositories/prisma/prisma-heroes-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    // injeção de dependencias
    { provide: HeroesRepository, useClass: PrismaHeroesRepository },
  ],
})
export class AppModule {}
