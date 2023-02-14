
let bobas = []; // array of bobas
let bgc;
let shc;

function setup() {
  createCanvas(500,500);
  bgc = color(253,243,179);
  tbc = color(22);
  fill(255);
  frameRate(50);
  textSize (60);

  for (let i = 0; i < 60; i++) {
    bobas.push(new Boba());
  }
}



function draw() {
  background(bgc);


  let h = hour();   //0-24
  let m = minute();   //0-60
  let s = second ();  //0-60


  // rotate(-20);
  ///CLOCK CODE
  // translate(width /2, height /2);
  // stroke(255);
  // strokeWeight(2);
  // rotate(20);

    // DRAW SOMETHING IN THE BACKGROUND
    stroke(100,69,67);
    strokeWeight(3);
    fill (tbc);
    rect(0, 400, width, height);  //table

  fill(255);        //clockbase
  rect(0,280,270,150);
  fill(0);
  rect(0,300,255,110);
  fill (255);       //clockline
  noStroke();
  rect(75,290,5,130);
  rect(165,290,5,130);
  //clock
  text (h , 0, 375);
  text (m, 90, 375);
  text (s , 180, 375);

  //CHANGING DAY AND NIGHT BG
  if (h > 18 || h < 6 ) {  // sunset and sunrise
       // nightime

       fill(233);
       ellipse(20*h,80,100,100);
      bgc = color(113,126,195);
      tbc = color(117,141,145);
      //sundown

  } else {
      //daytime

      fill(255,229,142,200);
      ellipse(30*h,100,300,300);
      fill(255,219,70);
      ellipse(30*h,100,200,200);
      bgc = color(255,244,205);
      tbc = color(150,218,179);
  }

  if ( h > 15 &&  h < 17 ) {
    if (m > 29  &&  m < 35) {
      textSize(55);
      strokeWeight(2);
      stroke(100,69,67);
      fill(150,184,218);
      text("It's BOBA Time!!!",0,100);
     }
  }




      //DRAW A BOBA MILKTEA!
      // translate(width /2, 300);
      translate(380, 320);
      // stroke(249,247,235);
      stroke(100,69,67);
      strokeWeight(3);
      fill(197,206,196,200);
      quad(-100,-150,100,-150,90,150,-90,150);  //cup


      // noStroke();
      fill(222,50,50,200);
      rect(-15,-230,25,370)  //straw


      fill(249,247,235);
      rect(-110,-160,220,10,20),  //lid

      // noStroke();
      fill(226,202,173,222);
      quad(-94,-110+(s*4),94,-110+(s*4),88,148,-88,148);  //milktea

      for (let i = 0; i < m; i++) {   //creating boba per minute
        // bobas[i].move();
        bobas[i].display();
      }


}

          // console.log(s);

          // Boba class
          class Boba {

            constructor() {
              this.x = random(-80,80);
              this.y = random(50,130);
              this.dia = 22;  //size of bobas
              // this.speed = 1;
            }

            // move() {
            //   this.y += random(-this.speed, this.speed);
              // this.y += random(-220, 20);
            // }


      //Drawing the bobas
            display() {

              stroke(20);
              strokeWeight(1);
              // noStroke();
              fill(44, 29, 29);
              ellipse(this.x, this.y, this.dia, this.dia);
              fill(90,68,53);
              ellipse(this.x+4, this.y-4, this.dia-16, this.dia-16);

              // if ( this.y = 130 ) {this.y = -100}   //Boba reached the bottom
            }
}
