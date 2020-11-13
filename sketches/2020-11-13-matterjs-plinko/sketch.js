// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine;

let world;

let ball_r = 5;
let balls = [];

let peg_r = 5;
let pegs = [];

let cols = 17;
let rows = 14;

let bounds = [];
let b_width = 10;

let bucket_count = 8;
let bucket_h = 40;
let bucket_w = 8;

function setup() 
{
    createCanvas(640, 640);

    engine = Engine.create ();
    world = engine.world;

    createPegs ();
    createBounds ();
}

function createBounds ()
{
    bounds.push ( new Boundary ( 0, height/2, b_width, height ) );
    bounds.push ( new Boundary ( width, height/2, b_width, height ) );
    bounds.push ( new Boundary ( width/2, height, width, b_width ) );

    for ( let i = 0; i < bucket_count-1; i++ )
    {
        let spacing = width/bucket_count;

        let x = (i+1)*spacing + bucket_w / 2;
        let b = new Boundary ( x, height - bucket_h/2, bucket_w, bucket_h );

        bounds.push ( b );
    }
}

function createPegs ()
{
    let space_v = ( height * 0.85 )/rows;

    for ( let i = 0; i < rows; i++ )
    {
        let yoff = height * 0.1;
        let y = yoff + space_v * i;

        //how many pegs on this row
        let peg_count = cols;
    
        let space_h = width/( cols + 2 );

        let xoff = space_h * 1.5;

        if ( i % 2 == 0 )
        {
            xoff += space_h/2;
            peg_count -= 1;
        }


        for ( let j = 0; j < peg_count; j++ )
        {

            let x = xoff + space_h * j;


            let p = new Peg ( x, y, peg_r );

            pegs.push ( p );
            
        }
    }

}

function addBall ()
{
    let b = new Ball ( width/2, 0, ball_r );
    balls.push ( b );
}

function draw() 
{
    if ( frameCount % 60 == 1 )
        addBall ();

    Engine.update ( engine );

    background ( 123 );

    for ( const b of balls )
        b.show ();

    for ( const p of pegs )
        p.show ();

    for ( const b of bounds )
        b.show ();

    balls = balls.filter ( ( b ) => 
    {
        if ( b.offscreen () )
        {
            World.remove ( world, b.body );
            return false;
        }
        else
        {
            return true;
        }
    });

}
