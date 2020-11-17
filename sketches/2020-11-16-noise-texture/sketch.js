let double_buffer = [];

function sketch_setup ()
{
    for ( let i = 0; i<2; i++ )
    {
        double_buffer.push ( createImage ( 32, 32 ) );
    }
    update_img ();
}

function sketch_draw ()
{
    update_img ();
    
    image ( double_buffer [ 0 ], 0, 0, width, height );

    noLoop ();
}

function update_img ()
{
    let img = double_buffer.shift ();

    img.loadPixels ();

    for ( let i = 0; i < img.pixels.length; i += 4 )
    {
        let r = round ( random ( 0, 1 ) ) * 255;
        img.pixels [ i + 0 ] = r;
        img.pixels [ i + 1 ] = 0;
        img.pixels [ i + 2 ] = 0;
        img.pixels [ i + 3 ] = 255;
    }

    img.updatePixels ();

    double_buffer.push ( img );
}
