function Walker ( x, y )
{
    this.x = x;
    this.y = y;

    this.draw = function ()
    {
        circle ( this.x, this.y, 30 );
    };

    this.step = function ( t )
    {
        this.x += map ( noise ( t ), 0, 1, -10, 10 );
        this.y += map ( noise ( t + 10000 ), 0, 1, -10, 10 );

        this.x = ( this.x + width ) % width;
        this.y = ( this.y + height ) % height;
    };
}

let t = 0;
let walker = new Walker ( 200, 200 );

function setup() 
{
    createCanvas(400, 400);
}

function draw() 
{
    walker.draw ();
    
    t += 0.01;

    walker.step ( t );
}
