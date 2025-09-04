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

    subirNivel(): void {
        this.nivel += 1;
        this.vidaMaxima += Util.gerarNumeroAleatoria(10, 20);
        this.manaMaxima += Util.gerarNumeroAleatoria(5, 15);
        this.vidaAtual = this.vidaMaxima;
        this.manaAtual = this.manaMaxima;
    }

    regenerarMana(): void {
        const manaRegenerada: number = Util.gerarNumeroAleatoria(1, 10);
        this.manaAtual += manaRegenerada;
        if (this.manaAtual > this.manaMaxima) {
            this.manaAtual = this.manaMaxima;
        }
    }

    equiparArma(arma: string, poderAtaque: number): void {
        this.arma = arma;
        this.poderAtaque = poderAtaque;
    }

    status(): string {
        return `${this.nome}, ${this.classe} ${this.raca}, Nível: ${this.nivel}, Vida: ${this.vidaAtual}/${this.vidaMaxima}, Mana: ${this.manaAtual}/${this.manaMaxima}, Arma: ${this.arma}, Poder de Ataque: ${this.poderAtaque}`;
    }
    
    lancarFeitico(custoMana: number, dano: number): number {
        if (this.manaAtual >= custoMana) {
            this.manaAtual -= custoMana;
            return dano;
        } else {
            console.log(`${this.nome} não tem mana suficiente para lançar o feitiço.`);
            return 0;
        }
    }
    
    receberDano(dano: number): void {
        this.vidaAtual -= dano;
        if (this.vidaAtual < 0) {
            this.vidaAtual = 0;
        }
    }
    atacar(): number {
        const variacaoDano = Util.gerarNumeroAleatoria(-2, 2);
        return this.poderAtaque + variacaoDano;
    }

    atacarAlvo(alvo: Personagem): void {
        const dano = this.atacar();
        alvo.receberDano(dano);
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano.`);
    }
}