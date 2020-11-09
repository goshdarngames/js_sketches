function setup() 
{
    createCanvas(400, 400);
}

let r = 0;
let theta = 0;

function draw() 
{
    translate ( width/2, height/2 );

    let x = r * cos ( theta );
    let y = r * sin ( theta );

    circle ( x, y, 5 );

    r += 0.3;
    theta += 0.1;
}
