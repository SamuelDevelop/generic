
export class PostAssets{

    private quantidadeCurtidas : number;
    private quantidadeComentarios : number;

    constructor(quantidadeCurtidas : number, quantidadeComentarios : number){
        this.quantidadeComentarios = quantidadeComentarios;
        this.quantidadeCurtidas = quantidadeCurtidas;
    }

    getQuantidadeCurtidas(){
        return 0;
    }

    getQuantidadeComentarios(){
        return 0;
    }
}