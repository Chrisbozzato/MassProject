var star
var planet1
var planet2
var meteor

function setup() {
  createCanvas(600, 600);
  star = new Sun(300, 300, 6)
  planet1 = new planet(random(1, 600), random(1, 600), random(1, 4))
  planet2 = new Planet(random(1, 600), random(1, 600), random(2, 6))
  meteor= new Shootingstar(100,100,2)
}

function draw() {
  background(255);
  noStroke();
  meteor.display();
  meteor.update();
  planet1.display();
  planet1.update();
  planet1.attract1();
  planet1.attract2();
  planet2.display();
  planet2.update();
  planet2.attract1();
  planet2.attract2();
  star.display();
  star.update();
  star.attract1();
  star.attract2();
  star.attract3();
}