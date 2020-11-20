class Ball
{
    constructor ( x, y, r )
    {
        let options =
        {
            friction    : 0,

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

