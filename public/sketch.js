let cenario;
let personagem;
let inimigo;
let imagemPersonagem;
let imagemInimigo;
let imagemCenario;
let sound;
let puloSOM;
let imagemBee;
let bee;

function preload() {
  sound = loadSound('asserts/sons/trilha_jogo.mp3');
  puloSOM = loadSound('asserts/sons/somPulo.mp3');
  imagemCenario = loadImage('asserts/cenario/floresta.png');
  imagemPersonagem = loadImage('asserts/personagem/correndo.png');
  imagemInimigo = loadImage('asserts/inimigos/gotinha.png');
  imagemBee = loadImage('asserts/fundo/bee.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(calcularMatriz(220, 270, 4, 4), imagemPersonagem);
  inimigo = new Inimigo(calcularMatriz(104, 104, 7, 4), imagemInimigo, 5);
  bee = new Bee(calcularMatriz(104, 104, 3, 2), imagemBee, 3);
  frameRate(40);
  //sound.loop();
  //sound.setVolume(0.1);
}

function draw() {
  cenario.exibir();
  cenario.move();
  bee.exibir();
  personagem.exibir();
  inimigo.exibir();
  inimigo.move();
  inimigo.upVelocidade();
  personagem.aplicarGravidade();

  if (mouseIsPressed) {
    personagem.pula();
    puloSOM.play();
  }

  if (personagem.isColidiu(inimigo)) {
    noLoop();
  }
}



function calcularMatriz(largura, altura, linhas, colunas) {
  matriz = [];

  for (let i = 0; i < linhas; i++) {
    x = 0;
    for (let j = 0; j < colunas; j++) {
      matriz.push([x, altura * i]);
      x += largura;
    }
  }
  return matriz;
}