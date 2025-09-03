import { Util } from "./Util";

export class Personagem {
    nome: string;
    classe: string;
    raca: string;
    nivel: number;
    arma: string;
    manaAtual: number;
    manaMaxima: number;
    vidaAtual: number;
    vidaMaxima: number;
    poderAtaque: number;

    constructor(nome: string) {
        this.nome = nome;
        this.classe = "";
        this.raca = "";
        this.nivel = 0;
        this.arma = "";
        this.manaAtual = 0;
        this.manaMaxima = 0;
        this.vidaAtual = 0;
        this.vidaMaxima = 0;
        this.poderAtaque = 0;
    }
    treinarPoderAtaque(): void {
        const incrementoDoTreino: number = Util.gerarNumeroAleatoria(5, 15);
        this.poderAtaque += incrementoDoTreino + this.poderAtaque * 1.1;
    }

    estaVivo() {
        return (this.vidaAtual > 0) 
    }
}