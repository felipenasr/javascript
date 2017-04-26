var Counter = function(){
	var value = 0;
	this.add = function (argument) {
		return ++value;
	};
};
var counter = new Counter();
console.log(counter.add());