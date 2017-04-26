var CreateCounter = function () {
	var value = 0;

	return{
		add: function(){
			return ++value;
		}
	};
};
var counter = CreateCounter();