class Cannon
{
    constructor ()
    {
        this.a = 0;
        this.pos = createVector ( width/2, height );

        this.len = 60;
    }

    update ()
    {
        let m_y = constrain ( mouseY, 0, height - 10 );
        let m = createVector ( mouseX, m_y );
        let d = p5.Vector.sub ( this.pos, m );

        this.a = atan2 ( d.y, d.x );
    }

    display ()
    {
        push ();
        translate ( this.pos.x, this.pos.y );
        rotate ( this.a );
        rect ( -this.len, -10, this.len, 20 );
        pop ();
    }

    shoot ()
    {
        let b = new Ball ( this.pos.copy () );

        let bx = cos ( this.a ) * this.len;
        let by = sin ( this.a ) * this.len;


        let offset = createVector ( -bx, -by );

        b.pos.add ( offset );

        offset.normalize ();

        offset.mult ( 10 );

        b.addForce ( offset );

        balls.push ( b );
    }
}

class Ball
{
    constructor ( pos )
    {
        this.pos = pos;

        this.forces = [];

        this.velocity = createVector ( 0, 0 );
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
        circle ( this.pos.x, this.pos.y, 10 );
    }
}

let cannon;

let balls = [];

let gravity;

function setup() 
{
    createCanvas(800, 800);

    cannon = new Cannon ();

    gravity = createVector ( 0, 0.2);
}

function draw() 
{
    background ( 37 );
    cannon.update ();
    cannon.display ();

    for ( const b of balls )
    {
        b.addForce ( gravity );
        b.update ();
        b.display ();
    }

    balls = balls.filter ( ( b ) => b.pos.y < height );
}

function mousePressed ()
{
    cannon.shoot ();
}
