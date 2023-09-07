let timbres = [];
let backgroundImage;
let timbreImage;
let image1;
let image2;
let image3;

function setup() {
  createCanvas(700, 400);
  background(200); // Fondo gris inicial
  // Carga una imagen de fondo
  backgroundImage = loadImage('fondoms.png'); // Reemplaza 'narutofondo.jpg' con la ruta de tu imagen de fondo
  // Carga una imagen de timbre
  timbreImage = loadImage('soldadms.gif'); // Reemplaza 'naruto.gif' con la ruta de tu imagen de timbre
  // Carga las dos nuevas imágenes
  image1 = loadImage('zomsol.gif');
  image2 = loadImage('sanzom.gif');
  image3 = loadImage('msz.gif');
}

function draw() {
  // Dibuja la imagen de fondo (ajustada al tamaño del lienzo)
  image(backgroundImage, 0, 0, width, height);

  for (let i = timbres.length - 1; i >= 0; i--) {
    timbres[i].update();
    timbres[i].display();
    
    if (timbres[i].isFinished()) {
      timbres.splice(i, 1);
    }
  }
}

function mouseClicked() {
  let x = mouseX;
  let y = mouseY;
  let t = new Timbre(x, y);

  // Escoge aleatoriamente una de las tres imágenes para mostrar
  let randomImage = random([image1, image2, image3]);
  t.setImage(randomImage);

  timbres.push(t);
}

class Timbre {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = 255;
    this.fadeSpeed = 2;
    this.lifespan = 5000;
    this.image = timbreImage; // Imagen de timbre por defecto
  }

  update() {
    this.alpha -= this.fadeSpeed;
  }

  display() {
    tint(255, this.alpha); // Aplica opacidad a la imagen
    let imageSize = 75; // Tamaño deseado para la imagen del timbre (ajustado)
    image(
      this.image,
      this.x - imageSize / 2,
      this.y - imageSize / 2,
      imageSize,
      imageSize
    ); // Centra y ajusta el tamaño de la imagen
  }

  isFinished() {
    return this.alpha <= 0;
  }

  setImage(img) {
    this.image = img;
  }
}
