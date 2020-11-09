let x = 200;
let y = 200;

let xspeed, yspeed;

function setup() 
{
    createCanvas(400, 400);

    xspeed = random ( -3, 3 );
    yspeed = random ( -3, 3 );
} 

function draw() 
{
    background ( '#66AA44' );

    stroke ( '#4422DD' );

    x += xspeed;
    y += yspeed;

    if ( x > width  || x < 0 ) xspeed *= -1;
    if ( y > height || y < 0 ) yspeed *= -1;

    ellipse ( x, y, 40, 40 );

}
