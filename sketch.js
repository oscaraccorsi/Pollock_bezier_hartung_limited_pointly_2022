let baseUrlPictures = ' https://oscaraccorsi.github.io/hartung/';
let baseURLImage = 'https://oscaraccorsi.github.io/pictures/';
let logo;

let x = [];
let y = [];

let X = [];
let Y = [];
let count = 1;


let fr = 4;
let pointX, pointY;

let counter;

let pre = 0;

let inc=20;
//let dist=20;

let img; 
let palette = [];
let palettes = [];
let pictureList = ['hartung01.jpg', 
                   'hartung13.jpg', 
                   'hartung03.jpg', 
                   'hartung04.jpeg',
                   'hartung05.jpeg', 
                   'hartung06.jpg', 
                   'hartung07.jpg',  
                   'hartung08.jpeg', 
                   'hartung09.jpg', 
                   'hartung10.jpg', 
                   'hartung11.jpg',
                   'hartung12.jpg'];
let incPalette;
let marginX, marginY;
// let dist = [15, 20, 25, 30, 40, 50];
 
let dst;
let frCnt;  

let oneCol;

let coeffX, coeffY;
let sec, min, h, day;  



//--------------------------------------preload
function preload() {
  h = hour()%12;
  img = loadImage(baseUrlPictures +
                  pictureList[h]);
  logo = loadImage(baseURLImage + 
                   'good one white.png');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//-------------------------------------------SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fr);
  incPalette = 0;
  pointX=random(50, width-50);
  pointY=random(50, height-50);
  
  count = round(min/10);
  counter = round(random(0, 3));
  
//------------------------------------------------palette 
  img.resize(100, 0);
  img.loadPixels();
  
  for (let i=0; 
       i < img.pixels.length; 
       i += 4) {
    
    let r = img.pixels[i]; 
    let g = img.pixels[i+1]; 
    let b = img.pixels[i+2]; 
    let alpha = round(random(100, 250));
    let c = color(r, g, b, alpha);
    palette.push(c);    
  }
  console.log(baseUrlPictures + pictureList[h]);
  console.log(counter, h); 
}
//-------------------------------------DRAW
function draw() {
  
   
  let frameSec = fr;
  let frameMin = fr*60;
  let time = (frameMin*counter)+(frameSec+33);
  
  if (frameCount >= time) {
    h = hour()%12;
    preload();
    setup();
    frameCount = 0;  
  }
  
  push();
  strokeWeight(round(random(1, 3)))
  noFill();
  stroke(palette[incPalette]); 
  bezier(pointX+round(random(-20, 20)), 
         pointY+round(random(-20, 20)),
         random(windowWidth), 
         random(windowHeight),
         random(windowWidth), 
         random(windowHeight),
         windowWidth/2+(random(-50, 50)), 
         random(windowHeight));
  incPalette++;
  if (incPalette == palette.lenght) {
    incPalette = 0;
  }
  pop();    
}
  
function mousePressed() {
  imageMode(CENTER);
  let xLogo = windowWidth-40;
  logo.resize(40, 0);
  image(logo, xLogo, windowHeight-25);
  tint(200);
  imageMode(CORNER);
  save();  
}
