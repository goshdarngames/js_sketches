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

let cols = 5;
let rows = 5;

function setup() 
{
    createCanvas(640, 640);

    engine = Engine.create ();
    world = engine.world;

    createPegs ();
}

function createPegs ()
{
    let space_v = ( height * 0.75 )/rows;

    for ( let i = 0; i < cols; i++ )
    {
        let yoff = height * 0.2;
        let y = space_v * i;

        //how many pegs on this row
        let row_count = cols;
    
        let space_h = width/cols;

        let xoff = space_h / 2;

        if ( i % 2 == 0 )
        {
            xoff += xoff;
            row_count -= 1;
        }


        for ( let j = 0; j < row_count; j++ )
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

}
