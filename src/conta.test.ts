import {describe, expect, it, test} from '@jest/globals';
import { Conta } from './Conta';
/* 
describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(1 + 2).toBe(3);
    });
});
 */ 

describe('Quando depositar', () => {
    it("Deve aceitar depósito de valores positivos", () => {
        //Cenário
        const conta: Conta = new Conta();
        conta.saldo = 0;

        //Execução
        conta.depositar(100);

        //Verificação
        expect(conta.saldo).toBe(100);
    }); 

    it("Não deve aceitar depósito de valores negativos", () => {
        //Cenário
        const conta: Conta = new Conta();
        conta.saldo = 100;

        //Execução
        conta.depositar(-50);

        //Verificação
        expect(conta.saldo).toBe(100);
    });

    describe('Quando sacar', () => {
        it("Deve permitir saque quando houver saldo suficiente", () => {
            //Cenário
            const conta: Conta = new Conta();
            conta.saldo = 200;


            conta.sacar(100);


            expect(conta.saldo).toBe(100);
        });

        it("Não deve permitir saque quando o saldo for insuficiente", () => {

            const conta: Conta = new Conta();
            conta.saldo = 50;


            conta.sacar(100);


            expect(conta.saldo).toBe(50);
        });
    });
});