function Walker ( x, y )
{
    this.x = x;
    this.y = y;

    this.move = function ( hor, ver )
    {
        let dir = function ( bias )
        {
            let r = random ( 3 ) + bias;

            if ( r < 1 ) 
            {
                return -1;
            }
            else if ( r < 2 )
            {
                return 0;
            }
            else
            {
                return 1;
            }
        };

        this.x += dir ( hor );
        this.y += dir ( ver );
    };

    this.draw = function ()
    {
        point ( this.x, this.y );
    };
}

let w = [];

let left_slider, right_slider;

function setup() 
{
    createCanvas(400, 400);

    left_slider = createSlider ( -1, 1, 0, 0.1 );
    left_slider.position ( 20, 20 );

    right_slider = createSlider ( -1, 1, 0, 0.1 );
    right_slider.position ( 20, 50 );

    stroke ( 'rgba(0%, 0%, 0%, 0.1)' );

    for ( let i = 0; i < 10; i++ )
    {
        w.push ( new Walker ( 200, 200 ) );
    }
}

function draw() 
{
    text ( 'horizontal', left_slider.x *2 + left_slider.width, 35 );
    text ( 'vertical', right_slider.x *2 + right_slider.width, 65 );

    w.forEach ( ( walker ) => 
    {
        walker.move ( left_slider.value (), right_slider.value () );
        walker.draw ();
    });
}
