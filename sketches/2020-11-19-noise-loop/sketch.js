let vertex_count = 120;

let nl;
    
let base_r;

function sketch_setup ()
{
    nl = new NoiseLoop ( 5, -100, 100 );
}

function sketch_draw ()
{
    background ( 123 );

    translate ( width/2, height/2 );

    noFill ();
    strokeWeight ( 6 );
    stroke ( 255 );

    beginShape ();
    
    base_r = width/3;

    for ( let i = 0; i < vertex_count; i++ )
    {
        let a = TWO_PI / vertex_count * i;

        let zoff = record_time ();

        let r = base_r + nl.value ( a, zoff );

        let x = r * cos ( a );
        let y = r * sin ( a );

        vertex ( x, y );
    }

    endShape ( CLOSE );
}

