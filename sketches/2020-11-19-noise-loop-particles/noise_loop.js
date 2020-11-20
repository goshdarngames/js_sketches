class NoiseLoop
{
    constructor ( radius, min_v, max_v )
    {
        this.radius = radius;
        this.min_v = min_v;
        this.max_v = max_v;

        this.cx = random ( 1000 );
        this.cy = random ( 1000 );
    }

    value ( a, zoff )
    {
        let xoff = map ( cos ( a ), -1, 1, this.cx, this.cx + this.radius );
        let yoff = map ( sin ( a ), -1, 1, this.cy, this.cy + this.radius );

        let n = noise ( xoff, yoff, zoff );

        return map ( n, 0, 1, this.min_v, this.max_v );
    }
}

