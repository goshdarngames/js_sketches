class Position extends ECSY.Component {}

Position.schema =
{
    p : { type : ECSY.Types.Ref },
}

class Velocity extends ECSY.Component {}

Velocity.schema =
{
    v : { type : ECSY.Types.Ref },
}

class Acceleration extends ECSY.Component {}

Acceleration.schema =
{
    a : { type : ECSY.Types.Ref },
}

class Mass extends ECSY.Component {}

Mass.schema =
{
    m : { type : ECSY.Types.Number },
}

class DisplayCircle extends ECSY.TagComponent {};

class GravitySystem extends ECSY.System
{
    init () {}

    gravData ( b )
    {
        let data = 
        {
            pos  : b.getComponent ( Position ).p,
            mass : b.getComponent ( Mass ).m,
            acc  : b.getComponent ( Acceleration ).a,
        };

        return data;
    }

    attract ( b1, b2 )
    {
        let d1 = this.gravData ( b1 );
        let d2 = this.gravData ( b2 );

        let f = p5.Vector.sub ( d2.pos, d1.pos );

        let dist = constrain ( f.mag (), 5, 40 );

        f.normalize ();

        let g = 1;

        let strength = ( g * d1.mass * d2.mass ) / ( dist * dist );

        f.mult ( strength );

        d1.acc.add ( f );
    }

    execute ( delta, time )
    {
        this.queries.bodies.results.forEach( b1 => 
        {
            this.queries.bodies.results.forEach( b2 => 
            {
                if ( b1 != b2 ) this.attract ( b1, b2 );
            });
        });
    }
}

GravitySystem.queries = 
{
    bodies : 
    {
        components : [ Position, Acceleration, Mass ]
    }
};

class MovementSystem extends ECSY.System
{
    init () {}

    execute ( delta, time )
    {
        this.queries.movers.results.forEach(entity => {

            let pos = entity.getComponent ( Position ).p;
            let v = entity.getComponent ( Velocity ).v;
            let acc = entity.getComponent ( Acceleration ).a;

            v.add ( acc );

            acc.set ( 0 );

            pos.add ( v );
        });
    }
}

MovementSystem.queries = 
{
    movers : 
    {
        components : [ Position, Velocity, Acceleration ]
    }
};

class DisplaySystem extends ECSY.System
{
    init () {}

    execute ( delta, time )
    {
        this.queries.circles.results.forEach(entity => {

            let pos = entity.getComponent ( Position ).p;

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
