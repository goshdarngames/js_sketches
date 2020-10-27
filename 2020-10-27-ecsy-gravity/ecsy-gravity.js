class Position extends ECSY.Component {}

Position.schema =
{
    x : { type : ECSY.Types.Number},
    y : { type : ECSY.Types.Number},
}

class Velocity extends ECSY.Component {}

Velocity.schema =
{
    v : { type : ECSY.Types.Ref },
}

class DisplayCircle extends ECSY.TagComponent {};

class DisplaySystem extends ECSY.System
{
    init () {}

    execute ( delta, time )
    {
        this.queries.circles.results.forEach(entity => {

            let pos = entity.getComponent ( Position );

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
