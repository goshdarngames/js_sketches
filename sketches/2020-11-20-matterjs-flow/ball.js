class Ball
{
    constructor ( x, y, r )
    {
        let options =
        {
            friction    : 0.9,
            density     : 200,

            plugin :
            {
                wrap :
                {
                    min :
                    {
                        x : 0,
                        y : 0
                    },
                    max :
                    {
                        x : width,
                        y : height
                    }
                }
            }
        };

        this.body = Bodies.circle ( x, y, r, options );
        this.body.label = "ball";

        this.r = r;

        World.add ( world, this.body );

        this.h = random ( 360 );

        this.active_fz_set = new Set ();
    }

    collide_start ( other )
    {
        if ( other instanceof FlowZone )
        {
            this.active_fz_set.add ( other );
        }
    }

    collide_end ( other )
    {
        if ( other instanceof FlowZone )
        {
            this.active_fz_set.delete ( other );
        }
    }

    apply_flow ()
    {
        for ( const fz of this.active_fz_set )
        {
            let f = 
            {
                x : 0,
                y : 3
            };

            f = Matter.Vector.rotate ( f, fz.a );
            Body.applyForce ( this.body, this.body.position, f );
        }
    }

    show ()
    {
        colorMode ( HSB );
        fill ( this.h, 100, 100 );
        colorMode ( RGB );
        stroke ( 120 );

        let p = this.body.position;

        circle ( p.x, p.y, this.r * 2 );
    }
}

