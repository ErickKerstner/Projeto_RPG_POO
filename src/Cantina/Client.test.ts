import { describe, expect, test } from "@jest/globals";
import { Cliente } from "./Cliente";

describe("Quando mexer com o número de um cliente", () => {

    test("Deve invalidar um numero de telefone com menos de 11 digitos", () => {
        //Cenário
        const cliente: Cliente = new Cliente()
        cliente.telefone = '0123456789'

        //Teste
        const validade = cliente.validarTelefone(cliente.telefone)

        //
        expect(validade).toBe(false);
    });

    test("Deve validar um número de telefone com 11 digitos", () => {
        //Cenário
        const cliente: Cliente = new Cliente()
        cliente.telefone = '12345678910'

        //Teste
        const validade = cliente.validarTelefone(cliente.telefone) 

        //
        expect(validade).toBe(true);
    });

    test("Deve atualizar o número de telefone se ele for válido", () => {
        //
        const cliente: Cliente = new Cliente()
        cliente.telefone = '10101010101'

        //
        cliente.atualizarTelefone('11100011100')

        //
        expect(cliente.telefone).toBe('11100011100')
    });

    test("Deve lançar um erro ao tentar lançar número inválido", () =>{
        //
        const cliente: Cliente = new Cliente()
        cliente.telefone = '10101010101'

        //cliente.atualizarTelefone('1010101010')

        expect(() => cliente.atualizarTelefone("1010101010")).toThrow("Telefone Inválido");

    });

    test('Deve lançar um erro ao tentar criar um cliente com nome inválido (menos de 3 caracteres)', () => {
        //
        const cliente: Cliente = new Cliente()
        expect(() => cliente.criarCliente("Al", "53981560341")).toThrow("Nome inválido");
    });

});