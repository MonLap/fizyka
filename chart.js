function initialConditions(tickLenght, v0, g, degrees) {
    return function createChart(anchor, title, serieName, serieFn) {
        $(anchor).highcharts({
            title: {
                text: title
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br />',
                pointFormat: 'x = {point.x}, y = {point.y}'
            },
            series: [{
                name: serieName,
                data: serieFn(v0, g, degrees, tickLenght)
            }]
        });
    }
}
