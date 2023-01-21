// extract the 3 classes required for world creation from Matter.js file

const Engine = Matter.Engine; // class created to put the force that puts physical laws into bodies
const World = Matter.World; //class created to put world for all the bodies
const Bodies = Matter.Bodies; // class needed for soul creation for body ( bodies on the said earth)

var engine,world,body; // objects of above classes
var ground; // some other objject for ground



function setup() {
  createCanvas(800,800);

engine = Engine.create(); // engine object gets created with Engine class properties;
world = engine.world; // attaching world object to engine object
 
// giving some options to normal soul/entity 
 var options = {

  isStatic : true

 }


// creating the soul part for dummy body
   body = Bodies.rectangle(600,100,50,50,options); // soul part

   // if you dont include options - it becomes predefined options for objects

   World.add(world,body); // adds the soul into the world through world object

   

   console.log("hello");
   console.log(body);

}

function draw() {
  background(0);  

  Engine.update(engine); // updates the engine object (like reset)

  rectMode(CENTER); // changing the rect dynamics to center point - for every rect body
  rect(body.position.x,body.position.y,50,50);// dummy bodies ( will not follow engine unless there is soul attached)
// attach soul to dummy using x,y positions of dummy body)
 
}



//. add matter.js into index.html

// -------------before setup - in sketch file------------------

// nameSpacing - adding const Bodies = Matter.Bodies....etc
// create objects for above said classes

// -------------setup---------------------

// create engine, world objects and attach them to their classes
// options - create options for soul as well but before soul creation
// create a soul 
// add soul to the world


// ----------------draw function-------------

// update the engine
// make the dummy body's rectMode to CENTER - positioning
// make the dummy body
// attach dummy to the soul by rewriting the x, y positions ( attach soul)