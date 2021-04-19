canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
car1x = 10;
car1y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://www.clipartkey.com/mpngs/m/11-117655_clipart-race-car-top-down-clipart.png";
car2x = 10;
car2y = 100;

background_img = "https://i.postimg.cc/bv5d35nK/racing.jpg";

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1()
{
    ctx.drawImage(car1_imgTag, car1x, car1y, car1_width, car1_height);
}

function uploadCar2()
{
    ctx.drawImage(car2_imgTag, car2x, car2y, car2_width, car2_height);
}

window.addEventListener("keydown", keydown);

function keydown(e)
{
    keypressed = e.keyCode;

    if (keypressed == "38")
    {
        car1_up();
        console.log("Car1 Up!");
    }

    if (keypressed == "40")
    {
        car1_down();
        console.log("Car1 Down!");
    }

    if (keypressed == "37")
    {
        car1_left();
        console.log("Car1 Left!");
    }

    if (keypressed == "39")
    {
        car1_right();
        console.log("Car1 Right!");
    }


    if (keypressed == "87")
    {
        car2_up();
        console.log("Car2 Up!");
    }

    if (keypressed == "83")
    {
        car2_down();
        console.log("Car2 Down!");
    }

    if (keypressed == "65")
    {
        car2_left();
        console.log("Car2 Left!");
    }

    if (keypressed == "68")
    {
        car2_right();
        console.log("Car2 Right!");
    }
}

function car1_up()
{
    if (car1y >= 0)
    {
        car1y = car1y - 5;
        console.log("When Up Arrow Is Pressed, The X and Y coordinates are = X = " + car1x + "; Y = " + car1y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1_down()
{
    if (car1y <= 500)
    {
        car1y = car1y + 5;
        console.log("When Down Arrow Is Pressed, The X and Y coordinates are = X = " + car1x + "; Y = " + car1y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1_left()
{
    if (car1y >= 0)
    {
        car1x = car1x - 5;
        console.log("When Left Arrow Is Pressed, The X and Y coordinates are = X = " + car1x + "; Y = " + car1y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1_right()
{
    if (car1x <= 700)
    {
        car1x = car1x + 5;
        console.log("When Right Arrow Is Pressed, The X and Y coordinates are = X = " + car1x + "; Y = " + car1y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2_up()
{
    if (car2y >= 0)
    {
        car2y = car2y - 5;
        console.log("When W Key Is Pressed, The X and Y coordinates are = X = " + car1x + "; Y = " + car1y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2_down()
{
    if (car2y <= 500)
    {
        car2y = car2y + 5;
        console.log("When S Key Is Pressed, The X and Y coordinates are = X = " + car1x + "; Y = " + car1y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2_left()
{
    if (car2x >= 0)
    {
        car2x = car2x - 5;
        console.log("When A Key Is Pressed, The X and Y coordinates are = X = " + car1x + "; Y = " + car1y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2_right()
{
    if (car2x <= 700)
    {
        car2x = car2x + 5;
        console.log("When D Key Is Pressed, The X and Y coordinates are = X = " + car1x + "; Y = " + car1y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
