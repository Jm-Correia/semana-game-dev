
class Bee extends Animacao {
    constructor(matriz, imagem, velocidade) {
        super(matriz, imagem, width - 104, height - 54, 54, 54, 104, 104)

        this.velocidade = velocidade;
    }

    move() {
        this.x = this.x - this.velocidade;
        if (this.x < -this.largura) {
            this.x = width;
        }
    }

}