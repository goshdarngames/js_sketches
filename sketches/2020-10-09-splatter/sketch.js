function setup() 
{
    createCanvas(800, 800);
}

let colors = [ '#cc2200', '#44ee12', '#6677aa' ];

function draw() 
{
    let x = randomGaussian ( 400, 100 );
    let y = randomGaussian ( 400, 100 );

    let drips = Math.floor ( randomGaussian ( 10, 4 ) );

    let color = colors [ Math.floor ( random ( colors.length ) ) ];

    stroke ( color );

    for ( let i = 0; i < drips; i++ )
    {
        let offset = () => -30 + random ( 60 );

        strokeWeight ( randomGaussian ( 8, 4 ) );

        point ( x + offset (), y + offset () );
    }
}
