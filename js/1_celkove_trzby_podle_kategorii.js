document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart('salesChart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Celkové tržby podle kategorií produktů'
        },
        xAxis: {
            categories: ['Televize', 'Tablety', 'Mobilní telefony', 'Audio'],
            title: {
                text: 'Kategorie'
            }
        },
        legend: {
            align: 'right',       // Aligns the legend to the right
            verticalAlign: 'top', // Places the legend at the top
            layout: 'vertical',   // Makes the legend items stack vertically
            x: -10,               // Small offset from the right edge (negative moves it leftward)
            y: 50                 // Offset from the top to position below the title
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Tržby'
            },
            labels: {
                formatter: function() {
                    return this.value + ' Kč';
                }
            }
        },
        tooltip: {
            pointFormat: '<b>{point.y:,.0f} Kč</b>'
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    format: '{point.y:,.0f} Kč'
                }
            }
        },
        series: [{
            name: 'Tržby',
            data: [
                { y: 1205680, color: '#4a77b4' },
                { y: 623660, color: '#d68c60' },
                { y: 614460, color: '#6aaa64' },
                { y: 416370, color: '#c05555' }
            ]
        }],
        credits: {
            enabled: false
        }
    });
});