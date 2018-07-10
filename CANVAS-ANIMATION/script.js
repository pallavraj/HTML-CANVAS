var c;
var ctx;

function init() {
    c=document.getElementById("mycanvas")
    ctx = c.getContext("2d");
    draw();
}

function draw() {

    var x = 0;
    var y = 0;

    setInterval(function () {

       x += 1;
       y += 1;

       ctx.fillStyle = "red";
       ctx.fillRect(0,0,c.width,c.height);


       ctx.fillStyle = "blue"
       ctx.beginPath();
       ctx.arc(x,100,40,0,Math.PI * 2);
       ctx.fill();



        ctx.fillStyle = "white"
        ctx.beginPath();
        ctx.arc(150,y,40,0,Math.PI * 2);
        ctx.fill();


        ctx.fillStyle = "blue"
        ctx.beginPath();
        ctx.arc(350,y,40,0,Math.PI * 2);
        ctx.fill();

    },20);

}

init();