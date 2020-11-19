let vertex_count = 360 * 10;

let nr, nz;
    
let base_r;

function sketch_setup ()
{
    nr = new NoiseLoop ( 5, -200, 200 );
    ns = new NoiseLoop ( 10, -80,80 );
    nz = new NoiseLoop ( 5,   0, 5 );
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


        //let z = nz.value ( TWO_PI * record_time () )
        let r = base_r + nr.value ( a )
                       + ns.value ( a, record_time () );

        let x = r * cos ( a );
        let y = r * sin ( a );

        vertex ( x, y );
    }

    endShape ( CLOSE );
}

