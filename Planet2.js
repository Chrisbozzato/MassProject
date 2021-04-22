class Planet {
  constructor(x, y, w) {
    this.loc = createVector(x, y, w)
    this.vel = createVector(0.2, 0.3);
    this.acc = createVector(0, 0)
    this.mass1 = w
    this.r = sqrt(this.mass1) * 8
  }

  applyforce(Force) {
    let f = p5.Vector.div(Force, this.mass1);
    this.acc.add(f)
  }

  applyforce2(Force) {
    let f = p5.Vector.div(Force, this.mass);
    this.acc.add(f)
  }
  display() {
    fill(0, 100, 255)
    circle(this.loc.x, this.loc.y, this.r)
  }

  update() {
    this.loc.add(this.vel)
    this.vel.add(this.acc)
    this.acc.set(0, 0)
    this.vel.limit(6)
  }

  attract1() {
    let Force = p5.Vector.sub(this.loc, planet1.loc);
    let distance = constrain(Force.mag(), 25, 50)
    let pull = (this.mass * this.planet) / distance
    Force.setMag(pull)
    planet1.applyforce(Force)
  }

  attract2() {
    let Force = p5.Vector.sub(this.loc, star.loc);
    let distance = constrain(Force.mag(), 25, 50)
    let pull = (this.mass * this.Sun) / distance
    Force.setMag(pull)
    star.applyforce(Force)
  }
}