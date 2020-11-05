let matrixFont;
let charSize = 20;

let rows, cols;
let cells;

let cursors;

class MatrixChar
{
    constructor ()
    {
        this.c = 'a';
        this.brightness = 0;
        this.sat = 255;
    }
}

class Cursor
{
    constructor ( x, y )
    {
        this.x = x;
        this.y = y;

        this.wait = 10;
        this.nextmove = random ( 2, 6 );
        this.lifespan = 100;
    }

    update ()
    {
        if ( true )//this.nextmove-- <= 0 )
        {
            this.y += 1;

            this.nextmove = this.wait;
        }

        if ( this.y > rows - 1 )
            return;

        cells [ this.x ][ this.y ].brightness = 100;

    }
}

function preload ()
{
    //https://www.dafont.com/matrix-code-nfi.font
    matrixFont = loadFont ( 'matrix.ttf' );
}

function setup() 
{
    //var cnv = createCanvas(windowWidth, windowHeight);
    var cnv = createCanvas(800, 600);

    cnv.style('display', 'block');

    rows = Math.floor ( height/charSize );
    cols = Math.floor ( width/charSize*2  );

    cells = [];

    for ( let i = 0; i < cols; i++ )
    {
        cells.push ( [] );

        for ( let j = 0; j < rows; j++ )
        {
            cells [ i ].push ( new MatrixChar () );
        }
    }

    colorMode ( HSB );

    cursors = [];

    for ( let i = 0; i< 10; i++ )
    {
        let x = Math.floor ( random ( 0, cols-1 ) );
        let y = Math.floor ( random ( 0, rows-1 ) );

        cursors.push ( new Cursor ( x, y ) );
    }

}

function draw() 
{
    background ( 0 );

    textFont ( matrixFont );

    textSize ( charSize );

    for ( const cursor of cursors )
    {
        cursor.update ();
    }

    let x = 0;
    let y = 0;

    for ( const col of cells )
    {
        for ( const mc of col )
        {
            fill ( 120, mc.sat, mc.brightness );
            text ( mc.c, x, y );

            y += charSize;
        }

        y = 0;

        x += charSize/2;
    }

}
