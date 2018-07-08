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
    conxt.strokeStyle = 'red'
    conxt.lineWidth = "4";
    conxt.strokeRect(40,40,60,60);

    conxt.fillStyle = "black"
    conxt.fillRect(60,60,80,80);


    conxt.font = '40pt Arial'

    var gradient = conxt.createLinearGradient(0,0,c.width,0);
    gradient.addColorStop("0","red");
    gradient.addColorStop("1","black");

    conxt.fillStyle = gradient;
    conxt.fillText("PALLAV RAJ",80,100);

    conxt.strokeStyle = "#000000"
    conxt.fillStyle = "green"
    conxt.lineWidth = 2;

    conxt.beginPath();
    conxt.moveTo(110,110);
    conxt.lineTo(350,130);
    conxt.stroke();
    conxt.closePath()



}

init();