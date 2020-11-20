class Particle
{
    constructor ()
    {
        this.r = random ( 3, 10 );

        this.start_x = random ( width );
        this.start_y = random ( height );
        this.start_h = Math.floor ( random ( 6 ) ) * 60;

        this.nl_x = new NoiseLoop ( 0.5, -width, width );
        this.nl_y = new NoiseLoop ( 0.5, -height, height );

        this.nl_h = new NoiseLoop ( 5, -90, 90 );

        this.tail_len = 100;
        this.tail_time = 0.15;
    }

    draw ()
    {
        for ( let i = this.tail_len; i > 0; i-- )
        {
            let tail_n = i/this.tail_len;

            let a = TWO_PI * ( record_time () - tail_n * this.tail_time );

            let s = map ( tail_n, 0, 1, this.r, 1 );

            let f_alpha = map ( tail_n, 0, 1, 3, 1 );

            this.draw_angle ( a, s, 255 );
        }

    }

    draw_angle ( a, s, f_alpha )
    {
        let x = this.start_x + this.nl_x.value ( a );
        let y = this.start_y + this.nl_y.value ( a );

        let f_h = this.start_h + this.nl_h.value ( a );

        noStroke ();
        colorMode ( HSB );

        fill ( f_h, 50, 255, f_alpha );
        circle ( x, y, s * 2 );
    }
}
