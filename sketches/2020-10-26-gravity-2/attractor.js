class Attractor
{
    constructor ( pos )
    {
        this.pos = pos;

        this.mass = 20;
    }

    attract ( m )
    {
        let f = p5.Vector.sub ( this.pos, m.pos );

        let dist = f.mag ();

        dist = constrain ( dist, 5, 40 );

        f.normalize ();

        let g = 1;

        let strength = ( g * this.mass * m.mass ) / ( dist * dist );

        f.mult ( strength );

        m.addForce ( f );
    }

    display ()
    {
        fill('#0f0');
        stroke ( '#fff' );
        strokeWeight ( 5 );

        circle ( this.pos.x, this.pos.y, 20 );
    }
}
