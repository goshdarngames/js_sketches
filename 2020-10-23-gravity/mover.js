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

    display ()
    {
        fill('#f00');
        stroke ( '#fff' );
        strokeWeight ( 5 );

        circle ( this.pos.x, this.pos.y, 40 );
    }
}
