function Walker ( x, y )
{
    this.x = x;
    this.y = y;

    this.move = function ()
    {
        let x_r = -1 + random ( 2 );
        this.x += x_r;

        let y_r = -1 + random ( 2 );
        this.y += y_r;
    };

    this.draw = function ()
    {
        point ( this.x, this.y );
    };
}

var w = [];

function setup() 
{
    createCanvas(400, 400);

    stroke ( 'rgba(0%, 0%, 0%, 0.1)' );

    for ( let i = 0; i < 100; i++ )
    {
        w.push ( new Walker ( 200, 200 ) );
    }
}

function draw() 
{
    w.forEach ( ( walker ) => 
    {
        walker.move ();
        walker.draw ();
    });
}
