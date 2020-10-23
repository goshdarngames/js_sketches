let balls = [];
let restartButton;

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
        stroke ( 51 );
        strokeWeight ( 4 );

        fill ( 255 );

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

function gravity ( b )
{
    return createVector ( 0, 0.1 );
}

function drag ( b )
{
    let f = b.velocity.copy ();

    f.normalize ();

    f.mult ( -1 );
    
    let speed = b.velocity.magSq ();

    let c = 0.1;

    //surface area
    let a = b.size * b.size * 0.0005;

    let fMag = c*speed*a;

    f.mult ( fMag );

    return f;
}

function startSim ()
{
    balls = [];

    for ( let i=0; i < 100; i++ )
    {
        let b_pos = createVector ( random ( 0, width ), 80 );
        balls.push ( new Ball ( b_pos, random ( 5, 50 ) ) );
    }
}

function setup() 
{
    createCanvas(800, 800);

    restartButton = createButton ( 'Restart' );
    restartButton.position ( 20, height + 40 );
    restartButton.size ( 300, 150 );
    restartButton.mousePressed ( startSim );
}

function draw() 
{
    background ( 200 );

    balls.forEach ( ( b ) => 
    {
        if ( b.pos.y > height/2 )
            b.addForce ( drag ( b ) );

        b.addForce ( gravity ( b ) );

        b.update ();
        b.display ();
    });

    noStroke ();
    fill ( 0, 180, 0, 100 );
    rect ( 0, height/2, width, height/2 );
}
