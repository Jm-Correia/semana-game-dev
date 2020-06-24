
class Animacao {
    constructor(
        matriz,
        imagem,
        x,
        y,
        largura,
        altura,
        larguraSprite,
        alturaSprite
    ) {
        this.matriz = matriz;
        this.imagem = imagem;
        this.x = x;
        this.y = y
        this.largura = largura;
        this.altura = altura;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;
        this.linha = 0;
    }
    exibir() {
        image(this.imagem,
            this.x,
            this.y,
            this.largura,
            this.altura,
            this.matriz[this.linha][0],
            this.matriz[this.linha][1],
            this.larguraSprite,
            this.alturaSprite
        );
        this.anima();
    }

    anima() {
        this.linha++;
        if (this.linha >= this.matriz.length - 1) {
            this.linha = 0;
        }
    }
}