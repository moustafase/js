$(document).ready(function() {
'use strict';
paper.install(window); // installs paper.js
paper.setup(document.getElementById('mainCanvas')); // attach paper.js to the canvas



var c = Shape.Circle(200, 200, 80); // defines a shape circle variable
c.fillColor = 'black'; // fill the circle with black color
var text = new PointText(200, 200); // defines a text variable 
text.justification = 'center'; // editing the text variable place
text.fillColor = 'white'; // editing the text variable color
text.fontSize = 20; // editing the text variable size
text.content = 'hello world'; // editing the value of the text variable

var tool = new Tool(); // defines a tool paper.js variable
tool.onMouseDown = function(event) { // makes event handler to the tool on moving the mouse which is an asynchronous event
var c = Shape.Circle(event.point.x, event.point.y, 20); // defines the property of the event which is on pointing the mouse the shape circle is initialized and drawn
c.fillColor = 'green'; // filling with color green the shape circle
};

paper.view.draw(); // tells Paper.js to actually draw something to the screen.
console.log('main.js loaded'); // for debugging purpose display it by f12 in chrome
});


