const ctx = document.getElementById("chart").getContext('2d');
const myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: ["January", " ", "February", " ", "April", " ", "May"],
    datasets: [{
    label: 'Sales',
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

const chrt2 = document.getElementById("chart2").getContext('2d');
      const myChart2 = new Chart(chrt2, {
        type: 'doughnut',
        data: {
          labels: ["Active", "Off market (339)"],
          datasets: [{
            label: 'Orders',
            data: [5284,339],
            backgroundColor: ["#3870ff", "#22ff88"]
          }]
        },
      });

const ctx2 = document.getElementById("chart3").getContext('2d');
const myChart3 = new Chart(ctx2, {
type: 'line',
data: {
    labels: ["Jan", " ", "Feb", " ", "Apr", " ", "May"],
    datasets: [{
    label: 'Demand',
    backgroundColor: 'rgba(161, 198, 247, 0)',
    borderColor: 'rgb(22,255,55)',
    data: [20, 100, 200, 500, 650, 700, 1200],
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
