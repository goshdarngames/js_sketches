// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine;

let boxes = [];

let ground;

function addBox ( x, y )
{
    let b = Bodies.rectangle ( x, y, 20, 20 );

    boxes.push ( b );

    World.add ( engine.world, [ b ] );
}

function setup() 
{
    createCanvas(400, 400);

    engine = Engine.create ();

    ground = Bodies.rectangle( width/2, height, width, 60, { isStatic: true });

    World.add ( engine.world, [ ground ] );

    Engine.run ( engine );
}

function draw() 
{
    background ( 123 );

    rectMode ( CENTER );

    fill ( '#9522DD' );

    for ( const b of boxes )
    {
        push ();
        translate ( b.position.x, b.position.y );
        rotate ( b.angle );
        rect ( 0, 0, 20, 20 );
        pop ();
    }

    if ( mouseIsPressed )
        addBox ( mouseX, mouseY );

    fill ( 0 );

    rect ( ground.position.x, ground.position.y, width, 60 );
}
