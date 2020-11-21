
let particles = [];

function sketch_setup ()
{
    for ( let i = 0; i < 100; i++ )
        particles.push ( new Particle () );
}

function sketch_draw ()
{
    colorMode ( RGB );
    background ( 123 );

    for ( const p of particles )
        p.draw ();
}

