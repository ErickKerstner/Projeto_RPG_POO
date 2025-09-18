import { Util } from "./Util";
const util: Util = new Util();

export default class Personagem {
  constructor(
  private _nome: string,
  private _classe: string,
  private _raca: string,
  private _nivel: number,
  private _arma: string,
  private _manaAtual: number = 0,
  private _manaMaxima: number = 100,
  private _vidaAtual: number = 100,
  private _vidaMaxima: number = 100,
  private _poderAtaque: number = 1,
  ) {}
  
  public get nome(): string {
    return this._nome;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }
  public get classe(): string {
    return this._classe;
  }
  public set classe(classe: string) {
    this._classe = classe;
  }
  public get raca(): string {
    return this._raca;
  }
  public set raca(raca: string) {
    this._raca = raca;
  }
  public get nivel(): number {
    return this._nivel;
  }
  public set nivel(nivel: number) {
    this._nivel = nivel;
  }
  public get arma(): string {
    return this._arma;
  }
  public set arma(arma: string) {
    this._arma = arma;
  }
  public get manaAtual(): number {
    return this._manaAtual;
  }
  public set manaAtual(manaAtual: number) {
    this._manaAtual = manaAtual;
  }
  public get manaMaxima(): number {
    return this._manaMaxima;
  }
  public set manaMaxima(manaMaxima: number) {
    this._manaMaxima = manaMaxima;
  }
  public get vidaAtual(): number {
    return this._vidaAtual;
  }
  public set vidaAtual(vidaAtual: number) {
    this._vidaAtual = vidaAtual;
  }
  public get vidaMaxima(): number {
    return this._vidaMaxima;
  }
  public set vidaMaxima(vidaMaxima: number) {
    this._vidaMaxima = vidaMaxima;
  }
  public get poderAtaque(): number {
    return this._poderAtaque;
  }
  public set poderAtaque(poderAtaque: number) {
    this._poderAtaque = poderAtaque;
  }
  
  public treinarPoderAtaque(): void {
    const incrementoDoTreino: number = Util.gerarNumeroAleatoria(5, 15);
    this.poderAtaque += Math.round(incrementoDoTreino + this.poderAtaque * 1.1);
    console.log(' ')
    console.log("Poder de ataque aumentado para: " + this.poderAtaque)
    console.log(' ')
  }
  
  public estaVivo() {
    return this.vidaAtual > 0;
  }
  
  public subirNivel(): void {
    this.nivel += 1;
    this.vidaMaxima += Util.gerarNumeroAleatoria(10, 20);
    this.manaMaxima += Util.gerarNumeroAleatoria(5, 15);
    this.vidaAtual = this.vidaMaxima;
    this.manaAtual = this.manaMaxima;
    console.log(' ')
    console.log(`${this.nome} subiu para o nível ${this.nivel}!`);
    console.log(' ')
  }
  
  public regenerar(): void {
    this.manaAtual = this.manaMaxima
    this.vidaAtual = this.vidaMaxima
    console.log(' ')
    console.log(`${this.nome} regenerou vida e mana!`);
    console.log(' ')
  }

  public equiparArma(arma: string, poderAtaque: number): void {
    this.arma = arma;
    this.poderAtaque = poderAtaque;
  }

  public lancarFeitico(custoMana: number, dano: number): number {
    if (this.manaAtual >= custoMana) {
      this.manaAtual -= custoMana;
      return dano;
    } else {
      console.log(`${this.nome} Não há mana suficiente para lançar o feitiço.`);
      return 0;
    }
  }

  public receberDano(): void {
    this.vidaAtual -= Util.gerarNumeroAleatoria(10, 20);
    if (this.vidaAtual < 0) {
      this.vidaAtual = 0;
    }
  }
  public atacar(): number {
    const variacaoDano = Util.gerarNumeroAleatoria(-2, 2);
    return this.poderAtaque + variacaoDano;
  }

  public atacarAlvo(alvo: Personagem): void {

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
