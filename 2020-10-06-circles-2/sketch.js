function setup() {
    createCanvas(800, 800);

    noFill();
}

let x = 0;
let y = 0;
let r = 40;

function draw() 
{
    if ( r > 800 ) return;

    ellipse(x, y, r, r);

    y = ( y + r ) % 800;

    if ( y == 0 )
    {
        x = ( x + r ) % 800;

        if ( x == 0 ) r *= 2;
    }
}
