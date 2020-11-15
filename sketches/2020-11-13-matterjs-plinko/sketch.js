// the frame rate
var fps = 60;

// the canvas capturer instance
//var capturer = new CCapture({ format: 'png', framerate: fps });

function setup() 
{
    createCanvas(640, 640);

    plinko_setup ();

}

var startMillis; // needed to subtract initial millis before first draw to begin at t=0.

function draw() 
{
    //if (startMillis == null) {
        //startMillis = millis();
        // start the recording
        //capturer.start();
    //}

    // duration in milliseconds
    //var duration = 15000;

    //// compute how far we are through the animation as a value between 0 and 1.
    //var elapsed = millis() - startMillis;
    //var t = map(elapsed, 0, duration, 0, 1);

    //// if we have passed t=1 then end the animation.
    //if (t > 1) {
    //    noLoop();
    //    console.log('finished recording.');
    //    capturer.stop();
    //    capturer.save();
    //    return;
    //}

    plinko_draw ();

    //console.log('capturing frame');
    //capturer.capture(document.getElementById('defaultCanvas0'));
}
