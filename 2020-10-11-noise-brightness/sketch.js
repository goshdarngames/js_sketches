
function noiseBG ()
{
    noiseSeed ( random ( 100000 ) );
    loadPixels ();

    let xoff = 0.0;

    for ( let i = 0; i < width; i++ )
    {
        let yoff = 0.0;

        for ( let j = 0; j < height; j++ )
        {
            let idx = ( i * 4 ) + ( j * width * 4 );

            let bright = map ( noise ( xoff, yoff ), 0, 1, 0, 255 );

            pixels [ idx + 0 ] = bright;
            pixels [ idx + 1 ] = bright;
            pixels [ idx + 2 ] = bright;
            pixels [ idx + 3 ] = 255;

            yoff += 0.01;
        }

        xoff += 0.01;
    }

    updatePixels ();
}

let renderButton;

function setup() 
{
    createCanvas(400, 400);

    noiseBG ();

    renderButton = createButton ( 'render' );
    renderButton.mousePressed ( noiseBG );

}

function draw() 
{
}
