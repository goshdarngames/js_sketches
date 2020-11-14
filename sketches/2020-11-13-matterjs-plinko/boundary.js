class Boundary
{
    constructor ( x, y, w, h )
    {
        let options =
        {
            isStatic    : 1,
        };

        this.body = Bodies.rectangle ( x, y, w, h, options );

        this.w = w;
        this.h = h;

        World.add ( world, this.body );
    }

    show ()
    {
        fill ( '#996615' );
        stroke ( '#220500' );
        strokeWeight ( 2 );

        let p = this.body.position;

        rect ( p.x - this.w/2, p.y - this.h/2, this.w, this.h );
    }
}

