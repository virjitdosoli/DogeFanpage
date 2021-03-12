var data = {
  "btc":{
    "name": "Bitcoin",
    "devs": "Satoshi Nakamoto",
    "release1": "9 January 2009",
    "release2": "15 January 2021",
    "paragraphs":[
      {
        "title": "Bitcoin",
        "text": "An intro"
      },
      {
        "title": "The Bitcoin Blockchain",
        "text": "An info"
      }
    ]
  }
}
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var cur = getParameterByName("cur");
if(cur != null){
  window.addEventListener('load', function () {
    document.getElementsByClassName("rightCol")[0].innerHTML = data[cur].devs;
    document.getElementsByClassName("rightCol")[1].innerHTML = data[cur].release1;
    document.getElementsByClassName("rightCol")[2].innerHTML = data[cur].release2;
    var bodyHTML = "";
    for (var i = 0; i < data[cur].paragraphs.length; i++) {
      if(i == 0){
        bodyHTML += "<h1>" + data[cur].paragraphs[i].title + "</h1>";
      }else{
        bodyHTML += "<h2>" + data[cur].paragraphs[i].title + "</h2>";
      }
      bodyHTML += "<p>" + data[cur].paragraphs[i].text + "</p>";
    }
    document.getElementsByClassName("mainBody")[0].innerHTML = bodyHTML;

    document.getElementById("cryptoName").innerHTML = data[cur].name;
    document.getElementsByTagName("title").innerHTML = data[cur].name + " - THE CRYPTOs";
  })
}
