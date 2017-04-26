var counter = function () {
	var value = 0;
	var add =  function () {
		return ++this.value;
	};
};


// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.add());

// var itens = function(){
// 	var value = [];
// 	return {
// 		add: function (item) {
// 			this.value.push(item);
// 			return this.value;
// 		}
// 	}
// }