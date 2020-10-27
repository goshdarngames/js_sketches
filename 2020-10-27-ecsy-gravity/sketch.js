let world = new ECSY.World ();

function setup() 
{
    createCanvas(800, 800);

    world
        .registerComponent ( Position )
        .registerComponent ( DisplayCircle )
        .registerComponent ( Velocity );

    world
        .registerSystem ( DisplaySystem );

    for ( let i = 0; i < 10; i++ )
    {
        let pos = 
        {
            x : random ( 0, width ),
            y : random ( 0, height ),
        };

        let velocity = 
        {
            v : p5.Vector.random2D (),
        }

        world
            .createEntity ()
            .addComponent ( Position, pos )
            .addComponent ( Velocity, velocity )
            .addComponent ( DisplayCircle );
    }
}

function draw() 
{
    world.execute ( deltaTime, millis () );
}
