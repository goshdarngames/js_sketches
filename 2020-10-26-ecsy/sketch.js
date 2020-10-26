let world = new ECSY.World ();

class Position extends ECSY.Component {}

Position.schema =
{
    p5vector : { type : ECSY.Types.Ref },
}

class DisplayCircle extends ECSY.TagComponent {};

class DisplaySystem extends ECSY.System
{
    init () {}

    execute ( delta, time )
    {
        this.queries.circles.results.forEach(entity => {

            let pos = entity.getComponent ( Position ).p5vector;

            circle ( pos.x, pos.y, 10 );
        });
    }
}

DisplaySystem.queries = 
{
    circles : 
    {
        components : [ Position, DisplayCircle ]
    }
};

function setup() 
{
    createCanvas(800, 800);

    world
        .registerComponent ( Position )
        .registerComponent ( DisplayCircle );

    world
        .registerSystem ( DisplaySystem );

    for ( let i = 0; i < 10; i++ )
    {
        let pos = createVector ( random ( 0, width ), random ( 0, height ) );

        world
            .createEntity ()
            .addComponent ( Position, { p5vector : pos } )
            .addComponent ( DisplayCircle );
    }
}

function draw() 
{
    world.execute ( deltaTime, millis () );
}
