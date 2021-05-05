var xValues = [];
var yValues = [];
var bank = 69;
var rikc = 0;
for (var a = 59; a >= 0; a--) {
  xValues.push(a);
  yValues.push(0);
}

var chart = new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1)",
      borderColor: "rgba(0,0,255,1)",
      borderColor: "rgb(12, 26, 64)",
      titleFontColor: "rgb(250, 250, 210)",
      bodyFontColor: "rgb(250, 250, 210)",
      footerFontColor: "rgb(250, 250, 210)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [
        {
          /*ticks: {min: 0, max:20},*/
          scaleLabel: {
            labelString: "RickCoin Price",
            display: true
          }
        }
      ],
      xAxes: [
        {
          scaleLabel: {
            labelString: "Seconds Ago",
            display: true
          }
        }
      ]
    },
    maintainAspectRatio: false
  }
});

var i = 0;
var simplex = new SimplexNoise();
var t = 0;
var val = 0;

var updateData = window.setInterval(function(){
  t++;
  val = Math.round(((8 + t/8)/(simplex.noise2D(0, t/50) + 1) + (2 + t/8)/(simplex.noise2D(8, t/25) + 1) + (0.6 + t/8)/(simplex.noise2D(8, t/5) + 1) - (2 + 1 + 0.3 + 3*t/16))*100)/100;
  chart.data.datasets[0].data.shift();
  chart.data.datasets[0].data.push(val);
  chart.update();

  document.getElementById("bank").innerText = bank.toFixed(2);
  document.getElementById("tot").innerText = (bank + val*rikc).toFixed(2);
  document.getElementById("dolrikc").innerText = (val*rikc).toFixed(2);
  document.getElementById("rikc").innerText = rikc;
  document.getElementById("rikcV").innerText = val;

}, 1000);

function sell(){
  rikc--;
  bank += val;
}

function buy(){
  if(bank > val){
    rikc++;
    bank -= val;
  }else{
    document.getElementById("info").innerText = "Insufficient funds";
  }
}
