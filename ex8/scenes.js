
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

var hell = "hi";


// sprite1.collide(sprite2);
// sprite1.overlap(sprite2);
// sprite1.displace(sprite2);


////////////////////////////// SCENE 1 /////////////////
function scene1()  {
    var textX;
    var textY;
    var lox= 0;
// scene1.setup
    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");
        textX = 10;
        textY = 0;
        background("grey");
        textAlign(CENTER);
    }


    this.draw = function()  //draw the first scene
    {
        background(191,255,247);
        // fill(191,255,247);


        push();     //draw the rainbow
        noFill();
        strokeWeight(40);
        translate(width /2, height /1.5);
        rotate(22);
        stroke(255,random(90,127),random(90,127));
        arc( 0, 0, 400, 400, radians(0), radians(lox));
        stroke(255,random(230,252),random(120,145));
        arc( 0, 0, 320, 320, radians(0), radians(lox));
        stroke(101, random(240,255), random(100,120));
        arc( 0, 0, 240, 240, radians(0), radians(lox));
        stroke(random(90,101), random(150,184), 255);
        arc( 0, 0, 160, 160, radians(0), radians(lox));
        if (lox > 180) {
          lox = 0;
        }
         lox  ++;
        pop();

        noStroke();  //draw the clouds
        fill(255);
        ellipse(100,370,180,100);     //left
        ellipse(140,340,140,100);
        ellipse(180,380,150,100);
        ellipse(420,380,180,100);     //right
        ellipse(460,340,150,100);
        ellipse(500,370,160,100);

    }

    this.keyPressed = function() {
        // fill(0,255,0);
        // text(keyCode, textX, textY += 10);

       if ( !snd1.isPlaying() ) {
          snd1.play();
      }
      else {
           snd1.stop();
      }


        // if ( textY > height )  {
        //     textX += 20;
        //     textY = 0;
        // }
    }

    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

/////////////////////// SCENE 2  ////////////////////////

function scene2()  {
    this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;

    hell = "bye";

    // important to create object here not in set
   // this.asterisk = createSprite(this.lox, this.loy);
    // var asterisk = createSprite(lox,loy);

  this.setup = function() {
      console.log("We are at setup for scene2");
     asterisk.position.x++;

  }

  this.enter = function()
  {
      console.log("We are at entering scene2");
        console.log(hell);
        //asterisk.visible = false;
        asterisk.position.x = width/2;
        asterisk.position.y = height/2;


        asterisk.onMouseOver = function() {

          console.log("over");
          this.changeAnimation("stand");
          this.position.x-=5 ;
          this.position.y-=5 ;
        }

        asterisk.onMouseOut = function() {

          console.log("out");
          this.changeAnimation("normal");
          this.position.x+=5;
          this.position.y+=5;
        }



  }


  this.keyPressed = function() {
        snd2.play();
        if ( !snd1.isPlaying() ) {
           snd1.stop();
       }
  }



    this.draw = function()
    {
        background(212,255,196);
        drawSprites();

    }


    this.mousePressed = function()
    {

        this.sceneManager.showNextScene();
    }



}






////////////////////////////// SCENE 3 /////////////////

function scene3() {

    this.oAnim1 = null;
    var oAnim = null;

    this.setup = function()  {
        console.log("We are at setup for scene3");
        // access a different scene using the SceneManager
        oAnim1 = this.sceneManager.findScene( scene2 );






    }

    this.enter = function()
    {

     //asterisk.visible = false;
     asterisk.position.x =  width / 2;
     asterisk.position.y = height / 2;


     asterisk.onMouseOver = function() {

       console.log("over");
       this.changeAnimation("square");
       this.position.x-=0 ;
       this.position.y-=10 ;
     }

     asterisk.onMouseOut = function() {

       console.log("out");
       this.changeAnimation("square");
       this.position.x+=0;
       this.position.y+=10;
     }


        console.log("We are at entering scene2");
    }




    this.draw = function() {
        background("lightblue");
        drawSprites();
        var r = sin( frameCount * 0.01 );
        stroke(255,200);
        fill(255,100);
        ellipse( width / 2, 270, map(r, 0, 1, 100, 200) );

        if ( oAnim1 != null )
        {
            fill("black");
            noStroke();
            textAlign(LEFT);
            text( "Scene3 r: " + r, 10, height - 20);
        }
    }

    this.keyPressed = function() {
          snd3.play();
          if ( !snd2.isPlaying() ) {
             snd2.stop();
         }
    }

    this.mousePressed = function()  {

       this.sceneManager.showNextScene();
    }

}
