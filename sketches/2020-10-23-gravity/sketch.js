let movers = [];
let attractors = [];

const ClickAction =
{
    ADD_ATTRACTOR : 1,
    ADD_MOVER : 2,
    DELETE    : 3,
};

let clickAction = ClickAction.ADD_ATTRACTOR;

function restart ()
{
    movers = [];
    attractors = [];

    for ( let i = 0; i < 6; i++ )
    {
        let m = new Mover ( createVector ( random ( 0, width ),
                                           random ( 0, height ) ) ); 
        movers.push ( m );

        m.addForce ( p5.Vector.random2D() );
    }

    attractors.push ( new Attractor ( createVector ( width/2, height/2 ) ) );
}

function setup() 
{
    createCanvas(800, 800);

    restartButton = createButton ( 'Restart' );
    restartButton.position ( 20, height + 10 );
    restartButton.size ( 100, 80 );
    restartButton.mousePressed ( restart );

    attractorButton = createButton ( 'Attractor' );
    attractorButton.position ( 120, height + 10 );
    attractorButton.size ( 100, 80 );
    attractorButton.mousePressed ( 
        () => clickAction = ClickAction.ADD_ATTRACTOR );

    moverButton = createButton ( 'Mover' );
    moverButton.position ( 220, height + 10 );
    moverButton.size ( 100, 80 );
    moverButton.mousePressed ( 
        () => clickAction = ClickAction.ADD_MOVER );
    restart ();
}

function draw() 
{
    background ( 0, 0, 0, 50 );

    movers.forEach ( ( m ) => 
    {
        m.update ();
        m.display ();
    });

    attractors.forEach ( ( a ) => 
    {
        movers.forEach ( ( m ) => 
        {
            a.attract ( m );
        });

        a.display ();
    });

}

function mousePressed ()
{
    if ( mouseY > height || mouseX > width )
        return;

    if ( clickAction == ClickAction.ADD_ATTRACTOR )
    {
        attractors.push ( 
            new Attractor ( createVector ( mouseX, mouseY ) ) );
    }
    if ( clickAction == ClickAction.ADD_MOVER )
    {
        let m = new Mover ( createVector ( mouseX, mouseY ) ); 
        movers.push ( m );

        m.addForce ( p5.Vector.random2D() );
    }
}
