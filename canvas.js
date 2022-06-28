let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// API
let tool = canvas.getContext("2d");

tool.strokeStyle= "red";
tool.lineWidth = "5";

tool.beginPath();
tool.moveTo(10,10);
tool.lineTo(100, 150);
tool.stroke();

tool.lineTo(200, 200);
tool.stroke();