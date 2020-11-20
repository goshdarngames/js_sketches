// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies;

let engine;

let world;

let flow_rows = 16;
let flow_cols = 16;

let flow_zones = [];

let flow_zoff = 0;

let balls = [];

let physics_objects = new Map ();

function sketch_setup ()
{
    engine = Engine.create ();
    world = engine.world;

    world.gravity.y = 0;

    let flow_w = width / flow_cols;
    let flow_h = height / flow_rows;

    for ( let i = 0; i < flow_cols; i++ )
    {
        for ( let j = 0; j < flow_rows; j++ )
        {
            let x = ( i * flow_w ) + flow_w / 2;
            let y = ( j * flow_h ) + flow_h / 2;

            let fz = new FlowZone ( x, y, flow_w, flow_h );
            flow_zones.push ( fz );

            physics_objects.set ( fz.body, fz );
        }
    }

    for ( let i = 0; i < 1000; i++ )
    {
        let x = random ( width );
        let y = random ( height );
        let b = new Ball ( x, y, 4 );
        balls.push ( b );

        physics_objects.set ( b.body, b );
    }

    Matter.Events.on ( engine, 'collisionStart', handle_collision_start );
    Matter.Events.on ( engine, 'collisionEnd', handle_collision_end );
}

function handle_collision_start ( e )
{
    for ( const p of e.pairs )
    {
        let a = physics_objects.get ( p.bodyA );
        let b = physics_objects.get ( p.bodyB );

        a.collide_start ( b );
        b.collide_start ( a );
    }
}

function handle_collision_end ( e )
{
    for ( const p of e.pairs )
    {
        let a = physics_objects.get ( p.bodyA );
        let b = physics_objects.get ( p.bodyB );

        a.collide_end ( b );
        b.collide_end ( a );
    }
}

function sketch_draw ()
{
    background ( 0 );

    Matter.use('matter-wrap');
    Engine.update ( engine );

    for ( const fz of flow_zones )
    {
        fz.applyNoise ( flow_zoff );
        fz.show ();
    }

    for ( const b of balls )
    {
        b.apply_flow ();
        b.show ();
    }

    flow_zoff += 0.004;
}

