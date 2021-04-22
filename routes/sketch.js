function setup() { 
    rectMode(CENTER);
    let clientHeight = document.body.clientHeight; 
	let clientWidth = document.body.clientWidth;
	createCanvas(clientWidth, clientHeight); 
    //creates an HTML <canvas> element. defaults to 100x100 if not declared. Often we use numbers for this. But note that the canvas is an HTML element and we can set it with JS variables & treat it like any other HTML element. Because HTML canvas exists independently of p5.js, which is giving us tools to make it easier and more expressive to work with. 
	background(180);
    frameRate(2000);
    
}

function draw() {
    
    

    //make randomly placed snowflakes of different grayscales
    stroke(randomInt(255));
    let y = randomInt(width);
    let z = randomInt(height);
    
    line(y, z, y-5, z-5); 
    line(y, z, y+5, z+5); 
    line(y, z, y+10, z); 
    line(y, z, y-10, z); 
    line(y, z, y, z-10); 
    line(y, z, y, z+10); 
    line(y, z, y-5, z+5); 
    line(y, z, y+5, z-5); 


    //beginShape() and endShape() contain vertex() functions (like point) that define all the vertices of a custom polygon
    //can use endShape(CLOSE) to connect the first and last points if they haven't been explicitly connected using vertex()*/
}

//using a lib doesn't constrain us to just the lib. We can still use all the vanilla JS. And most rely on you knowing how functions, objects, variables, loops and arrays work in vanilla. 
function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
