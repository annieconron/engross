/* global Hydra */
/* global osc */
//placeing these keywords here so that the not defined error will be ignored

const canvas = document.getElementById("myCanvas");
//Declaring and initialising the canvas here improves the resolution

canvas.width = 1024;
canvas.height = 1024;
//This width and height sets the resolution for the canvas

//This is the block of code that instantiates hydra, this loads hydra and shows that it is running every frame and drawing the canvas
var hydra = new Hydra({
  canvas,
  //I define the canvas by putting this javascript element into the hydra constructor function
  detectAudio: false,
  //This disables the audio function so that this program will run on iPhone
  enableStreamCapture: false,
})


//These global varables enable me to use these in interactive functions which can't be done in the hydra interface
var r = 0.3;
var g = 1;
var b = 1;
var k = 4;
//'k' is the variable for the kaleid parameter that is used in the slider function
var mod = 0;

//Here is the hydra code, I am able to test the cade in hydra and paste it into this section
osc(13,0,1)
  .kaleid(()=>k)
  .mask(shape(4,0.3,1))
  .modulateRotate(shape(4,0.1,1))
  .modulateRotate(shape(4,0.1,0.9))
  .modulateRotate(shape(4,0.1,0.8))
  .scale(0.3)
  .add(shape(4,0.2,1).color(()=>r,()=>g,()=>b,0.5))
  .modulate(
  osc(6,0,1.5).brightness(-.5)
  .modulate(noise(3).sub(gradient()),1), ()=>mod
  )
  .rotate(0,1)
  .scale(1,()=>window.innerHeight/window.innerWidth)
  .out()
