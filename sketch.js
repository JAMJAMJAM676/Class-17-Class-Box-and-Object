var box1, box2, box3;
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(60,57,50,50,4,3);
  box2 = new Box(100,67,80,30,5,8);
}

function draw() 
{
  background(220);
  box1.show();
  box1.moveHorizontal();
  box1.moveVertical();
  box2.show();
  box2.moveHorizontal();
  box2.moveVertical();
}

