class Mover
{
    constructor ( pos )
    {
        this.pos = pos;

        this.forces = [];

        this.velocity = createVector ( 0, 0 );

        this.mass = 20;
    }

    update ()
    {
        let acc = createVector ( 0, 0 );

        this.forces.forEach ( ( f ) =>
        {
            acc.add ( f );
        });

        this.forces = [];

        this.velocity.add ( acc );

        this.velocity.limit ( 20 );

        this.pos.add ( this.velocity );
    }

    addForce ( f )
    {
        this.forces.push ( f );
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
        fill('#f00');
        stroke ( '#fff' );
        strokeWeight ( 5 );

        circle ( this.pos.x, this.pos.y, 10 );
    }
}
