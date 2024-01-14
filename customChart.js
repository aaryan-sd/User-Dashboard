// Generate sample data
var data = [];
var startingAge = 20;
var ageIncrement = 2.5;
var startingSalary = 80;
var salaryIncrement = 5;

for (var age = startingAge; age <= 65; age += ageIncrement) {
  data.push({
    x: age,
    y: startingSalary + (age - startingAge) * salaryIncrement
  });
}

// Create the Chart.js bar chart
var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.map(point => point.x),
    datasets: [{
      label: 'Salary',
      data: data.map(point => point.y),
      backgroundColor: 'steelblue',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      x: {
        min: 20,
        max: 65,
        ticks:{
          stepSize: 2.5,
          callback: function(value, index, values) {
            // Show label only for even indices
            return index % 2 === 0 ? value : '';
          }
        },
        type: 'linear',
        position: 'bottom',
        
      },
      y: {
        min: 0,
        max: 300,
        ticks: {
          stepSize: 100
        },
        
      }
    }
  }
});

// Function to create linear gradient
function createGradient(ctx, baseColor, alpha) {
  var gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
  gradient.addColorStop(0, baseColor);
  gradient.addColorStop(0.5, adjustAlpha(baseColor, alpha));
  gradient.addColorStop(1, adjustAlpha(baseColor, 1 - alpha));
  return gradient;
}

// Function to adjust alpha of a color
function adjustAlpha(color, alpha) {
  var r = parseInt(color.slice(1, 3), 16);
  var g = parseInt(color.slice(3, 5), 16);
  var b = parseInt(color.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}