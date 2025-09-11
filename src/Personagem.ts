import { Util } from "./Util";
const util: Util = new Util();
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
    this.poderAtaque += Math.round(incrementoDoTreino + this.poderAtaque * 1.1);
    console.log(' ')
    console.log("Poder de ataque aumentado para: " + this.poderAtaque)
    console.log(' ')
  }
  
  estaVivo() {
    return this.vidaAtual > 0;
  }
  
  subirNivel(): void {
    this.nivel += 1;
    this.vidaMaxima += Util.gerarNumeroAleatoria(10, 20);
    this.manaMaxima += Util.gerarNumeroAleatoria(5, 15);
    this.vidaAtual = this.vidaMaxima;
    this.manaAtual = this.manaMaxima;
    console.log(' ')
    console.log(`${this.nome} subiu para o nível ${this.nivel}!`);
    console.log(' ')
  }
  
  regenerar(): void {
    this.manaAtual = this.manaMaxima
    this.vidaAtual = this.vidaMaxima
    console.log(' ')
    console.log(`${this.nome} regenerou vida e mana!`);
    console.log(' ')
  }

  equiparArma(arma: string, poderAtaque: number): void {
    this.arma = arma;
    this.poderAtaque = poderAtaque;
  }

  lancarFeitico(custoMana: number, dano: number): number {
    if (this.manaAtual >= custoMana) {
      this.manaAtual -= custoMana;
      return dano;
    } else {
      console.log(`${this.nome} Não há mana suficiente para lançar o feitiço.`);
      return 0;
    }
  }

  receberDano(): void {
    this.vidaAtual -= Util.gerarNumeroAleatoria(10, 20);
    if (this.vidaAtual < 0) {
      this.vidaAtual = 0;
    }
  }
  atacar(): number {
    const variacaoDano = Util.gerarNumeroAleatoria(-2, 2);
    return this.poderAtaque + variacaoDano;
  }

  atacarAlvo(alvo: Personagem): void {

    alvo.manaMaxima = Math.round(this.manaMaxima * Util.gerarNumeroAleatoriaFloat(0.8, 1.2));
    alvo.manaAtual = Math.round(alvo.manaMaxima * Util.gerarNumeroAleatoriaFloat(0.8, 1));
    alvo.vidaMaxima = Math.round(this.vidaMaxima * Util.gerarNumeroAleatoriaFloat(0.8, 1.2));
    alvo.vidaAtual = Math.round(alvo.vidaMaxima * Util.gerarNumeroAleatoriaFloat(0.8, 1));
    alvo.poderAtaque = Math.round(this.poderAtaque * Util.gerarNumeroAleatoriaFloat(0.8, 1.2));

    console.table(this)
    console.table(alvo)

    // calcula quantos "pontos" este personagem tem a mais que o alvo em 3 atributos
    // cada expressão resulta em true/false; filter(Boolean).length conta os true
    const pontos = [
      this.vidaAtual > alvo.vidaAtual,
      this.manaAtual > alvo.manaAtual,
      this.poderAtaque > alvo.poderAtaque,
    ].filter(Boolean).length;

    // decide um vencedor se alguém tiver pelo menos 2 pontos (maioria)
    let vencedor: Personagem | null = null;
    if (pontos >= 2) vencedor = this;
    else { vencedor = alvo; }

    // imprime no console o vencedor ou empate
    if (vencedor) {
      console.log(`${vencedor.nome} venceu a batalha.`);
    } else {
      console.log("A batalha terminou em empate.");
    }
    // seta os atributos de this para o valor absoluto da diferença entre os atributos

    this.vidaAtual = Math.abs(this.vidaAtual - alvo.vidaAtual);
    this.manaAtual = Math.abs(this.manaAtual - alvo.manaAtual);

      // se vida ou mana de this zerar, "revive" ambos para 10
    if (this.vidaAtual === 0 || this.manaAtual === 0) {
      this.vidaAtual = 10;
      this.manaAtual = 10;
    }
    if (vencedor === alvo) {
      this.vidaAtual = 0;
      this.manaAtual = 0;
    }
  }
}
