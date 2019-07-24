( function ( $ ) {
    "use strict";

    //chart1
    var ctx = document.getElementById( "chart1" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "2013", "2014", "2015", "2016", "2017", "2018" ],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [ {
                label: "PNS",
                data: [ 410, 351, 426, 432, 396, 242],
                backgroundColor: 'transparent',
                borderColor: 'rgba(220,53,69,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(220,53,69,0.75)',
                    }, {
                label: "TNI",
                data: [ 37, 33, 69, 39, 34, 35],
                backgroundColor: 'transparent',
                borderColor: 'rgba(0, 255, 38, 0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(0, 255, 38, 0.75)',
                    }, {
                label: "Polisi",
                data: [ 219, 293, 271, 333, 320, 228],
                backgroundColor: 'transparent',
                borderColor: 'rgba(194, 165, 0, 0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(194, 165, 0, 0.75)',
                    } ]
        },
        options: {
            responsive: true,

            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },
            },
            scales: {
                xAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Sumber: Dit. Iindak Pidana Narkoba Bareskim Polri'
                    }
                        } ],
                yAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                        } ]
            },
            title: {
                display: false,
                text: 'Normal Legend'
            }
        }
    } );

    //chart2
    var ctx = document.getElementById( "chart2" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "2013", "2014", "2015", "2016", "2017", "2018" ],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [ {
                label: "Swasta",
                data: [ 19731, 18928, 20339, 24489, 25481, 13012],
                backgroundColor: 'transparent',
                borderColor: 'rgba(220,53,69,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(220,53,69,0.75)',
                    }, {
                label: "Wiraswasta",
                data: [ 9010, 11450, 14074, 16343, 16703, 10558],
                backgroundColor: 'transparent',
                borderColor: 'rgba(0, 255, 38, 0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(0, 255, 38, 0.75)',
                    }, {
                label: "Tani",
                data: [ 2107, 1613, 1856, 2122, 2578, 1698],
                backgroundColor: 'transparent',
                borderColor: 'rgba(194, 165, 0, 0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(194, 165, 0, 0.75)',
                    } ]
        },
        options: {
            responsive: true,

            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },
            },
            scales: {
                xAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Sumber: Dit. Iindak Pidana Narkoba Bareskim Polri'
                    }
                        } ],
                yAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                        } ]
            },
            title: {
                display: false,
                text: 'Normal Legend'
            }
        }
    } );

    //chart3
    var ctx = document.getElementById( "chart3" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "2013", "2014", "2015", "2016", "2017", "2018" ],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [ {
                label: "Mahasiswa",
                data: [ 857, 885, 932, 1075, 1266, 763],
                backgroundColor: 'transparent',
                borderColor: 'rgba(220,53,69,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(220,53,69,0.75)',
                    }, {
                label: "Pelajar",
                data: [ 1121, 834, 855, 1276, 1034, 730],
                backgroundColor: 'transparent',
                borderColor: 'rgba(0, 255, 38, 0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(0, 255, 38, 0.75)',
                    }, {
                label: "Buruh",
                data: [ 4944, 4656, 5209, 6425, 6832, 5017],
                backgroundColor: 'transparent',
                borderColor: 'rgba(194, 165, 0, 0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(194, 165, 0, 0.75)',
                    } ]
        },
        options: {
            responsive: true,

            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },
            },
            scales: {
                xAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Sumber: Dit. Iindak Pidana Narkoba Bareskim Polri'
                    }
                        } ],
                yAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                        } ]
            },
            title: {
                display: false,
                text: 'Normal Legend'
            }
        }
    } );

} )( jQuery );