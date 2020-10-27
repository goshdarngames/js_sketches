let world = new ECSY.World ();

function setup() 
{
    createCanvas(800, 800);

    world
        .registerComponent ( Position )
        .registerComponent ( DisplayCircle )
        .registerComponent ( Acceleration )
        .registerComponent ( Mass )
        .registerComponent ( Velocity );

    world
        .registerSystem ( MovementSystem )
        .registerSystem ( GravitySystem )
        .registerSystem ( DisplaySystem );

    for ( let i = 0; i < 10; i++ )
    {
        let pos = 
        {
            p : createVector ( random ( 0, width ), random ( 0, height ) ),
        }

        let velocity = 
        {
            v : p5.Vector.random2D (),
        }

        let acc = 
        {
            a : createVector ( 0, 0 ),
        }

        let mass = 
        {
            m : 20,
        }

        world
            .createEntity ()
            .addComponent ( Position, pos )
            .addComponent ( Velocity, velocity )
            .addComponent ( Acceleration, acc )
            .addComponent ( Mass, mass )
            .addComponent ( DisplayCircle );
    }
}

function draw() 
{
    background ( 123 );
    world.execute ( deltaTime, millis () );
}
