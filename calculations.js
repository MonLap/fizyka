function toRad(x) {
    return x * Math.PI / 180;
}

function maxThrowTime(v0, degrees, g) {
    var v0y = v0 * Math.sin(toRad(degrees));
    return (2 * v0y / g);
}

function v0x(v0, degrees, t) {
    var v0x = v0 * Math.cos(toRad(degrees));
    return v0x * t
}
function v0y(g, degrees, t) {
    var v0y = v0 * Math.sin(toRad(degrees));
    return v0y * t - ((g / 2) * Math.pow(t, 2))
}
function throwRange(v0,g,degrees) {
    return (Math.pow(v0, 2) / g) * Math.sin(2 * toRad(degrees));
}

function y(v0,degrees,t) {
    return t * Math.tan(toRad(degrees)) - ((g / (2 * Math.pow(v0, 2) * Math.pow(Math.cos(toRad(degrees)), 2)))) * Math.pow(t, 2)
}

function throwChart(v0, g, degrees, tickLength) {
    var range = throwRange(v0,g,degrees);
    var data = [];
    for (var i = 0; i < range; i += (range * tickLength)) {
        data.push([i, y(v0,degrees,i)]);
    }
    data.push([range, y(v0,degrees,range)]);
    return data
}

function horizontalDistance(v0, g, degrees, tickLength) {
    var data = [];
    for (var t = 0; t < maxThrowTime(v0, degrees, g); t += tickLength)
        data.push([t, v0x(v0, degrees, t)]);
    return data
}

function verticalDistance(v0, g, degrees, tickLength) {
    var data = [];
    for (var i = 0; i < maxThrowTime(v0, degrees, g); i += tickLength)
        data.push([i, v0y(g,degrees,i)]);
    return data
}