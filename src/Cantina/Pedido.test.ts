
import {Pedido } from "./Pedido";
import { Cliente } from "./Cliente";
import { Item } from "./Item";
import { describe, expect, test, beforeEach } from "@jest/globals";

describe('Quando criar pedido', () => {
    test('O pedido deve iniciar como pendente', () =>{
        const cliente: Cliente = new Cliente()
        const pedido: Pedido = new Pedido()

        cliente = ("Erick", "53981560341")

        // validação do status inicial
        expect(pedido).toHaveProperty('status', 'pendente')

    })
});