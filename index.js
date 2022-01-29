// Your code here
class Polygon {
  constructor(sides){
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((total, side) => total + side, 0 );
  }
}

class Triangle extends Polygon {

  get isValid () {
    let x = this.sides[0]
    let y = this.sides[1]
    let z = this.sides[2]
    return ((x + y > z) && (x + z > y) && (y + z > x))
  }
}
 
class Square extends Polygon {

  get isValid() {
    let x = this.sides[0]
    let y = this.sides[1]
    let z = this.sides[2]
    let w = this.sides[3]
    return ((x === y) && ( x===z ) && ( x===w ))
  }

  get area () {
    return this.sides[0] * this.sides[0]
  }
}