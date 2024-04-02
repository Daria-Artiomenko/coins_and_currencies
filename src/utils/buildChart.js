import { Chart } from "chart.js/auto";

const buildChart = (datas) => {
    document.getElementById('myChart').remove();
    const newChart = document.createElement('canvas');
    newChart.id = 'myChart';
    document.querySelector("#history-chart").append(newChart);
    
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: datas.dates,
            datasets:[{
                label:'Rate Open',
                borderColor: 'rgba(236, 112, 99, 0.9)',
                data: datas.rate_open
            },
        ]
        }
    })
}
export default buildChart;