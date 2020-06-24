
class Inimigo extends Animacao {
    constructor(matriz, imagem, velocidade) {
        super(matriz, imagem, width - 104, height - 54, 54, 54, 104, 104)
        this.velocidade = velocidade;
    }

    move() {
        this.x = this.x - this.velocidade;
        if (this.x < -this.largura) {
            this.x = width;
            this.velocidade = 5;
        }
    }
    upVelocidade() {
        this.velocidade += 0.2;
    }
}