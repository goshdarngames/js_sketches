// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies;

let engine;

let world;

let flow_rows = 8;
let flow_cols = 8;

let flow_zones = [];

let flow_zoff = 0;

let balls = [];

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
        }
    }

    for ( let i = 0; i < 1; i++ )
    {
        let b = new Ball ( 200, 200, 10 );
        balls.push ( b );

        let f = 
        {
            x : 0.01,
            y : 0
        };
        Body.applyForce ( b.body, b.body.position, f );
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
        b.show ();
    }

    flow_zoff += 0.01;
}

