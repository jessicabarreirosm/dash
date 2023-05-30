/* chart de barra*/
const ctx = document.getElementById('chartBar');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Valor da Perda',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            data: [400, 350, 300, 320, 390, 410],
            borderWidth: 1
        }, {
            label: 'Valor Total',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            data: [4000, 3500, 3000, 3200, 3900, 4100],
            borderWidth: 1,
        }]
    },

    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Comparativo dos valores em Reais',
                color: '#ff7782',
                font: {
                    size: 16,
                    weight: 'bold',
                    family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    color: '#fff'
                }
            }, legend: {
                labels: {
                    display: true,
                    color: '#36a2eb',
                    font: {
                        size: 14,
                        weight: 'bold',
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    }
                }
            },ticks: {
                    color: '#ff7782'
                }
        }
    }
});



/*chart de linhas */

const data = {
    labels: [],
    datasets: [{
        axis: 'y',
        label: 'Temperatura',
        data: [],
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1

    }, {
        axis: 'y',
        label: 'Umidade',
        data: [],
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1

    }]
}

const config = {
    type: 'line',
    data: data,
    options: {

        plugins: {
            title: {
                display: true,
                text: 'Média de temperatura e umidade dos veículos',
                color: '#ff7782',
                font: {
                    size: 16,
                    weight: 'bold',
                    family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                },
            }, legend: {
                labels: {
                    display: true,
                    color: '#36a2eb',
                    font: {
                        size: 14,
                        weight: 'bold',
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    }
                }
            },
        }
    }
};

const myChart = new Chart(
    document.getElementById('chartLine'),
    config
);


/* charts donnut */

const dataDonnut = {
    labels: [
        'Mantidos',
        'Perda',
        
    ],
    datasets: [{
        label: 'Total de tomates',
        data: [300, 50],
        backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)'
            
        ],
        hoverOffset: 4
    }]
};
const configDonnut = {
    type: 'doughnut',
    data: dataDonnut,
    options: {

        plugins: {
            title: {
                display: true,
                text: 'Perda de tomates durante o transporte',
                color: '#ff7782',
                font: {
                    size: 16,
                    weight: 'bold',
                    family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                },
            }, legend: {
                labels: {
                    display: true,
                    color: '#36a2eb',
                    font: {
                        size: 14,
                        weight: 'bold',
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    }
                }
            },
        }
    }
};

const myChartDonnut = new Chart(
    document.getElementById('chartDonnut'),
    configDonnut
);