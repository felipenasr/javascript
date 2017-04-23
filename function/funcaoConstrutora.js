var Pessoa = function (nome,idade) {
	this.nome = nome;
	this.idade = idade;
}
var pedro = {};
Pessoa.call(pedro, "Pedro", 20);

console.log(pedro);
