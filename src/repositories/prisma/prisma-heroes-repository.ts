import { PrismaService } from 'src/database/prisma.service';
import { HeroesRepository } from '../heroes-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaHeroesRepository implements HeroesRepository {
  constructor(private prisma: PrismaService) {}
  async create(name: string, powers: string, functions: string): Promise<void> {
    await this.prisma.hero.create({
      data: {
        id: randomUUID(),
        name,
        powers,
        functions,
      },
    });
  }
}
