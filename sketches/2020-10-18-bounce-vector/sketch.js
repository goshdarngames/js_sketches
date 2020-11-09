let balls = [];

let Ball = function ()
{
    this.pos = createVector ( 200, 200 );

    this.speed = p5.Vector.random2D ();

    this.speed.setMag ( random ( 1, 5 ) );

    this.update = function ()
    {
        this.pos.add ( this.speed );

        if ( this.pos.x < 0 || this.pos.x > width ) 
        {
            this.speed.mult ( createVector ( -1, 1 ) );
        }
        if ( this.pos.y < 0 || this.pos.y > height ) 
        {
            this.speed.mult ( createVector ( 1, -1 ) );
        }
    };

    this.draw = function ()
    {
        ellipse ( this.pos.x, this.pos.y, 40, 40 );
    };
};

function setup() 
{
    createCanvas(400, 400);

    for ( let i = 0; i < 100; i++ )
        balls.push ( new Ball () );
}

function draw() 
{
    background ( '#66AA44' );

    stroke ( '#4422DD' );

    balls.forEach ( ( b ) => 
    {
        b.update ();
        b.draw   ();
    });


}
