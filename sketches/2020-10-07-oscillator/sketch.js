var wave;

var playPauseButton;
var playing = false;

var slider;

function setup() 
{
    createCanvas(400, 400);

    playPauseButton = createButton ( 'play/pause' );
    playPauseButton.mousePressed ( toggle );

    slider = createSlider ( 0, 1000, 440 );
    wave = new p5.Oscillator ( 'sine' );

    wave.start ();
    wave.amp ( 0 );


    wave.freq ( 220 );
}

function draw() 
{
    if ( playing )
    {
        let g = ( 255 / 1000 ) * slider.value ();
        background ( 0, g, 100 );

        wave.freq ( slider.value () );
    }
    else
    {
        background ( 0, 0, 0 );
    }
}

function toggle ()
{
    playing = !playing;

    if ( playing )
    {
        wave.amp ( 0.5, 1 );
    }
    else
    {
        wave.amp ( 0, 1 );
    }
}
