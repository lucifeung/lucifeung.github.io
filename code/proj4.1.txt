
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

////////////////////////////// SCENE 1 /////////////////
function scene1()  {
    var textX;
    var textY;
    var lox= 0;
// scene1.setup
    this.setup = function() {
      console.log("We are at setup for scene1");
      // myButton = new Clickable();     //Create Button1
      // myButton.locate(width/2, height/2);        //Position Button2
      // myButton.color = "#white";
      // myButton.text = "START HERE";
      // myButton.onHover = function(){
      //         this.color = "6498FF";
      //         this.resize(110, 60);
      //       }
      // myButton.onOutside = function(){
      //             this.color = "#white";
      //             this.resize(100, 50);
      //             }
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");
        textX = 10;
        textY = 0;
        textAlign(CENTER);
    }


    this.draw = function()  //draw the first scene
    {
        background(bg1);
        cursor ('assets/cursor.png')
        // myButton.draw();
        textAlign(CENTER);
        textSize(40);



        fill(255);
        stroke(67,151,208);
        strokeWeight(2);
        textSize(66);
        text(" A Fishtank Simulator", width/2, 200);
        textSize(33);
        text("[START HERE]", width/2, 300);

    }


        // fill(0,255,0);
        // text(keyCode, textX, textY += 10);

       if ( !snd2.isPlaying() ) {
          snd2.play();
      }
      else {
           snd2.stop();
      }


        // if ( textY > height )  {
        //     textX += 20;
        //     textY = 0;
        // }


    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

////////////////////////////// SCENE 2 /////////////////
function scene2()  {
    var textX;
    var textY;
    var lox= 0;
// scene1.setup
    this.setup = function() {
      console.log("We are at setup for scene2");

    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene2");
        textX = 10;
        textY = 0;
        textAlign(CENTER);
    }


    this.draw = function()  //draw the first scene
    {
        background(bg1);
        cursor ('assets/cursor.png')
        // myButton.draw();
        textSize(40);



        fill(255);
        stroke(67,151,208);
        strokeWeight(2);
        textSize(33);
        text("Instruction:", 40, 100);
        textSize(18);
        text("Click on the buttons on the right side to choose the type of fish you want to see.", 40, 150);
        text("Use mouse click to try popping the bubbles.", 40, 190);
        text("Press 4 to exit the game, or 2 to see the instructions again.", 40, 230);
    }


        // fill(0,255,0);
        // text(keyCode, textX, textY += 10);

       if ( !snd2.isPlaying() ) {
          snd2.play();
      }
      else {
           snd2.stop();
      }


        // if ( textY > height )  {
        //     textX += 20;
        //     textY = 0;
        // }


    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}


/////////////////////// SCENE 3  ////////////////////////

function scene3()  {

  this.setup = function() {
    createCanvas(700, 600);
    //create bubbles
    for (i = 0; i < 6; i++) {
      bubbles[i] = new Bubble(random(0, 400), random(450, 900), random(25, 100), random(1, 3));
    }

    myButton1 = new Clickable();     //Create Button1
    myButton1.locate(580, 280);        //Position Button2
    myButton1.color = "#9CDDE6";
    myButton1.image = f1s;
    myButton1.fitImage = true;
    // myButton1.textColor = "#white";
    // myButton1.textSize = 14;
    myButton1.text = "";
    myButton1.onHover = function(){
            this.color = "white";
            this.resize(110, 60);
          }
    myButton1.onOutside = function(){
                this.color = "#9CDDE6";
                this.resize(100, 50);
                }


    myButton2 = new Clickable();     //Create Button2
    myButton2.locate(580, 350);        //Position Button2
    myButton2.color = "#9CDDE6";
    myButton2.image = f2s;
    myButton2.fitImage = true;
    myButton2.text = "";
    myButton2.onHover = function(){
            this.color = "white";
            this.resize(110, 60);
          }
    myButton2.onOutside = function(){
                this.color = "#9CDDE6";
                this.resize(100, 50);
                }

    myButton3 = new Clickable();     //Create Button2
    myButton3.locate(580, 420);        //Position Button2
    myButton3.color = "#9CDDE6";
    myButton3.image = f3s;
    myButton3.fitImage = true;
    myButton3.text = "";
    myButton3.onHover = function(){
            this.color = "white";
            this.resize(110, 60);
          }
    myButton3.onOutside = function(){
                this.color = "#9CDDE6";
                this.resize(100, 50);
                }


  //PRESS BUTTON

    myButton1.onPress = function(){  //When myButton1 is pressed
      this.color = "#FF9E9E";       //Change button color
      fishes[fishes.length] = new fish1() // put new fish into the fishes array at the end of the fishes array
      for (f = 0; f < fishes.length; f++)
        fishes[f].mousePressed() // gimme fish number f
    }

    myButton2.onPress = function(){  //When myButton2 is pressed
      this.color = "#FF9E9E";       //Change button color
      fishes[fishes.length] = new fish2()
      for (f = 0; f < fishes.length; f++)
        fishes[f].mousePressed()

    }

    myButton3.onPress = function(){  //When myButton3 is pressed
      this.color = "#FF9E9E";       //Change button color
      fishes[fishes.length] = new fish3()
      for (f = 0; f < fishes.length; f++)
        fishes[f].mousePressed()

    }


  //RELEASE BUTTON
    myButton1.onRelease = function(){
      console.log("gulu gulu");
      this.color = "#6498FF";
    }

    myButton2.onRelease = function(){
      console.log("gulu gulu");
      this.color = "#6498FF";
    }

    myButton3.onRelease = function(){
      console.log("gulu gulu");
      this.color = "#6498FF";
    }
  }

  //DRAWING BUBBLES
  let Bubble = function(x, y, diameter, speed) {
    this.x = x
    this.y = y
    this.diameter = diameter
    this.speed = speed
  }

  Bubble.prototype.draw = function() {
    strokeWeight(2);
    stroke(255,150);
    fill (255,10);
    circle(this.x, this.y, this.diameter);
    arc(this.x, this.y, this.diameter - (0.2 * this.diameter), this.diameter - (0.2 * this.diameter), 5, 6)
  }
  function fish1() {      //fish family 1 arrays
    this.x = 0 //placeholder that can refer to bubbles, but doesnt limit it to the specific thigny, refers to x position of fish
    this.y = 0
    this.GoX = 0
    this.GoY = 0
    this.vx = 0
    this.vy = 0
    this.image = random(fishfamily1);
    this.moveFish = function() { // this defines a 'method' a function related to an object
      this.x = this.x + this.vx + 5; // moving fish in velocity, distance over time
      this.vx = this.vx  + (this.GoX - this.x) / 3000 // wave equation make fish go wheee
      if (abs(this.GoX - this.x) > 5) // create wobble if it's more than 5 pixels to the left/right
      {
        this.vx = this.vx + random(-0.01, 0.01)
      }
      this.y = this.y + this.vy;
      this.vy = this.vy * random(0.8, 1) + (this.GoY - this.y) / 3000
      if (abs(this.GoY - this.y) > 5) {
        this.vy = this.vy + random(-0.01, 0.01)
      }
    }
    this.drawFish = function() {
      image(this.image, this.x, this.y)
    }
    this.mousePressed = function() {
      this.GoX = mouseX
      this.GoY = mouseY
    }
  }


  function fish2() {      //fish family 1 arrays
    this.x = 0 //placeholder that can refer to bubbles, but doesnt limit it to the specific thigny, refers to x position of fish
    this.y = 0
    this.GoX = 0
    this.GoY = 0
    this.vx = 0
    this.vy = 0
    this.image = random(fishfamily2);
    this.moveFish = function() { // this defines a 'method' a function related to an object
      this.x = this.x + this.vx + 5; // moving fish in velocity, distance over time
      this.vx = this.vx  + (this.GoX - this.x) / 3000 // wave equation make fish go wheee
      if (abs(this.GoX - this.x) > 5) // create wobble if it's more than 5 pixels to the left/right
      {
        this.vx = this.vx + random(-0.01, 0.01)
      }
      this.y = this.y + this.vy;
      this.vy = this.vy * random(0.8, 1) + (this.GoY - this.y) / 3000
      if (abs(this.GoY - this.y) > 5) {
        this.vy = this.vy + random(-0.01, 0.01)
      }
    }
    this.drawFish = function() {
      image(this.image, this.x, this.y)
    }
    this.mousePressed = function() {
      this.GoX = mouseX
      this.GoY = mouseY
    }
  }

  function fish3() {      //fish family 1 arrays
    this.x = 0 //placeholder that can refer to bubbles, but doesnt limit it to the specific thigny, refers to x position of fish
    this.y = 0
    this.GoX = 0
    this.GoY = 0
    this.vx = 0
    this.vy = 0
    this.image = random(fishfamily3);
    this.moveFish = function() { // this defines a 'method' a function related to an object
      this.x = this.x + this.vx + 5; // moving fish in velocity, distance over time
      this.vx = this.vx  + (this.GoX - this.x) / 3000 // wave equation make fish go wheee
      if (abs(this.GoX - this.x) > 5) // create wobble if it's more than 5 pixels to the left/right
      {
        this.vx = this.vx + random(-0.01, 0.01)
      }
      this.y = this.y + this.vy;
      this.vy = this.vy * random(0.8, 1) + (this.GoY - this.y) / 3000
      if (abs(this.GoY - this.y) > 5) {
        this.vy = this.vy + random(-0.01, 0.01)
      }
    }
    this.drawFish = function() {
      image(this.image, this.x, this.y)
    }
    this.mousePressed = function() {
      this.GoX = mouseX
      this.GoY = mouseY
    }
  }


  this.mousePressed = function() {
        snd1.play();
        if ( !snd1.isPlaying() ) {
           snd1.stop();
       }
  }



    this.draw = function()  {
      background(bg); // this is our background
      fill(255);
      stroke(67,151,208);
      strokeWeight(2);
      textSize(18);
      text("Click on the buttons to release the fishes, or try popping the bubbles.",20, 30);
      text("Press 2 to see the instruction again, or press 4 to end the game.",20, 50);


      for (f = 0; f < fishes.length; f++) {
        fishes[f].drawFish()
        fishes[f].moveFish()
      }

      for (i = 0; i < bubbles.length; i++) {
            bubbles[i].draw();
        if (mouseIsPressed && mouseX > (bubbles[i].x - bubbles[i].diameter / 2) &&
          mouseX < (bubbles[i].x + bubbles[i].diameter / 2) &&
          mouseY > (bubbles[i].y - bubbles[i].diameter / 2) &&
          mouseY < (bubbles[i].y + bubbles[i].diameter / 2)) {
          bubbles[i].y = random(450, 900);
          bubbles[i].x = random(0, width);
          bubbles[i].diameter = random(25, 100);
          bubbles[i].speed = random(1, 3);

        }

        if (bubbles[i].y < -50) {
          bubbles[i].y = random(0, height);
          bubbles[i].x = random(0, width);
          bubbles[i].diameter = random(25, 100);
          bubbles[i].speed = random(1, 3);
        } else {
          bubbles[i].y -= bubbles[i].speed / 2;
        }
      }



      cursor ('assets/cursor.png')
      myButton1.draw();
      myButton2.draw();
      myButton3.draw();
    }







}






////////////////////////////// SCENE 4 /////////////////

function scene4() {






    this.draw = function() {
      background(bg1);
      cursor ('assets/cursor.png')
      textAlign(CENTER);
      textSize(40);
      // fill(200,0,0);

      push();
      //
      //translate(width/2,loy*3);
      fill(255);
      stroke(43,137,199);
      strokeWeight(2);
      textSize(33);
      text("[GAME OVER]", width/2, 300);
      push();
}


this.keyPressed = function() {
      snd3.play();
      if ( !snd2.isPlaying() ) {
         snd2.stop();
     }
}

this.mousePressed = function()
{
    this.sceneManager.showNextScene();
}

}
