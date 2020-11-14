// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine;

let world;

let ball_r = 10;
let balls = [];

let peg_r = 10;
let pegs = [];

let cols = 13;
let rows = 11;

let bounds = [];
let b_width = 20;

let bucket_count = 8;
let bucket_h = 60;
let bucket_w = 8;

let sound_pegball;

function setup() 
{
    createCanvas(640, 640);

    engine = Engine.create ();
    world = engine.world;

    Events.on ( engine, 'collisionStart', collision );

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
    let space_v = ( height * 0.80 )/rows;

    for ( let i = 0; i < rows; i++ )
    {
        let yoff = height * 0.1;
        let y = yoff + space_v * i;

        //how many pegs on this row
        let peg_count = cols;
    
        let space_h = width/( cols + 1 );

        let xoff = space_h;

        if ( i % 2 == 1 )
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
    let x = random ( 70, width-70 );
    let b = new Ball ( x, 0, ball_r );
    balls.push ( b );

    if ( balls.length > 100 )
    {
        let rm = balls.shift ();

        World.remove ( world, rm.body );
    }
}

function draw() 
{
    if ( frameCount % 60 == 1 )
        addBall ();

    Engine.update ( engine );

    background ( '#251545' );

    for ( const b of balls )
        b.show ();

    for ( const p of pegs )
        p.show ();

    for ( const b of bounds )
        b.show ();

}
