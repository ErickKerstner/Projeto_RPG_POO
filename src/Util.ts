/* import { fakerPT_BR as faker } from '@faker-js/faker'; */

export class Util {

    static gerarNumeroAleatoria(minimo: number, maximo: number): number {
        return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    }

    static gerarNumeroAleatoriaFloat(minimo: number, maximo: number): number {
        return Math.random() * (maximo - minimo) + minimo;
    }
}
/* 
    static gerarNome(): string{
        const randomName = faker.person.firstName();
        return randomName;
    }
    static gerarEmail(nomeDoUsuario: string){
        return faker.internet.email({firstName: nomeDoUsuario})
    }
}

for (let index = 0; index < 10; index++) {
    const nome = Util.gerarNome()
    const email = Util.gerarEmail(nome)
}
 */