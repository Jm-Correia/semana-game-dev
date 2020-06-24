

export default function calcularMatriz(largura, altura, linhas, colunas) {
    matriz = []

    for (let i = 0; i < linhas; i++) {
        x = 0;
        for (let j = 0; j < colunas; j++) {
            matriz.push([x, altura * i])
            x += largura
        }
    }
    return matriz;
}
