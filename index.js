// Add your Circle class here
let pi = Math.PI;

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(x){
        this.radius = x / 2;
      }

    get circumference(){
        return (this.radius * 2) * pi;
    }

    set circumference(x){
        this.radius = x / (pi * 2);
    }

    get area () {
        return Math.PI * this.radius * this.radius;
    }

    set area (area) {
        this.radius = Math.sqrt(area / Math.PI);
    }
}