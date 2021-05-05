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

}, 1000);

function sell(coin){
  if(coin == 'rick'){
    rikc -= quant;
    bank += rickVal*quant;
  }

  if(coin == 'frog'){
    frog -= quant;
    bank += frogVal*quant;
  }

  if(coin == 'fish'){
    fish -= quant;
    bank += fishVal*quant;
  }
  updateText()
}

function buy(coin){
  if(bank > rickVal*quant && coin == 'rick'){
    rikc += quant;
    bank -= rickVal*quant;
  }else

  if(bank > fishVal*quant && coin == 'fish'){
    fish += quant;
    bank -= fishVal*quant;
  }else

  if(bank > frogVal*quant && coin == 'frog'){
    frog += quant;
    bank -= frogVal*quant;
  }
  else{
    notices.unshift("Insufficient funds");
    flashNoticeBox();
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

  var noticeSTR = "";

  for (var i = 0; i < notices.length; i++) {
    if(i == notices.length - 1){
      noticeSTR += "<p>" + notices[i] + "</p>";
    }else{
      noticeSTR += "<p>" + notices[i] + "</p><br>";
    }
  }
  document.getElementById("notices").innerHTML = noticeSTR;
}

function flashNoticeBox() {
  console.log("ran animation lol")
  document.getElementsByClassName("notices")[0].style.animation = "flashNoticeBox 300ms";
  setTimeout(function() {
    document.getElementsByClassName("notices")[0].style.animation = "";
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
