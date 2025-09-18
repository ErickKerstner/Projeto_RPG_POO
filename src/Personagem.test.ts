import {describe, expect, it, test} from '@jest/globals';
import { Personagem } from "./Personagem";

describe('Quando manipular o personagem', () => {
    test('o novo poder de ataque deve ser maior que o poder de ataque anteriormente', () => {
        // Cenário
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

        const poderAnterior = p.poderAtaque;

        // Execução
        p.treinarPoderAtaque()

        // Validação
        expect(p.poderAtaque).toBeGreaterThan(poderAnterior);
    });
});