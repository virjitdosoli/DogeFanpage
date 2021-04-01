var data = {
  "btc": {
    "name": "Bitcoin",
    "software": "Bitcoin Core",
    "devs": "Satoshi Nakamoto",
    "release1": "9 January 2009",
    "release2": "15 January 2021",
    "language": "C++",
    "OS": "Windows, MacOS,<br>Linux",
    "architecture": "x86, Risc-V, ARM",
    "paragraphs": [
      {
        "title": "Bitcoin",
        "text": "Bitcoin was the first cryptocurrency, which was developed by an unknown person or group called Satoshi Nakamoto. Many people have claimed to be Satoshi with limited proof of these claims, while many others have stated that they are not Satoshi when people said that they are. Bitcoin's creation was based on information researched in the white paper written by Satoshi Nakamato, which is still available on <a href=\"https://bitcoin.org\">bitcoin.org</a> as a <a href=\"https://bitcoin.org/bitcoin.pdf\">pdf</a>. This pdf outlines the concept of a secure decentralised peer to peer currency system. This is achieved through a ledger system, which is described further in the Bitcoin Blockchain section of this page."
      },
      {
        "title": "The Bitcoin Blockchain",
        "text": "The Bitocin Blockchain is a distributed ledger of all past transactions. The blockchain consists of blocks of up to 1 megabyte in size. The transactions of these blocks contain a public key of the sender, the public key of the recipient, the amount of bitcoin being sent, a donation to the miner, and a digital signature fom the sender. Most components of a bitcoin transaction rely on the ECDSA (Elliptic curve digital signature algorithm), which uses a private key to create a public key. This private key can be used to generate a string from an input, which through another function with the input of the public key, the signature, and the content getting signed can be used to verify the validity of the signature. These public keys essentially act as account numbers. Another important algorithm in the bitcoin protocol is the hashing algorithm which irreversibly turns an input into an output.<br>An important part of the bitcoin blockchain is mining, which is the proccess of verifying blocks. This is done in multiple steps. First, the computer doing the mining selects transactions to include in the block, usually considering the value of the donation. Next, another value is added to the block, this value is determined through the repeated hashing of the block (including this value), when the hash is less than a particular value (given as a difficulty, as the smaller this number is the longer it takes to find a correct value), the final block can be submitted to the blockchain."
      },
      {
        "title": "History of Bitcoin",
        "text":
        `<ul>
          <li>
            The domain name \"bitcoin.org\" was registered on 18 August 2008.
          </li>
          <li>
            The bitcoin white paper was released on 31 October 2008.
          </li>
          <li>
            Bitcon core was released on 9 January 2009.
          </li>
          <li>
            The first commercial transaction of bicoin wa in 2010 when programmer Laszlo Hanyecz bought two pizzas for 10 000 BTC, now worth over $340 million each. 
          </li>
        </ul>`
      }
    ],
    "footerContent": "<a href=\"downloadpeg\">bitcoin core download</a>"
  },
  "eth": {
    "name": "Ether",
    "software": "Ethereum",
    "devs": "Vitalik Buterin,<br>Gavin Wood",
    "release1": "30 July 2015",
    "release2": "1 January 2020",
    "language": "Go, Rust, C#,<br>C++, Java, Python",
    "OS": "Cross-Platform",
    "architecture": "x86-64, ARM",
    "paragraphs": [
      {
        "title": "Ethereum",
        "text": "Ethereum is a decentralized open source blockchain which uses Ether as its native currency."
      },
      {
        "title": "The Ethereum Blockchain",
        "text": "The Ethereum blockchain consists of information about transactions collected in groups, which are known as blocks. Once one block is filled, it is connected to the previous block, which is called a chain."
      }
    ],
    "footerContent": "<a href=\"downloadpeg\">bitcoin core download</a>"
  },
  "xrp": {
    "name": "XRP (Ripple)",
    "software": "Ripple",
    "devs": "Arthur Britto,<br>David Schwartz,<br>Ryan Fugger",
    "release1": "2012",
    "release2": "15 May 2018",
    "language": "C++",
    "OS": "Windows, MacOS,<br>Linux",
    "architecture": "x86",
    "paragraphs": [
      {
        "title": "Ripple",
        "text": "An intro"
      },
      {
        "title": "XRP vs Ripple",
        "text": "An info"
      }
    ],
    "footerContent": "<a href=\"downloadpeg\">bitcoin core download</a>"
  },
  "doge": {
    "name": "Dogecoin",
    "software": "Dogecoin Core",
    "devs": "Billy Markus,<br>Jackson Palmer",
    "release1": "6 December 2013",
    "release2": "Continually Updated",
    "language": "C++, Python, C",
    "OS": "Windows, Linux, MacOS,<br>IOS, Android",
    "architecture": "x86, ARM",
    "paragraphs": [
      {
        "title": "Dogecoin",
        "text": "An intro"
      },
      {
        "title": "Late 2020",
        "text": "An info"
      }
    ],
    "footerContent": "<a href=\"downloadpeg\">bitcoin core download</a>"
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
if(!data.hasOwnProperty(cur)) window.location.replace("?cur=btc");

window.addEventListener('load', function () {
  document.getElementsByClassName("rightCol")[0].innerHTML = data[cur].software;
  document.getElementsByClassName("rightCol")[1].innerHTML = data[cur].devs;
  document.getElementsByClassName("rightCol")[2].innerHTML = data[cur].release1;
  document.getElementsByClassName("rightCol")[3].innerHTML = data[cur].release2;
  document.getElementsByClassName("rightCol")[4].innerHTML = data[cur].OS;
  document.getElementsByClassName("rightCol")[5].innerHTML = data[cur].language;
  document.getElementsByClassName("rightCol")[6].innerHTML = data[cur].architecture;
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
  document.getElementsByTagName("title")[0].innerHTML = data[cur].name + " - THE CRYPTOs";
  document.getElementsByTagName("body")[0].style.backgroundImage = "url(\"images/" + cur + ".png\")";
  document.getElementById("footer").innerHTML = data[cur].footerContent;
})
