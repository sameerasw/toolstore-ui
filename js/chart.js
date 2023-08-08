const ctx = document.getElementById("chart").getContext('2d');
const myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: ["January", " ", "February", " ", "April", " ", "May"],
    datasets: [{
    label: 'Last 90 days',
    backgroundColor: 'rgba(161, 198, 247, 0)',
    borderColor: 'rgb(47, 128, 237)',
    data: [300, 400, 200, 500, 800, 850, 800],
    }]
},
options: {
    scales: {
    yAxes: [{
        ticks: {
        beginAtZero: true,
        }
    }]
    }
},
});