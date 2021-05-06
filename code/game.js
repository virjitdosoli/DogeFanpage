var xValues = [];
var rikcValues = [];
var frogValues = [];
var fishValues = [];

var notices = [];

var bank = 69;
var rikc = 0;
var frog = 0;
var fish = 0;

var quant = 1;

var offset = 1.05;

for (var a = 59; a >= 0; a--) {
  xValues.push(a);
  rikcValues.push(0);
  frogValues.push(0);
  fishValues.push(0);
}

var chart = new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(255,0,0,1)",
      borderColor: "rgba(255,0,0,0.6)",
      data: rikcValues
    },
    {
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,255,0,1)",
      borderColor: "rgba(0,255,0,0.6)",
      data: frogValues
    },
    {
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1)",
      borderColor: "rgba(0,0,255,0.6)",
      data: fishValues
    }
  ]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [
        {
          /*ticks: {min: 0, max:20},*/
          scaleLabel: {
            labelString: "Price of Cryptos",
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
var rickVal = 0;
var frogVal = 0;
var fishVal = 0;

var updateData = window.setInterval(function(){
  t++;
  rickVal = Math.round((
    (8 + t/8)/(simplex.noise2D(0, t/50) + 1) +
    (2 + t/8)/(simplex.noise2D(8, t/25) + 1) +
    (0.6 + t/8)/(simplex.noise2D(16, t/5) + 1) -
    (4 + 1 + 0.3 + 3*t/16))
    *100)/100;

  frogVal = Math.round((
    (8 + t/8)/(simplex.noise2D(32, t/80) + 1) +
    (2 + t/8)/(simplex.noise2D(8, t/25) + 1) +
    (0.6 + t/8)/(simplex.noise2D(49, t/5) + 1) -
    (4 + 1 + 0.3 + 3*t/16))
    *100)/100;

  fishVal = Math.round((
    (8 + t/8)/(simplex.noise2D(48, t/30) + 1) +
    (2 + t/8)/(simplex.noise2D(8, t/25) + 1) +
    (0.6 + t/8)/(simplex.noise2D(56, t/5) + 1) -
    (4 + 1 + 0.3 + 3*t/16))
    *100)/100;

  chart.data.datasets[0].data.shift();
  chart.data.datasets[1].data.shift();
  chart.data.datasets[2].data.shift();

  chart.data.datasets[0].data.push(rickVal);
  chart.data.datasets[1].data.push(frogVal);
  chart.data.datasets[2].data.push(fishVal);

  chart.update();
  updateText()

  if(bank + rickVal*rikc + frog*frogVal + fish*fishVal < 20){
    console.log("broke");
    var sold = false;
    if(rickVal*rikc < 0){
      buy('rikc', true);
      sold = true;
    }

    if(frog*frogVal < 0){
      buy('frog', true);
      sold = true;
    }

    if(fish*fishVal < 0){
      buy('fish', true);
      sold = true;
    }
    if(sold == true){
      flashNoticeBox("autBuy");
    }else{
      document.getElementById("info").innerText = " (You are very broke, and have lost)";
      document.getElementById("info").style.animation = "flashInfo 1200ms infinite"
    }
  }
}, 1000);

function sell(coin){
  console.log("selling");
  if(coin == 'rick'){
    rikc -= quant;
    bank += rickVal*quant/offset;
  }

  if(coin == 'frog'){
    frog -= quant;
    bank += frogVal*quant/offset;
  }

  if(coin == 'fish'){
    fish -= quant;
    bank += fishVal*quant/offset;
  }
  updateText()
}

function buy(coin, force=false){
  if((bank > rickVal*quant || force) && coin == 'rick'){
    rikc += quant;
    bank -= rickVal*quant*offset;
  }else

  if((bank > fishVal*quant || force) && coin == 'fish'){
    fish += quant;
    bank -= fishVal*quant*offset;
  }else

  if((bank > frogVal*quant || force) && coin == 'frog'){
    frog += quant;
    bank -= frogVal*quant*offset;
  }
  else{
    notices.unshift("Insufficient funds");
    flashNoticeBox("funds");
  }
  updateText();
}

function updateText(){
  document.getElementById("bank").innerText = bank.toFixed(2);
  document.getElementById("tot").innerText = (bank + rickVal*rikc + frog*frogVal + fish*fishVal).toFixed(2);

  document.getElementById("dolrikc").innerText = (rickVal*rikc).toFixed(2);
  document.getElementById("rikc").innerText = rikc;
  document.getElementById("rikcV").innerText = rickVal.toFixed(2);

  document.getElementById("dolfrog").innerText = (frogVal*frog).toFixed(2);
  document.getElementById("frog").innerText = frog;
  document.getElementById("frogV").innerText = frogVal.toFixed(2);

  document.getElementById("dolfish").innerText = (fishVal*fish).toFixed(2);
  document.getElementById("fish").innerText = fish;
  document.getElementById("fishV").innerText = fishVal.toFixed(2);
}

function flashNoticeBox(id) {
  document.getElementById(id).style.animation = "flashNoticeBox 800ms";
  setTimeout(function() {
    document.getElementById(id).style.animation = "";
  }, 500);
}

function changeQuant(inc){
  if(inc){
    quant *= 2;
  }else if(quant != 1){
    quant = Math.round(quant/2)
  }
  document.getElementById("quant").innerHTML = quant;
}
