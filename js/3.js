        document.addEventListener('DOMContentLoaded', function() {
            Highcharts.chart('container3', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Podíl kategorií na tržbách podle měsíců'
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
                        text: 'Tržby (Kč)'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{point.x}</b><br/>',
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:,.0f} Kč</b><br/>Total: <b>{point.stackTotal:,.0f} Kč</b>'
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: false, // Changed to false to reduce clutter, can be set to true if needed
                            style: {
                                fontWeight: 'bold',
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                    name: 'Audio',
                    color: '#4572A7',
                    data: [130000, 110000, 108000, 70000]
                }, {
                    name: 'Mobilní telefony',
                    color: '#FF9655',
                    data: [210000, 155000, 175000, 75000]
                }, {
                    name: 'Tablety',
                    color: '#50B432',
                    data: [190000, 165000, 170000, 100000]
                }, {
                    name: 'Televize',
                    color: '#DD4444',
                    data: [290000, 380000, 265000, 265000]
                }]
            });
        });
