
class Personagem extends Animacao {
    constructor(matriz, imagem) {
        super(matriz, imagem, 0, height - 137, 110, 137, 200, 270)
        this.yInicial = height - this.altura;
        this.y = this.yInicial;
        this.gravidade = 10;
        this.velocidadePulo = 10;
    }

    pula() {
        this.velocidadePulo = - 50;
    }

    aplicarGravidade() {
        this.y = this.y + this.velocidadePulo;
        this.velocidadePulo = this.velocidadePulo + this.gravidade;
        if (this.y > this.yInicial) {
            this.y = this.yInicial;
            this.velocidadePulo = 0;
        }
    }

    isColidiu(inimigo) {
        //noFill();
        //rect(this.x, this.y, this.largura, this.altura);
        //rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);
        let precisao = .7;
        return collideRectRect(
            this.x,
            this.y,
            this.largura * precisao,
            this.altura * precisao,
            inimigo.x,
            inimigo.y,
            inimigo.largura * precisao,
            inimigo.altura * precisao);
    }

}