let amp;

let period = 60 * 6;

let n = 90;

let r = 20;

let colors = [ 'red', 'green', 'blue' ];

function setup() 
{
    createCanvas(800, 800);

    amp = width/2;
}

function draw() 
{
    background ( 77 );

    translate ( width/2, height/2 );

    for ( let i = 0; i < n; i++ )
    {
        let off = TWO_PI * i/n;

        let x = amp * cos ( off + TWO_PI * frameCount / period );

        rotate ( TWO_PI / n );

        fill ( colors [ i % colors.length ] );

        circle ( x, 0, r );
    }
}
