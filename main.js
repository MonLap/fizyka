var tickLength = 0.01;
var v0 = 3;
var g = 9;
var degrees = 10;

$("#degrees").val(degrees);
$("#v0").val(v0);
$("#g").val(g);
$("#tick").val(tickLength);

var createChart = initialConditions(tickLength, v0, g, degrees);
createChart('#trajectory', 'Tor lotu', 'Aktualna pozycja', throwChart);
createChart('#horizontalDistance', 'Odległości pozioma w czasie', 'Odległość', horizontalDistance);
createChart('#verticalDistance', 'Wysokość w czasie', 'Wysokość', verticalDistance);
