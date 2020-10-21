class Balloon
{
    constructor ( pos, load, inflation )
    {
        this.load = load;

        this.pos = pos;

        this.inflation = inflation
    }

    update ()
    {
    }

    display ()
    {
        square ( this.pos.x, this.pos.y, this.load );

        circle ( this.pos.x, this.pos.y - this.inflation/2, this.inflation/2 );
    }
}

let balloons = [];

function setup() 
{
    createCanvas(800, 800);

    for ( let i=0; i < 10; i++ )
    {
        let load = random ( 10, 80 );

        let pos = createVector ( random ( load, width-load ),
                                 random ( load, height-load ) );

        let inflation = random ( 0, 300 );

        balloons.push ( new Balloon ( pos, load, inflation ) );
    }
}

function draw() 
{
    background ( '#884477' );

    balloons.forEach ( ( b ) =>
    {
        b.update ();
        b.display ();
    });
}
