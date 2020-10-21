let minLoad = 1;
let maxLoad = 20;

let maxInflation = 3;

let gravity = 1;

class Balloon
{
    constructor ( pos, load, inflation )
    {
        this.load = load;

        this.pos = pos;

        this.inflation = inflation

        this.velocity = createVector ( 0, 0 );
    }

    update ( wind )
    {
        let acceleration = createVector ( 0, 0 );

        let lift = ( this.load - this.inflation ) / maxLoad;

        acceleration.add ( createVector ( 0, lift ) );

        acceleration.add ( createVector ( 0, gravity ) );

        if ( this.pos.y < height - 10 )
            acceleration.add ( createVector ( wind, 0 ) );

        this.velocity.add ( acceleration );

        this.pos.add ( this.velocity );

        if ( this.pos.y > height )
        {
            this.pos.y = height;
            this.velocity = createVector ( 0, 0 );
        }

        if ( this.pos.y < height / 3 )
            this.inflation = 0;

        this.pos.x = ( width + this.pos.x ) % width;

        this.inflation = Math.min ( this.inflation + 0.1, 
            maxLoad * maxInflation );
    }

    display ()
    {
        rectMode ( RADIUS );
        square ( this.pos.x, this.pos.y, this.load );

        let b_rad = this.inflation;

        let b_x = this.pos.x;
        let b_y = this.pos.y - b_rad - this.load;

        circle ( b_x, b_y, b_rad * 2 );
    }
}

let balloons = [];

let wind;

function setup() 
{
    createCanvas(800, 800);

    for ( let i=0; i < 10; i++ )
    {
        let load = random ( minLoad, maxLoad );

        let pos = createVector ( random ( load, width-load ),
                                 random ( load, height-load ) );

        let inflation = random ( 0, maxInflation );

        balloons.push ( new Balloon ( pos, load, inflation ) );
    }
}

function draw() 
{
    background ( '#884477' );

    wind = random ( -1, 1 );

    balloons.forEach ( ( b ) =>
    {
        b.update ( wind );
        b.display ();
    });
}
