var can;
var conxt;

function init() {

    c=document.getElementById("mycanvas");
    conxt = c.getContext('2d');
    draw();

}


function draw() {

    conxt.fillStyle = "blue"
    conxt.fillRect(40,40,60,60);

}

init();