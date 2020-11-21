class FlowZone
{
    constructor ( x, y, w, h )
    {
        let options =
        {
            isStatic    : 1,
            isSensor    : 1,
        };

        this.body = Bodies.rectangle ( x, y, w, h, options );

        World.add ( world, this.body );

        this.w = w;
        this.h = h;

        this.a = 0;
        this.noise_step = 0.001;
    }

    collide_start ( other )
    {
    }

    collide_end ( other )
    {
    }


    applyNoise ( zoff )
    {
        let p = this.body.position;
        let n = noise ( this.noise_step * p.x, this.noise_step * p.y, zoff );
        this.a = map ( n, 0, 1, 0,  4* TWO_PI );
    }

    show ()
    {
        fill ( '#996615' );
        stroke ( 255 );
        strokeWeight ( 2 );

        let p = this.body.position;

        //rect ( p.x - this.w/2, p.y - this.h/2, this.w, this.h );

        let d = createVector ( 0, 1 );

        d.rotate ( this.a );
        d.setMag ( this.w / 2 );

        line ( p.x, p.y, p.x + d.x, p.y + d.y );
    }
}
