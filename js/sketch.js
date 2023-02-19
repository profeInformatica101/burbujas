burbujas = [];

function setup(){
    createCanvas(600,400);

    let x = random(width);
    let y = random(height);
    let radio = random(10, 50);
    let b = new Burbuja(x,y,radio);
    burbujas.push(b);


}

function mousePressed(){
    let radio = random(10,50);
    let b = new Burbuja(mouseX, mouseY, radio);

    burbujas.push(b);
}

function draw(){
    background(125);

    for(let i=0; i < burbujas.length; i++){
        burbujas[i].mover();
        burbujas[i].mostrar();

    }
  
}


class Burbuja {
    constructor(x, y, radio){
        this.x = x;
        this.y = y;
        this.radio = radio;
    }

    mover(){
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    mostrar(){
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.radio*2);

    }

}
