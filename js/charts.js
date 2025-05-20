// Implementace interaktivních grafů pomocí Chart.js
document.addEventListener('DOMContentLoaded', function() {
    // Nastavení českého formátování čísel
    const numberFormatter = new Intl.NumberFormat('cs-CZ');
    
    // Společné nastavení pro všechny grafy
    Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    Chart.defaults.font.size = 14;
    Chart.defaults.color = '#333';
    
    // Společné barvy pro kategorie
    const categoryColors = {
        'Televize': 'rgba(54, 162, 235, 0.8)',
        'Tablety': 'rgba(255, 159, 64, 0.8)',
        'Mobilní telefony': 'rgba(75, 192, 192, 0.8)',
        'Audio': 'rgba(201, 203, 207, 0.8)'
    };
    
    // Funkce pro vykreslení popisků nad sloupci
    function renderBarLabels(chart) {
        const ctx = chart.ctx;
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        
        chart.data.datasets.forEach((dataset, datasetIndex) => {
            const meta = chart.getDatasetMeta(datasetIndex);
            if (!meta.hidden && meta.type === 'bar') {
                meta.data.forEach((bar, index) => {
                    const data = dataset.data[index];
                    let formattedValue = '';
                    
                    // Formátování podle typu dat
                    if (chart.options.scales.y.title.text.includes('Kč')) {
                        formattedValue = numberFormatter.format(data) + ' Kč';
                    } else if (chart.options.scales.y.title.text.includes('%')) {
                        formattedValue = data.toFixed(1) + ' %';
                    } else {
                        formattedValue = data.toString();
                    }
                    
                    // Pozice textu
                    const position = bar.getCenterPoint();
                    const height = bar.height;
                    
                    // Vykreslení textu
                    ctx.fillStyle = '#000';
                    ctx.fillText(formattedValue, position.x, bar.y - 5);
                });
            }
        });
    }

    
                Highcharts.chart('container6', {
                    chart: {
                        type: 'scatter',
                        zoomType: 'xy'
                    },
                    title: {
                        text: 'Denní tržby před a po změně marketingového rozpočtu'
                    },
                    xAxis: {
                        type: 'datetime',
                        title: {
                            text: 'Datum'
                        },
                        plotLines: [{
                            color: 'red',
                            width: 2,
                            value: dailyRevenuesData.changeDate,
                            dashStyle: 'Dash',
                            label: {
                                text: 'Změna rozpočtu (18.3.2022)',
                                align: 'left',
                                rotation: 0,
                                y: 15,
                                style: {
                                    color: 'red',
                                    fontWeight: 'bold'
                                }
                            }
                        }]
                    },
                    yAxis: {
                        title: {
                            text: 'Tržby'
                        },
                        labels: {
                            formatter: function() {
                                return this.value.toLocaleString('cs-CZ') + ' Kč';
                            }
                        }
                    },
                    tooltip: {
                        pointFormat: '<b>{series.name}</b><br>Datum: {point.x:%d.%m.%Y}<br>Tržby: {point.y:,.0f} Kč'
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle'
                    },
                    series: [{
                        name: 'Před změnou',
                        color: '#1f77b4',
                        data: dailyRevenuesData.beforeChange
                    }, {
                        name: 'Po změně',
                        color: '#ff7f0e',
                        data: dailyRevenuesData.afterChange
                    }]
                });
                

    
    // 1. Graf: Celkové tržby podle kategorií produktů
    const categoryRevenueCtx = document.getElementById('categoryRevenueChart').getContext('2d');
    const categoryRevenueChart = new Chart(categoryRevenueCtx, {
        type: 'bar',
        data: {
            labels: categoryRevenueData.categories,
            datasets: [{
                label: 'Tržby (Kč)',
                data: categoryRevenueData.revenues,
                backgroundColor: Object.values(categoryColors),
                borderColor: Object.values(categoryColors).map(color => color.replace('0.8', '1')),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Celkové tržby podle kategorií produktů',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Tržby: ${numberFormatter.format(context.raw)} Kč`;
                        }
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Tržby (Kč)'
                    },
                    ticks: {
                        callback: function(value) {
                            return numberFormatter.format(value) + ' Kč';
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Kategorie'
                    }
                }
            }
        },
        plugins: [{
            id: 'barLabels',
            afterDatasetsDraw: function(chart) {
                renderBarLabels(chart);
            }
        }]
    });
    
    // 2. Graf: Měsíční trendy tržeb podle kategorií produktů
    const monthlyTrendsCtx = document.getElementById('monthlyTrendsChart').getContext('2d');
    new Chart(monthlyTrendsCtx, {
        type: 'line',
        data: {
            labels: monthlyTrendsData.months,
            datasets: monthlyTrendsData.series.map((series, index) => {
                const categoryName = series.name;
                return {
                    label: categoryName,
                    data: series.data,
                    backgroundColor: categoryColors[categoryName],
                    borderColor: categoryColors[categoryName].replace('0.8', '1'),
                    borderWidth: 2,
                    tension: 0.1,
                    pointRadius: 5,
                    pointHoverRadius: 7
                };
            })
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Měsíční trendy tržeb podle kategorií produktů',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${numberFormatter.format(context.raw)} Kč`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Tržby (Kč)'
                    },
                    ticks: {
                        callback: function(value) {
                            return numberFormatter.format(value) + ' Kč';
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Měsíc'
                    }
                }
            }
        }
    });
    
    // 3. Graf: Podíl kategorií na tržbách podle měsíců
    const categoryShareCtx = document.getElementById('categoryShareChart').getContext('2d');
    
    // Příprava dat pro stacked bar chart
    const stackedData = {
        labels: categoryShareData.months,
        datasets: categoryShareData.series.map((series, index) => {
            const categoryName = series.name;
            return {
                label: categoryName,
                data: series.data,
                backgroundColor: categoryColors[categoryName],
                borderColor: categoryColors[categoryName].replace('0.8', '1'),
                borderWidth: 1
            };
        })
    };
    
    new Chart(categoryShareCtx, {
        type: 'bar',
        data: stackedData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Podíl kategorií na tržbách podle měsíců',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${numberFormatter.format(context.raw)} Kč`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Měsíc'
                    }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Tržby (Kč)'
                    },
                    ticks: {
                        callback: function(value) {
                            return numberFormatter.format(value) + ' Kč';
                        }
                    }
                }
            }
        }
    });
    
    // 4. Graf: Počet objednávek podle dne v týdnu
    const ordersByDayCtx = document.getElementById('ordersByDayChart').getContext('2d');
    const ordersByDayChart = new Chart(ordersByDayCtx, {
        type: 'bar',
        data: {
            labels: ordersByDayData.days,
            datasets: [{
                label: 'Počet objednávek',
                data: ordersByDayData.counts,
                backgroundColor: 'rgba(153, 102, 255, 0.8)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Počet objednávek podle dne v týdnu',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Počet objednávek'
                    },
                    ticks: {
                        stepSize: 1
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Den v týdnu'
                    }
                }
            }
        },
        plugins: [{
            id: 'barLabels',
            afterDatasetsDraw: function(chart) {
                renderBarLabels(chart);
            }
        }]
    });
    
    // 5. Graf: Kategorie nejčastěji nakupované společně s televizemi
    const categoriesWithTvCtx = document.getElementById('categoriesWithTvChart').getContext('2d');
    const categoriesWithTvChart = new Chart(categoriesWithTvCtx, {
        type: 'bar',
        data: {
            labels: categoriesWithTvData.categories,
            datasets: [{
                label: 'Počet společných nákupů',
                data: categoriesWithTvData.counts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Kategorie nejčastěji nakupované společně s televizemi',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Počet společných nákupů'
                    },
                    ticks: {
                        stepSize: 1
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Kategorie'
                    }
                }
            }
        },
        plugins: [{
            id: 'barLabels',
            afterDatasetsDraw: function(chart) {
                renderBarLabels(chart);
            }
        }]
    });
    
    // 6. Graf: Průměrné denní tržby před a po změně marketingového rozpočtu
    const marketingImpactCtx = document.getElementById('marketingImpactChart').getContext('2d');
    const marketingImpactChart = new Chart(marketingImpactCtx, {
        type: 'bar',
        data: {
            labels: marketingImpactData.periods,
            datasets: [{
                label: 'Průměrné denní tržby',
                data: marketingImpactData.revenues,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Průměrné denní tržby před a po změně marketingového rozpočtu',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Průměrné denní tržby: ${numberFormatter.format(context.raw)} Kč`;
                        }
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Průměrné denní tržby (Kč)'
                    },
                    ticks: {
                        callback: function(value) {
                            return numberFormatter.format(value) + ' Kč';
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Období'
                    }
                }
            }
        },
        plugins: [{
            id: 'barLabels',
            afterDatasetsDraw: function(chart) {
                renderBarLabels(chart);
            }
        }]
    });
    
    // 7. Graf: Procentuální změna průměrných denních tržeb podle kategorií
    const categoryPercentChangeCtx = document.getElementById('categoryPercentChangeChart').getContext('2d');
    const categoryPercentChangeChart = new Chart(categoryPercentChangeCtx, {
        type: 'bar',
        data: {
            labels: categoryPercentChangeData.categories,
            datasets: [{
                label: 'Procentuální změna',
                data: categoryPercentChangeData.percentChanges,
                backgroundColor: Object.values(categoryColors),
                borderColor: Object.values(categoryColors).map(color => color.replace('0.8', '1')),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Procentuální změna průměrných denních tržeb podle kategorií',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Změna: ${context.raw.toFixed(2)}%`;
                        }
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Procentuální změna (%)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Kategorie'
                    }
                }
            }
        },
        plugins: [{
            id: 'barLabels',
            afterDatasetsDraw: function(chart) {
                renderBarLabels(chart);
            }
        }]
    });
    
    // Nastavení výšky kontejnerů grafů
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach(container => {
        container.style.height = '400px';
        container.style.marginBottom = '30px';
    });
});
