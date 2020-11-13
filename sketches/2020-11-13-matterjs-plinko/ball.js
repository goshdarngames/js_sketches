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
    }

    offscreen ()
    {
        let p = this.body.position;

        return p.x < -50 || p.x > width + 50 ||
               p.y < -50 || p.y > height + 50;
    }

    show ()
    {
        fill ( 255 );
        stroke ( 255 );

        let p = this.body.position;

        circle ( p.x, p.y, this.r * 2 );
    }
}
