function setup() 
{
    createCanvas(400, 400);
}

let x = 200;
let y = 200;

function draw() 
{
    point ( x, y );

    let r = random ( 1 );

    if ( r < 0.01 )
    {
        x = ( x + random ( -100, 100 ) ) % 400;
        y = ( y + random ( -100, 100 ) ) % 400;
    }
    else
    {
        x = ( x + random ( -1, 1 ) ) % 400;
        y = ( y + random ( -1, 1 ) ) % 400;
    }
}
