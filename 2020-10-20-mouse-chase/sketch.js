let maxVelocity = 5;
let maxSize = 80;
let tailSize = 50;
let baseSpeed = 1;

class Mover
{
    constructor ( size, speed, getTarget )
    {
        this.size = size;

        this.speed = speed;

        this.getTarget = getTarget;

        this.pos = createVector ( width/2, height/2 );

        this.velocity = createVector ( 0, 0 );

    }

    update ()
    {
        let target = this.getTarget ();

        let dir = p5.Vector.sub ( target, this.pos );

        let acc = p5.Vector.mult ( dir.normalize (), this.speed*dir.mag() );

        this.velocity.add ( acc );

        this.velocity.setMag ( 
            Math.min ( maxVelocity, this.velocity.mag () ) );

        this.pos.add ( this.velocity );
    }

    display ()
    {
        ellipse ( this.pos.x, this.pos.y, this.size, this.size );
    }

    get position ()
    {
        return this.pos;
    }
}

let movers = [];

function setup() 
{
    createCanvas ( 800, 800 );

    let mouseTarget = () => createVector ( mouseX, mouseY );

    let moverTarget = ( m ) => m.position;

    let sizeStep = maxSize / tailSize;

    let speedStep = baseSpeed / tailSize;

    movers.push ( new Mover ( maxSize+sizeStep, baseSpeed, mouseTarget ) );

    for ( let i = 0; i < tailSize; i++ )
    {
        let target = () => moverTarget ( movers [ i ] );

        let size = maxSize - ( i * sizeStep );
        
        let speed = baseSpeed + ( i * speedStep );

        let m = new Mover ( size, speed, target );

        movers.push ( m );
    }


    stroke ( '#449933' );
    strokeWeight ( 2 );

    fill ( '#CCFF66' );

}

function draw() 
{
    background ( '#884477' );

    movers.forEach ( ( m ) =>
    {
        m.update ();
        m.display ();
    });
}
