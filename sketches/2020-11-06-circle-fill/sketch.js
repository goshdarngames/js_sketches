let bubbles = [];

class Bubble
{
    constructor ( x, y )
    {
        this.x = x;
        this.y = y;
        this.r = 1;

        this.life = Math.floor ( random ( 20, 120 ) );

        this.popped = false;
    }

    update ()
    {
        if ( this.pointCollide ( mouseX, mouseY, 20 ) )
        {
            this.popped = true;
        }
        
        if ( !this.edgeCollide () && !this.bubbleCollide () )
        {
            this.r += 1;
        }
        else
        {
            if ( this.life-- <= 0 )
                this.popped = true;
        }
    }

    edgeCollide ()
    {
        return this.x + this.r > width  ||
               this.x - this.r < 0      ||
               this.y + this.r > height ||
               this.y - this.r < 0;

    }

    bubbleCollide ()
    {
        for ( const b of bubbles )
        {
            if ( b == this )
                continue;

            let d = dist ( this.x, this.y, b.x, b.y );

            if ( d < this.r + b.r )
                return true;
        }

        return false;
    }

    pointCollide ( px, py, m )
    {
        return dist ( this.x, this.y, px, py ) <= this.r + m;
    }

    draw ()
    {
        noFill ();
        stroke ( 255 );
        strokeWeight ( 2 );

        circle ( this.x, this.y, this.r * 2 );
    }
}

function addBubbles ()
{
    for ( let i = 0; i < 10; i++ )
    {
        let x = random ( 0, width );
        let y = random ( 0, height );

        let collisions = bubbles.filter ( ( b ) => b.pointCollide ( x, y, 0 ) );

        if ( collisions.length > 0 )
            continue;

        bubbles.push ( new Bubble ( x, y ) );
    }
}

function setup() 
{
    createCanvas(800,800);
}

function draw() 
{
    background ( 0 );

    if ( bubbles.length < 1000 )
        addBubbles ();

    for ( const b of bubbles )
    {
        b.update ();
        b.draw ();
    }

    bubbles = bubbles.filter ( ( b ) => !b.popped );
}
