let results_rand = new Array ( 400 ).fill ( 0 );
let results_gaus = new Array ( 400 ).fill ( 0 );

function setup() 
{
    createCanvas(400, 400);

    for ( let i = 0; i<10000; i++ )
    {
        let r = Math.floor ( random ( 400 ) );

        results_rand [ r ] += 1;

        let g = Math.floor ( randomGaussian ( 200, 50 ) );

        results_gaus [ g ] += 1;
    }

    stroke ( 'red' );

    for ( let i = 0; i<400; i++ )
    {
        point ( i, 400-results_rand [ i ] );
    }

    stroke ( 'blue' );

    for ( let i = 0; i<400; i++ )
    {
        point ( i, 400-results_gaus [ i ] );
    }
}

function draw() 
{
}
