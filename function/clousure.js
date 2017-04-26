var helloWorld = function (argument) {
	var message = "ola mundo";
	return function(){
		return message;
	};
};


var fnHelloWorld = helloWorld();
console.log(helloWorld);
console.log(fnHelloWorld());
