import { Personagem } from "./Personagem";
import Prompt from "prompt-sync";
import { Util } from "./Util";

const teclado = Prompt();

const p = new Personagem("Edécio");
p.classe = "Monge";
p.raca = "Morto-vivo";
p.nivel = Math.floor(1 + Math.random() * 99);
p.arma = "Cajado";
p.manaMaxima = 100;
p.manaAtual = p.manaMaxima;
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima;
p.poderAtaque = 1;

const a = new Personagem("Angelo");
a.classe = "Guerreiro";
a.raca = "Humano";
a.nivel = p.nivel * Util.gerarNumeroAleatoria(0.8, 1.2);
a.arma = "Espada longa";
a.manaMaxima = p.manaMaxima * Util.gerarNumeroAleatoria(0.8, 1.2);
a.manaAtual = a.manaMaxima * Util.gerarNumeroAleatoria(0.6, 1);
a.vidaMaxima = p.vidaMaxima * Util.gerarNumeroAleatoria(0.8, 1.2);
a.vidaAtual = a.vidaMaxima * Util.gerarNumeroAleatoria(0.6, 1);
a.poderAtaque = p.poderAtaque * Util.gerarNumeroAleatoria(0.8, 1.2);

while (true) {

    console.log("+------------MENU--------------+");
    console.log("|1. Treinar Poder de Ataque    |");
    console.log("|2. Ver Status                 |");
    console.log("|3. Checar se personagem vive  |");
    console.log("|4. Subir de nível             |");
    console.log("|5. Regenerar mana             |");
    console.log("|6. Equipar arma               |");
    console.log("|7. Lançar feitiço             |");
    console.log("|8. Atacar alvo                |");
    console.log("|9. Receber dano               |");
    console.log("|0. Sair                       |");
    console.log("+------------------------------+");
    console.log(' ')
    const escolha: number = +teclado("Escolha uma opção do menu: ")
    console.log(' ')

    if (escolha === 0) {
        break;
    }
    switch (escolha) {

        case 1:
            treinarPoderAtaque(p)
            break;

        case 2:

            console.log(' ')
            console.table(p);
            console.log(' ')
            break;

            case 3:
            console.log(' ')
            console.log(p.estaVivo()? "Personagem vivo": "Personagem subiu!")
            console.log(' ')
            break;

        case 4:
            p.subirNivel();
            break;

        case 5:
            p.regenerarMana();
            break;

        case 6:
            const arma: string = teclado("Nome da arma: ");
            const poderAtaque: number = +teclado("Poder de ataque da arma: ");
            p.equiparArma(arma, poderAtaque);
            break;

        case 7:
            const custoMana: number = +teclado("Custo de mana do feitiço: ");
            const dano: number = +teclado("Dano do feitiço: ");
            const danoCausado = p.lancarFeitico(custoMana, dano);
            console.log(`Feitiço lançado causando ${danoCausado} de dano.`);
            break;

        case 8:
            p.atacarAlvo(a);
            console.log(`${p.nome} atacou ${a.nome}. Vida restante de ${a.nome}: ${a.vidaAtual}`);
            break;

        case 9:
            p.receberDano();
            console.log(`${p.nome} recebeu dano. Vida atual: ${p.vidaAtual}`);
            break;

        case 0:
            console.log("Saindo...")
            break;

        default:
            console.log("Opção inválida!")
            break;
    }

}

function treinarPoderAtaque(person: Personagem): void {
    person.treinarPoderAtaque();
}