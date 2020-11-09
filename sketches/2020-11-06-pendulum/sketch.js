class Pendulum
{
    constructor ( x, y )
    {
        this.pos = createVector ( x, y );

        this.r = 200;

        this.a = 0;
        this.a_vel = 0;

        this.a_forces = [];
    }

    update ()
    {
        let a_acc = 0;

        //angular friction
        this.add_a_force ( this.a_vel * -0.99 );

        //gravity
        this.add_a_force ( -0.4 * sin ( this.a ) );

        for ( const f of this.a_forces )
        {
            a_acc += f/this.r;
        }

        this.a_forces = [];

        this.a_vel += a_acc;

        this.a += this.a_vel;
    }

    add_a_force ( f )
    {
        this.a_forces.push ( f );
    }

    draw ()
    {
        noFill ();
        stroke ( 255 );
        strokeWeight ( 2 );

        push ();

        translate ( this.pos.x, this.pos.y );

        rotate ( this.a );

        line ( 0, 0, 0, this.r );

        circle ( 0, this.r, 50 );

        pop ();
    }
}

let p;

function setup() 
{
    createCanvas(400, 400);

    let b = createButton ( "swing" );
    b.position ( 30, height + 30 );
    b.mousePressed ( () => p.a = PI/2 );

    p = new Pendulum ( width/2, 80 );
}

function draw() 
{
    background ( 123 );

    p.update ();
    p.draw ();
}
