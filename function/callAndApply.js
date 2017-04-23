//
//Toda funcao possui os metods call e apply
//elas sai utilizadas para indicar em qual escopo uma funcao deve ser utilizada 
// a difernca e a forma que ela é utliziada

var getIdade = function (extra) {
	console.log(arguments);
	return this.idade + extra;
}

var pessoa = {
	nome: 'João',
	idade: 20,
	getIdade: getIdade
};

console.log(pessoa.getIdade(2));

console.log(getIdade.call(pessoa, 2));

console.log(getIdade.apply(pessoa, [2]));




