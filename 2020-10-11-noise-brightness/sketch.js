
let render_button;

let noise_seed_slider;
let xoff_slider;
let yoff_slider;
let zoff_slider;

let noise_z = 0.01;

function noiseBG ()
{
    noiseSeed ( noise_seed_slider.value () );
    loadPixels ();

    let xoff = 0.0;

    for ( let i = 0; i < width; i++ )
    {
        let yoff = 0.0;

        for ( let j = 0; j < height; j++ )
        {
            let idx = ( i * 4 ) + ( j * width * 4 );

            let bright = map ( noise ( xoff, yoff, noise_z ), 0, 1, 0, 255 );

            pixels [ idx + 0 ] = bright;
            pixels [ idx + 1 ] = bright;
            pixels [ idx + 2 ] = bright;
            pixels [ idx + 3 ] = 255;

            yoff += yoff_slider.value ();
        }

        xoff += xoff_slider.value ();
    }

    updatePixels ();
}


function setup() 
{
    createCanvas(400, 400);

    let ui_y = height + 26;

    createP ( 'seed' );
    createP ( 'xoff' );
    createP ( 'yoff' );
    createP ( 'zoff' );

    noise_seed_slider = createSlider ( 0, 10000, random ( 10000 ), 1 );
    noise_seed_slider.position ( 80, ui_y );

    ui_y += 40;

    xoff_slider = createSlider ( 0, 0.1, 0.01, 0.01 );
    xoff_slider.position ( 80, ui_y );

    ui_y += 40;

    yoff_slider = createSlider ( 0, 0.1, 0.01, 0.01 );
    yoff_slider.position ( 80, ui_y );

    ui_y += 40;

    zoff_slider = createSlider ( 0, 0.5, 0.01, 0.01 );
    zoff_slider.position ( 80, ui_y );

    ui_y += 40;
    render_button = createButton ( 'render' );
    render_button.mousePressed ( noiseBG );
    render_button.position ( 10, ui_y );

}

function draw() 
{
    noiseBG ();
    noise_z += zoff_slider.value ();
}
