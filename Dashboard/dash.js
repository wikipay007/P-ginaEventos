// Configurações do Gráfico de Rosquinha 1
const ctx1 = document.getElementById('donutChart1').getContext('2d');
const donutChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Concluído', 'Pendente'],
        datasets: [{
            label: 'Status',
            data: [60, 40],
            backgroundColor: ['#04E762', '#8ee4b2'], // Cores das fatias
            borderColor: '#FFFFFF', // Cor da borda
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true, position: 'left' }, // Exibe a legenda à esquerda
            tooltip: { enabled: true }, // Ativa o tooltip
            title: {
                display: true,
                text: 'Progresso do Evento' // Título do Gráfico de Rosquinha 1
            }
        }
    }
});

// Configurações do Gráfico de Rosquinha 2
const ctx2 = document.getElementById('donutChart2').getContext('2d');
const donutChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Confirmados', 'Faltantes'],
        datasets: [{
            label: 'Presença',
            data: [75, 25],
            backgroundColor: ['#04E762', '#8ee4b2'], // Cores das fatias
            borderColor: '#FFFFFF', // Cor da borda
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true, position: 'left' }, // Exibe a legenda à esquerda
            tooltip: { enabled: true }, // Ativa o tooltip
            title: {
                display: true,
                text: 'Status de Presença' // Título do Gráfico de Rosquinha 2
            }
        }
    }
});

// Configurações do Gráfico de Barras
const ctx3 = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'], // Meses ou qualquer categoria desejada
        datasets: [{
            label: 'Gastos por Período',
            data: [120, 90, 150, 110], // Dados para cada categoria
            backgroundColor: '#04E762', // Cor das barras
            borderColor: '#FFFFFF', // Cor da borda das barras
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true, position: 'top' }, // Posição da legenda
            tooltip: { enabled: true }, // Ativa o tooltip
            title: {
                display: true,
                text: 'Gastos Mensais' // Título do Gráfico de Barras
            }
        },
        scales: {
            y: { beginAtZero: true } // Inicia o eixo Y no zero
        }
    }
});
