let rows = 7;
let cols = 7;
let lights = [];

let random_presses = 120;

let you_win = false;

function sketch_setup ()
{
    for ( let i = 0; i< (rows*cols); i++ )
    {
        lights.push ( false );
    }
    
    shuffle_lights ();

}

function shuffle_lights ()
{
    let presses = 0;

    do
    {
        while ( presses < random_presses )
        {
            let x = Math.floor ( random ( cols ) );
            let y = Math.floor ( random ( rows ) );

            activate_light ( x, y );

            presses += 1;
        }
    }
    while ( active_light_count < 21 );

    you_win = false;
}

function light_idx ( x, y )
{
    return x + cols * y;
}

function activate_light ( x, y )
{
    let l = light_idx ( x, y );

    lights [ l ] = !lights [ l ];

    neighbours ( x, y ).map ( n => light_idx ( n.x, n.y ) )
        .forEach ( ( n ) => lights [ n ] = !lights [ n ] );
}

function active_light_count ()
{
    return lights.filter ( l => l ).length;
}

function neighbours ( x_, y_ )
{
    let n = []

    if ( x_ > 0        ) n.push ( { x : x_-1, y : y_ } );
    if ( x_ < cols - 1 ) n.push ( { x : x_+1, y : y_ } );

    if ( y_ > 0        ) n.push ( { x : x_, y : y_-1 } );
    if ( y_ < rows - 1 ) n.push ( { x : x_, y : y_+1 } );

    return n;
}

function sketch_draw ()
{
    if ( you_win )
    {
        fill ( 255 );
        textSize ( 32 );

        text ( 'You are awesome and cool!', 100, 100 );
    }
    else
    {
        draw_lights ();
    }
}

function draw_lights ()
{
    let tile_w = width/cols;
    let tile_h = height/rows;


    for ( let i = 0; i<rows; i++ )
    {
        for ( let j = 0; j<cols; j++ )
        {
            let x = i * tile_w + 1;
            let y = j * tile_h + 1;

            let l = light_idx ( i, j );

            if ( lights [ l ] )
                fill ( '#f00' );
            else
                fill ( '#500' );

            rect ( x, y, tile_w - 1, tile_h - 1 );
            
        }
    }
    
}

function mousePressed ()
{
    if ( mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height )
        return;

    if ( you_win )
    {
        shuffle_lights ();
    }
    else
    {
        let tile_w = width/cols;
        let tile_h = height/rows;

        let x = Math.floor ( mouseX / tile_w );
        let y = Math.floor ( mouseY / tile_h );

        activate_light ( x, y );

        check_win ();
    }
}

function check_win ()
{
    let c = active_light_count ();

    if ( c == 0 || c == ( rows * cols ) )
    {
        you_win = true;
    }
}

