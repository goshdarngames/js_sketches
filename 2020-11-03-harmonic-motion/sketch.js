let amp;

let len = 6;
let fr = 60;

let period = len * fr;

let n_slider;

let rad = 20;

let colors = [ '#ff0', '#0ff', '#f0f' ];

let f = 6;
let f1_slider;

let ui_y, ui_x;
let ui = []

let f2_slider;
let bg_slider;
let gif_button;

function setup() 
{
    createCanvas(800, 800);

    amp = width/2;

    ui_x = width + 80;
    ui_y = 26;

    new_slider (1, 300, 12, 1);
    new_slider (1,60,10,1);
    new_slider (1,60,1,1);
    new_slider (1,255,255,1);
    n_slider  = ui [ 0 ];
    f1_slider = ui [ 1 ];
    f2_slider = ui [ 2 ];
    bg_slider = ui [ 3 ];
    
    frameRate(fr);

    gif_button = createButton ( 'make gif' );
    gif_button.position ( ui_x, ui_y );
    gif_button.mousePressed ( () => createLoop({duration:len, gif:true }) );
}

function new_slider ( min, max, def, step )
{
    let s = createSlider ( min, max, def, step );
    s.position ( ui_x, ui_y );
    s.size ( 600, AUTO );

    ui.push ( s );

    ui_y += 100;
}

function draw() 
{
    background ( 40, 20, 12, bg_slider.value () );

    translate ( width/2, height/2 );

    let n = n_slider.value ();

    let f2 = f2_slider.value ();

    for ( let i = 0; i < n; i++ )
    {
        let off = f2 * TWO_PI * i/n;

        let x = amp * cos ( off + TWO_PI * frameCount / period );

        rotate ( f1_slider.value () * TWO_PI / n );

        fill ( colors [ i % colors.length ] );

        circle ( x, 0, rad );
    }
}
