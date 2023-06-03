/*repositório de dados do heróis, serve para persistir os dados ou seja, 
criamos uma classe abstracta para os metodos que serão utilizados*/
export abstract class HeroesRepository {
  abstract create(
    name: string,
    powers: string,
    functions: string,
  ): Promise<void>;
}
