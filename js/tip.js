(function(){

var app = angular.module("Calculator",[ ]); <!--module-->

app.controller('SloganController',function( ){  


var x = Math.floor((Math.random() * 12) + 1);

if(x == 1){x = quotes.one;}
if(x == 2){x = quotes.two;}
if(x == 3){x = quotes.three;}
if(x == 4){x = quotes.four;}
if(x == 5){x = quotes.five;}
if(x == 6){x = quotes.six;}
if(x == 7){x = quotes.seven;}
if(x == 8){x = quotes.eight;}
if(x == 9){x = quotes.nine;}
if(x == 10){x = quotes.ten;}
if(x == 11){x = quotes.eleven;}
if(x == 12){x = quotes.twelve;}

this.phrase = x; 
 
});

var quotes = { 

	one : "So you won't have to think during dinner." ,
	two : "The trick is to stop thinking of it as \'your\' money." ,
	three : "It\'s easy to meet expenses, everywhere we go, there they are.",
	four : "I can hear your wallet crying.",
	five : "Brace yourself! The check is coming. ",
	six : "At least your wallet is losing weight.",
	seven : "Money, if it does not bring you happiness, will at least help you be miserable in comfort." ,
	eight : "A bank is a place that will lend you money if you can prove that you don\'t need it." ,
	nine : "Always live within your income, even if you have to borrow money to do so.",
	ten : "Budget: a mathematical confirmation of your suspicions.",
	eleven : "If all the economists were laid end to end, they\'d never reach a conclusion. ",
	twelve : "Carpe per diem, seize the check.",

};

})();






