class Car
{
    constructor ( pos )
    {
        this.pos = pos;
        this.a = 0;

        this.len = 60;
        this.wid = 20;

        this.forces = [];

        this.velocity = createVector ( 0, 0 );
    }

    display ()
    {
        push ();
        translate ( this.pos.x, this.pos.y );
        rotate ( this.a );
        rect ( -(this.len/2), (this.wid/2), this.len, this.wid );
        pop ();
    }

    update ()
    {
        if ( keyIsDown ( UP_ARROW ) )
        {
            this.accelerate ( 1 );
        }

        if ( keyIsDown ( DOWN_ARROW ) )
        {
            this.accelerate ( -1 );
        }

        if ( keyIsDown ( RIGHT_ARROW ) )
        {
            this.steer ( 1 );
        }

        if ( keyIsDown ( LEFT_ARROW ) )
        {
            this.steer ( -1 );
        }

        this.resolveForces ();

        if ( this.velocity.mag () < 0.05 )
            this.velocity.mult ( 0 );
    }

    addForce ( f )
    {
        this.forces.push ( f );
    }

    resolveForces ()
    {
        let acc = createVector ( 0, 0 );

        this.forces.forEach ( ( f ) =>
        {
            acc.add ( f );
        });

        this.forces = [];

        this.velocity.add ( acc );

        this.velocity.limit ( 3 );

        this.pos.add ( this.velocity );
    }

    accelerate ( dir )
    {
        let f = createVector ( 1*dir, 0 );

        f.mult ( 0.1 );

        f.rotate ( this.a );

        this.addForce ( f );

    }

    steer ( dir )
    {
        if ( this.velocity.mag () > 0.5 )
        {
            this.a += 0.01 * dir;
            this.velocity.rotate ( dir* 0.01);
        }
    }

}

let car;

function setup() 
{
    createCanvas(800, 800);

    car = new Car ( createVector ( 200, 200 ) );
}

function draw() 
{
    background ( 123 );
    car.update ();
    car.display ();
}
