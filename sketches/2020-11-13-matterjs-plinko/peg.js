class Peg
{
    constructor ( x, y, r )
    {
        let options =
        {
            isStatic : true,
        };

        this.body = Bodies.circle ( x, y, r, options );

        this.r = r;

        World.add ( world, this.body );
    }

    show ()
    {
        fill ( '#0f0' );
        stroke ( '#004400' );

        let p = this.body.position;

        circle ( p.x, p.y, this.r );
    }
}
