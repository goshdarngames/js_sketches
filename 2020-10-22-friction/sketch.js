let balls = [];
let gravity;
let kickButton;

class Ball
{
    constructor ( pos, size )
    {
        this.pos = pos;

        this.size = size;

        this.forces = [];

        this.velocity = createVector ( 0, 0 );
        this.acceleration = createVector ( 0, 0 );
    }

    update ()
    {
        this.applyForces ();

        this.pos.add ( this.velocity );

        this.checkEdges ();
    }

    display ()
    {
        circle ( this.pos.x, this.pos.y, this.size );
    }

    applyForces ()
    {
        this.forces.forEach ( ( f ) =>
        {
            this.acceleration.add ( f );
        });

        this.velocity.add ( this.acceleration );

        this.acceleration = createVector ( 0, 0 );

        this.forces = [];
    }

    addForce ( f )
    {
        this.forces.push ( f );
    }

    checkEdges ()
    {
        let bounceMag = 1.5;
        let bounceVector = createVector ( 0, 0 );
        let r = this.size / 2;

        if ( ( this.pos.y + r ) > height )
        {
            bounceVector.add ( 0, -bounceMag );
            this.pos.y = height - r
        }

        if ( ( this.pos.x + r ) > width )
        {
            bounceVector.add ( -bounceMag, 0 );
            this.pos.x = width - r
        }

        if ( ( this.pos.x - r ) < 0 )
        {
            bounceVector.add ( -bounceMag, 0 );
            this.pos.x = r
        }

        bounceVector.mult ( this.velocity );

        this.addForce ( bounceVector );
    }
}

function friction ( b, c )
{
    let f = b.velocity.copy ();

    f.normalize ();

    f.mult ( -1 );

    //basic normal value for friction
    let normal = 1;

    let fMag = c*normal;

    f.mult ( fMag );

    return f;
}

function setup() 
{
    createCanvas(800, 800);

    gravity = createVector ( 0, 1 );

    for ( let i=0; i < 100; i++ )
    {
        let b_pos = createVector ( width/2 + random ( -200, 200 ), 
                                   height/2 + random ( -200, 200 ) );
        balls.push ( new Ball ( b_pos, random ( 5, 50 ) ) );
    }

    kickButton = createButton ( 'kick' );
    kickButton.position ( 20, height + 40 );
    kickButton.mousePressed ( () =>
    {
        balls.forEach ( ( b ) =>
        {
            let f = createVector ( random ( -5, 5 ), random ( -10, -30 ) );

            b.addForce ( f );
        });
    });
}

function draw() 
{
    background ( 200 );

    balls.forEach ( ( b ) => 
    {
        //air friction
        b.addForce ( friction ( b, 0.01 ) );
        b.addForce ( gravity );

        b.update ();
        b.display ();
    });
}
