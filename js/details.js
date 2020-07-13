/**==========================================================================
    Get information from https://api.blockchain.info/stats
   ==========================================================================**/
let urlStats = "https://api.blockchain.info/stats";
let getStats = new XMLHttpRequest();
getStats.open('GET', urlStats);
getStats.responseType = 'text';

getStats.onload = function() {
  var dataStats = JSON.parse(getStats.response);
  for( let key in dataStats ){
    if(key == "totalbc"){
      totalbcStats.textContent = dataStats[key];
    }
	if(key == "difficulty"){
      getdifficultyStats.textContent = dataStats[key];
    }
  }
}
getStats.send();


/**==========================================================================
    Get information from https://blockchain.info/q/marketcap
   ==========================================================================**/
let urlMarketcap = "https://api.blockchain.info/q/marketcap";
let getMarketcap = new XMLHttpRequest();
getMarketcap.open('GET', urlMarketcap);
getMarketcap.responseType = 'text';

getMarketcap.onload = function() {
     marketcapStats.textContent = getMarketcap.response;
}
getMarketcap.send();

/**==========================================================================
    Get information from https://blockchain.info/q/hashrate
   ==========================================================================**/
let urlHashrate = "https://api.blockchain.info/q/hashrate";
let getHashrate = new XMLHttpRequest();
getHashrate.open('GET', urlHashrate);
getHashrate.responseType = 'text';

getHashrate.onload = function() {
     hashrateStats.textContent = getHashrate.response;
}
getHashrate.send();

/**==========================================================================
    Get information from https://blockchain.info/q/24hrtransactioncount
   ==========================================================================**/
let urlTransaction = "https://api.blockchain.info/q/24hrtransactioncount";
let getTransaction = new XMLHttpRequest();
getTransaction.open('GET', urlTransaction);
getTransaction.responseType = 'text';

getTransaction.onload = function() {
     daytransactioncountStats.textContent = getTransaction.response;
}
getTransaction.send();

/**==========================================================================
    Get information from https://blockchain.info/q/24hrbtcsent
   ==========================================================================**/
let urlBitcoinsent = "https://api.blockchain.info/q/24hrbtcsent";
let getBitcoinsent = new XMLHttpRequest();
getBitcoinsent.open('GET', urlBitcoinsent);
getBitcoinsent.responseType = 'text';

getBitcoinsent.onload = function() {
     daybtcsentStats.textContent = getBitcoinsent.response;
}
getBitcoinsent.send();
