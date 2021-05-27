var num1,num2;
var v1,v2,v3,v4;

function setup() {
  createCanvas(400, 400);
  num1=createInput()
  num1.position(5,60)
  num2=createInput()
  num2.position(200,60)
  v1=createButton("add");
  v1.position(10,200);
  v1.mousePressed(add);
  v2=createButton("subtract");
  v2.position(100,200);
  v2.mousePressed(subtract);
  v3=createButton("multiply");
  v3.position(200,200);
  v3.mousePressed(multiply);
  v4=createButton("divide");
  v4.position(300,200);
  v4.mousePressed(divide);
}

function draw() {
  background("black");
  text("number 1 ",70,50)
  text("number 2 ",270,50)
num1=parseInt(num1.value());
num2=parseInt(num2.value());
}

function add(){
  console.log(num1+num2);
}

function subtract(){
  console.log(num1-num2);
}

function multiply(){
  console.log(num1*num2);
}

function divide(){
  console.log(num1/num2);
}