import { Personagem } from "./personagem";

const p: Personagem = new Personagem();
p. nome = 'Edécio';
p.classe = 'Monge';
p.raca = 'Morto-Vivo';
p.nivel = Math.floor(1+ Math.random() * 99);
p.arma = 'Cajado';
p.manaMaxima = 100;
p.manaAtual = p.manaMaxima
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima
p.poderAtaque = 1;

console.table(p);