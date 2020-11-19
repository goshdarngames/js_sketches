class NoiseLoop
{
    constructor ( radius, min_v, max_v )
    {
        this.radius = radius;
        this.min_v = min_v;
        this.max_v = max_v;
    }

    value ( a, zoff )
    {
        let xoff = map ( cos ( a ), -1, 1, 0, this.radius );
        let yoff = map ( sin ( a ), -1, 1, 0, this.radius );

        let n = noise ( xoff, yoff, zoff );

        return map ( n, 0, 1, this.min_v, this.max_v );
    }
}
