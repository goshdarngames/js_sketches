class Ball
{
    constructor ( x, y, r )
    {
        let options =
        {
            restitution : 1,
            friction    : 0,
        };

        this.body = Bodies.circle ( x, y, r, options );

        this.r = r;

        World.add ( world, this.body );

        this.h = random ( 360 );
    }

    show ()
    {
        colorMode ( HSB );
        fill ( this.h, 100, 100 );
        colorMode ( RGB );
        stroke ( 120 );

        let p = this.body.position;

        circle ( p.x, p.y, this.r * 2 );
    }
}
