export class Conta {
    saldo: number = 0;
    
    depositar(valor: number): void {
        if (valor >= 0) {
            this.saldo += valor;
        } else {
            console.log("Valor de depósito deve ser positivo.");
        }
    }
    extrato(): void {
        console.log(`Saldo atual: ${this.saldo}`);
    }
    sacar(valor: number): void {
        if (valor >= 0 && valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Valor insuficiente ou seu saque deve ser maior que 0.");
        }
    }
}