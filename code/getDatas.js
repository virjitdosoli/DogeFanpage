/*Author: Martin*/

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
    "blockTime": "10 minutes",
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
            The first commercial transaction of bicoin was in 2010 when programmer Laszlo Hanyecz bought two pizzas for 10 000 BTC, these pizzas are now worth over $340 million each.
          </li>
        </ul>`
      }
    ],
    "footerContent": "<a href=\"https://bitcoin.org/en/download\">Bitcoin Core Download</a> - <a href=\"https://www.coinbase.com/price/bitcoin\">Bitcoin price</a>"
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
    "blockTime": "13-14 seconds",
    "paragraphs": [
      {
        "title": "Ethereum",
        "text": "Ethereum is a decentralized open source blockchain, distributed through ethereum.org. The Ethereum Blockchain uses Ether as its native currency but supports many other currencies."
      },
      {
        "title": "The Ethereum Blockchain",
        "text": "The Ethereum blockchain works very simular to the <a href=\"?cur=btc\">bitcoin</a> blockchain, except for some specific things including the block time and block size. The block time of a block chain determines the average amout of time it takes for a hash to be generated for a block. The block size is simply the maximum amount of data that can be stored in a block. Since the block times of the ethereum blockchain are much smaller, and the block size is much larger than that of bitcoin, it can be used to transfer much more data, much faster, therefore requiring smaller fees to the miner. This meant the ethereum block chain has been used for than just the transfer of ether, it has been used for videogames, transfer of other cryptocurrencies, and even used to publish ATAR results."
      },
      {
        "title": "Ethereum 2",
        "text": `Although it isn't available yet, <a href=\"https://ethereum.org/en/\">ethereum.org</a> claims eth2 has many improvements over Ethereum 1. This includes:
        <ul>
          <li>Better scalability: Through faster block times</li>
          <li>Better security: Through protocol changes, and usage of different, better algorithms</li>
          <li>Better sustainability: Through protocol changes, which rather than using a proof of work system (as described in the <a href=\"?cur=btc\">bitcoin blockchain section</a>), using a proof of stake system</li>
        </ul>`
      },
      {
        "title": "Proof of Stake Blockchain",
        "text": `A proof of stake blockchain uses all coin holders stake (value and age of an account) to determine who should verify the next block. This uses substantially less computing power than a proof of work system. There are multiple benifits and drawbacks of using a proof of stake system.<br>
        <h3>Advantages of proof of work include:</h3>
        <ul>
          <li>Harder to fake blocks</li>
          <li>Harder to agree with multiple chains simultaneously</li>
          <li>More secure currently</li>
        </ul>
        <h3>Advantages of proof of stake include:</h3>
        <ul>
          <li>Uses substantially less computing power</li>
          <li>Prioritises more trustworthy (richer) accounts</li>
          <li>Theorised to be more secure if developed correctly</li>
        </ul>`
      }
    ],
    "footerContent": "<a href=\"https://ethereum.org/en/\">ethereum.org</a> - <a href=\"https://www.coinbase.com/price/ethereum\">Ether price</a>"
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
    "blockTime": "N/A",
    "paragraphs": [
      {
        "title": "Ripple",
        "text": "Ripple, like <a href=\"?cur=eth\">Ethereum</a> is a peice of software designed to acheive much more than what bitcoin saught to. <a href=\"https://ripple.com/\">ripple.com</a> states that RippleNet (the protocol developed by ripple) has the ability to send payments in 3 seconds, and send messages with a 0% failure rate. It has connections to hundreds of financial institutions around the world. A company named Santander has processed 450 million worth of transactions. It takes around 22 seconds to transfer money into Thailand using the ripplenet network. Ripple is secured by a network of validating servers run by a private company. There are around 100 Ripple coins in existance, with 45 billion in circulation. It may be less secure than bitcoin, processes transactions quicker. Ripple uses a Ledger Consensus Protocol, where validators, not miners, maintain the transaction ledger and keep a record of the transaction. There have been lawsuits in the US against XRP, and Coinbase has suspended all XRP trading partners."
      },
      {
        "title": "The Ripple Ledger",
        "text": "The XRP Ledger acording to <a href=\"https://xrpl.org\">XRPL.org</a> is simmular to other blockchain technologies, and intended to settle payments in 3-5 seconds. Like many other blockchains its decentralised and opensource."
      },
      {
        "title": "XRPL uses",
        "text": `<a href=\"https://xrpl.org\">XRPL.org</a> describes multiple uses in personal and bussiness applications of Ripple, this includes;
        <ul>
          <li>Cross border transactions: sending money into, and out of various countries without anything but an internet connection
          </li><li>Microtransactions: sending money to a company to pay for add free websites, games, or in game items
          </li><li>Wallets: to store passwords and cryptocurrency in a phone
          </li><li>Exchangs: to make cross border payments easier, by exchanging to and from XRP 
          </li>
        </ul>`
      }
    ],
    "footerContent": "<a href=\"https://ripple.com/\">ripple.com</a> - <a href=\"https://www.coinbase.com/price/xrp\">XRP Price</a>"
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
    "blockTime": "1 minute",
    "paragraphs": [
      {
        "title": "Dogecoin",
        "text": "Dogecoin is an open source currency which allows you to send and recieve dogecoins. Its purpose is for the user to be able to send a recieve money from anywhere, anonymously, and without any middleman or extra fees. Dogecoin is considered an alt coin and sometimes referred to as a meme. Dogecoin has sponsored the Jamacian bobsled team, with its users raising over $25000 in doge to fund their winter olympics campaign. It features a Shiba Inu for its logo and is considered an internet meme. In late 2020, the meme fueled reddit stock trading rally saw dogecoin as topic of great discussion. This lead to many people buying doge, with celebrities hopping onto the show. Celebrities such as Elon Musk and Mark Cuban were creating hype about Dogecoin. This movement gained traction and Dogecoin's market cap at the time of writing is at 84.4 billion. "
      },
      {
        "title": "Mining Doge",
        "text": "Dogecoin differs from the proof-of-work protocol used by bitcoin in many ways. The altcoin has a block time of one minute, and there is no limit to the amount of dogecoin which can be mined. Doge can be mined by a single person, or you can pool. Doge mining is supported on Windows, Mac or Linux.  "
      }
    ],
    "footerContent": "<a href=\https://www.coinbase.com/price/dogecoin\">Dogecoin</a>"
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
  document.getElementsByClassName("rightCol")[7].innerHTML = data[cur].blockTime;
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
  var bodyRect = document.body.getBoundingClientRect(),
    elemRect = document.getElementsByTagName("footer")[0].getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;

  var h = window.innerHeight;
  if(offset < h){
    document.getElementsByTagName("footer")[0].style.position = "absolute";
  }else{
    document.getElementsByTagName("footer")[0].style.position = "relative";
  }
  /*var links = document.getElementsByTagName("link");
  for (var cl in links)
  {
    var link = links[cl];
    if (link.rel === "stylesheet")
      link.href += "";
  }*/
})

window.onresize = function(){
  document.getElementsByTagName("footer")[0].style.position = "absolute";

  var bodyRect = document.getElementsByClassName("mainBody")[0].getBoundingClientRect(),
    elemRect = document.getElementsByTagName("footer")[0].getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.bottom;

  console.log("resized, offset = " + offset);

  if(offset > 0){
    document.getElementsByTagName("footer")[0].style.position = "absolute";
  }else{
    document.getElementsByTagName("footer")[0].style.position = "relative";
  }

  var footer = document.getElementsByTagName("footer")[0];
  if (footer.rel === "stylesheet")
    footer.href += "";
}
