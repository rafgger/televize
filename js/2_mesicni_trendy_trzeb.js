document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart('container2', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Měsíční trendy tržeb podle kategorií produktů'
        },
        xAxis: {
            categories: ['Únor', 'Březen', 'Duben', 'Květen'],
            title: {
                text: 'Měsíc'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Tržby (Kč)' // Added 'Kč' to the axis title for clarity
            },
            labels: {
                formatter: function() {
                    return this.value + ' Kč';
                }
            },
            gridLineWidth: 1
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:,.0f} Kč</b><br/>'
        },
        legend: {
            align: 'right',
            x: -10,
            y: 30, // Adjusted to move the legend down a bit
            verticalAlign: 'right',
            layout: 'vertical',
            floating: true,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            title: {
                text: 'Kategorie'
            },
            itemStyle: {
                fontWeight: 'normal'
            },
            titleStyle: {
                fontWeight: 'bold'
            }
        },
        plotOptions: {
            line: {
                marker: {
                    enabled: true,
                    radius: 4
                },
                dataLabels: {
                    enabled: false // Added to prevent data labels from cluttering the chart.  Can be set to true if desired.
                }
            }
        },
        series: [{
            name: 'Televize',
            color: '#4572A7',
            data: [290000, 380000, 265000, 265000]
        }, {
            name: 'Mobilní telefony',
            color: '#FF9655',
            data: [210000, 155000, 175000, 75000]
        }, {
            name: 'Tablety',
            color: '#50B432',
            data: [190000, 165000, 170000, 100000]
        }, {
            name: 'Audio',
            color: '#DD4444',
            data: [130000, 110000, 108000, 70000]
        }]
    });
});