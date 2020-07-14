
/**==========================================================================
    Get information from https://blockchain.info/ticker
   ==========================================================================**/
let urlInfo = "https://blockchain.info/ticker";
let getInfo = new XMLHttpRequest();
getInfo.open('GET', urlInfo);
getInfo.responseType = 'text';

var tempWert = false;
 var derp = getInfo.onload = function() {
	var datainfo = JSON.parse(getInfo.response);
	for( let bitcoininfo in datainfo ) {
		if(bitcoininfo == "EUR") {
			value = datainfo[bitcoininfo];
			for(let i in value) {
				if(i == "buy") {
					rechenzahl.textContent = value[i];
					tempWert = value[i];
					console.log(tempWert);
				}
			}
		}
	}
};

getInfo.send();

/**==========================================================================
    Get information from https://api.blockchain.info/stats
   ==========================================================================**/
var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope, Calculator) {
   $scope.values = {
       first: 0,
       second: 5
   };
   $scope.sign = '*';
   $scope.result = 0;

   $scope.doCalculations = function(sign, a, b){
	   $scope.result = Calculator.multiply(a, b);

   };
});

app.service('Calculator', function(){

   this.add = function(a, b){
       return a + b;
   };

   this.subtract = function(a, b){
       return a - b;
   };

   this.multiply = function(a, b){
       return a * b;
   };

   this.divide = function(a, b){
       return a / b;
   };

});

/*var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope, Calculator) {
   $scope.values = {
       first: 0,
       second: 0
   };
   $scope.sign = '+';
   $scope.result = 0;

   $scope.doCalculations = function(sign, a, b){
       switch(sign){
           case '+': $scope.result = Calculator.add(a, b); break;
           case '-': $scope.result = Calculator.subtract(a, b); break;
           case '*': $scope.result = Calculator.multiply(a, b); break;
           case '/': $scope.result = Calculator.divide(a, b); break;
       }
   };

});

app.service('Calculator', function(){

   this.add = function(a, b){
       return a + b;
   };

   this.subtract = function(a, b){
       return a - b;
   };

   this.multiply = function(a, b){
       return a * b;
   };

   this.divide = function(a, b){
       return a / b;
   };

});*/
