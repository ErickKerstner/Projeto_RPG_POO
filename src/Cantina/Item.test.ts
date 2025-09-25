import { describe, expect, test } from "@jest/globals";
import { Item } from "./Item";
import { Cliente } from "./Cliente";
/*
WHEN
... SHOLD SHOULD NOT

QUANDO
... DEVE ou NÃO DEVE
*/

describe("Quando manipular item", () => {
    test("Deve alterar o preço final sem desconto", () => {

        const item: Item = new Item();
        const PRECO_DEFINIDO = 20;
        item.preco = PRECO_DEFINIDO;

        const precoFinal = item.obterPrecoFinal()

        expect(precoFinal).toBe(PRECO_DEFINIDO);

    });

    test("Deve aplicar um desconto e calcular o preço final corretamente",() => {
       const it = new Item();
       it.preco = 20;

       it.aplicarDesconto(10)

       expect(it.obterPrecoFinal()).toBe(18);
    })

    test("Deve indicar que não está em promoção se não houver desconto", () => {
        const it: Item = new Item();
        it.preco = 50;

        //const promocao: boolean = it.emPromocao();

        expect(it.emPromocao()).toBeFalsy()
    })

    test("Deve indicar que está em promoção após aplicar um desconto", () => {
        const it = new Item();
        it.preco = 100;

        it.aplicarDesconto(10);
        const estahEmPromocao = it.emPromocao()

        expect(estahEmPromocao).toBeTruthy()

    })
})