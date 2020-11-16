
function sketch_setup ()
{
}

function sketch_draw ()
{
    let t = record_time ();
    let a = TWO_PI * t;

    background ( 50 );
    
    stroke ( 255 );
    noFill ();

    rectMode ( CENTER );
    push ();

    translate ( width/2, height/2 );
    rotate ( a );

    rect ( 0, 0, 20, 50 );

    pop ();
}

