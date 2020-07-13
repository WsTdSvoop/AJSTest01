/**==========================================================================
    Get information from https://blockchain.info/ticker
   ==========================================================================**/
let urlInfo = "https://blockchain.info/ticker";
let getInfo = new XMLHttpRequest();
getInfo.open('GET', urlInfo);
getInfo.responseType = 'text';



getInfo.onload = function() {
	var datainfo = JSON.parse(getInfo.response);
	for( let bitcoininfo in datainfo ) {
		if(bitcoininfo == "EUR") {
			value = datainfo[bitcoininfo];
			for(let i in value) {
				if(i == "sell") {
					sellEUR.textContent = "Verkaufspreis: " + value[i] + " €";
        		}
        		if(i == "buy") {
          			buyEUR.textContent = "Einkaufspreis: " + value[i] + " €";
        		}
      		}
    	}
		if(bitcoininfo == "USD") {
			value = datainfo[bitcoininfo];
			for(let i in value) {
				if(i == "sell") {
					sellUSD.textContent = "Verkaufspreis: " + value[i] + " $";
        		}
        		if(i == "buy") {
          			buyUSD.textContent = "Einkaufspreis: " + value[i] + " $";
        		}
      		}
    	}
		if(bitcoininfo == "AUD") {
			value = datainfo[bitcoininfo];
			for(let i in value) {
				if(i == "sell") {
					sellAUD.textContent = "Verkaufspreis: " + value[i] + " A$";
        		}
        		if(i == "buy") {
          			buyAUD.textContent = "Einkaufspreis: " + value[i] + " A$";
        		}
      		}
    	}
		if(bitcoininfo == "NZD") {
			value = datainfo[bitcoininfo];
			for(let i in value) {
				if(i == "sell") {
					sellNZD.textContent = "Verkaufspreis: " + value[i] + " NZ$";
        		}
        		if(i == "buy") {
          			buyNZD.textContent = "Einkaufspreis: " + value[i] + " NZ$";
        		}
      		}
    	}
		if(bitcoininfo == "GBP") {
			value = datainfo[bitcoininfo];
			for(let i in value) {
				if(i == "sell") {
					sellGBP.textContent = "Verkaufspreis: " + value[i] + " £";
        		}
        		if(i == "buy") {
          			buyGBP.textContent = "Einkaufspreis: " + value[i] + " £";
        		}
      		}
    	}
	}
};
getInfo.send();
