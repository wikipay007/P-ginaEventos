// Gráfico de Pizza
const ctxPie = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow'], // Labels do gráfico
        datasets: [{
            label: 'Gráfico de Pizza',
            data: [300, 50, 100], // Valores do gráfico
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Cor 1
                'rgba(54, 162, 235, 0.2)', // Cor 2
                'rgba(255, 206, 86, 0.2)' // Cor 3
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)', // Cor da borda 1
                'rgba(54, 162, 235, 1)', // Cor da borda 2
                'rgba(255, 206, 86, 1)' // Cor da borda 3
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});

// Gráfico de Barras
const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow'], // Labels do gráfico
        datasets: [{
            label: 'Gráfico de Barras',
            data: [12, 19, 3], // Valores do gráfico
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Cor 1
                'rgba(54, 162, 235, 0.2)', // Cor 2
                'rgba(255, 206, 86, 0.2)' // Cor 3
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)', // Cor da borda 1
                'rgba(54, 162, 235, 1)', // Cor da borda 2
                'rgba(255, 206, 86, 1)' // Cor da borda 3
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});

// Gráfico de Linhas
const ctxLine = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // Labels do gráfico
        datasets: [{
            label: 'Gráfico de Linhas',
            data: [65, 59, 80, 81, 56, 55, 40], // Valores do gráfico
            fill: false,
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo da linha
            borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});
