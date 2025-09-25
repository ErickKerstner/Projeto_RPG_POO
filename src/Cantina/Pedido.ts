import { Cliente } from "./Cliente";
import { Item } from "./Item";
import { Util } from "./Util";

export class Pedido{
    itens: Item[];
    cliente: Cliente;
    status: string;
    numero: string;
    valorPagar: number;

    constructor(cliente: Cliente){
        this.itens = [];
        this.cliente = cliente;
        this.status = "Pendente";
        this.numero = Util.gerarNumeroDePedido()
        this.valorPagar = 0;
    }

    cancelarPedido(): void{
        this.status = "Cancelado";
    }

    alterarStatus(status: string): void{
        this.status = status;
    }

    adicionarItem(item: Item){
        this.itens.push(item);
        this.atualizarValorPagar();
    }

    obterCliente(): Cliente{
        return this.cliente;
    }

    atualizarValorPagar(){
        this.valorPagar = 0;
        for (const item of this.itens) {
            this.valorPagar += item.obterPrecoFinal()
        }
    }
}