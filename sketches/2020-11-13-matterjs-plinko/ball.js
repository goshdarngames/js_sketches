class Ball
{
    constructor ( x, y, r )
    {
        this.body = Bodies.circle ( x, y, r );

        this.r = r;

        World.add ( world, this.body );
    }

    show ()
    {
        fill ( 255 );
        stroke ( 255 );

        let p = this.body.position;

        circle ( p.x, p.y, this.r );
    }
}
