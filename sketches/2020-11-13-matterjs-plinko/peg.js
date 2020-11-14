class Peg
{
    constructor ( x, y, r )
    {
        let options =
        {
            isStatic : true,
            restitution : 1,
            friction    : 0,
        };

        this.body = Bodies.circle ( x, y, r, options );
        this.body.label = "peg";

        this.r = r;

        World.add ( world, this.body );
    }

    show ()
    {
        fill ( '#996615' );
        stroke ( '#220500' );
        strokeWeight ( 2 );

        let p = this.body.position;

        circle ( p.x, p.y, this.r * 2 );
    }
}
