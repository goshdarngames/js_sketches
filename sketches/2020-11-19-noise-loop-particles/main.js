//main.js
//
// Main execution loop from p5js

//set this var to true to start recording when sketch starts
let record = true;

//dynamically resize canvas as browser window changes
let responsive = false;

let record_duration = 6;

var fps = 60;

let total_record_frames = fps * record_duration;

var capturer = new CCapture({ format: 'png', framerate: fps });

function setup() 
{
    createCanvas(640, 640);

    windowResized ();

    sketch_setup ();
}

function draw() 
{
    sketch_draw ();

    if ( record )
        record_frame ();
}

function windowResized ()
{
    if ( responsive )
    {
        //dimension for square canvas
        let s = Math.min ( windowWidth, windowHeight );

        //canvas size always a multiple of 2
        s -= s % 2;

        resizeCanvas ( s, s );
    }
}

function record_frame ()
{
    if ( frameCount == 1 )
        capturer.start ();

    capturer.capture(document.getElementById('defaultCanvas0'));

    console.log(`Recorded frame ${frameCount} of ${total_record_frames}`);

    if ( frameCount >= total_record_frames )
    {
        noLoop();
        console.log('finished recording.');
        capturer.stop();
        capturer.save();
    }
}

//Returns elapsed animation time from 0..1
function record_time ()
{
    return frameCount / total_record_frames;
}


