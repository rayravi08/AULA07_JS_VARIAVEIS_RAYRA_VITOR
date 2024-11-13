//diferenças em Var , let e const

//Var
var nome = "Adamastor";
console.log(nome);

if (nome === "Adamastor") {
  var escola = "CESF";
  console.log(escola);
}
console.log(escola);

escola = "Sagrada";
console.log(escola);

//com variáveis do tipo var podemos acessar(visibilidade)
//fora do escopo de criação da variável

//LET
//o let não permite a redeclaração de variáveis, só permite o acesso a variável no escopo onde foi criado
//se reatribuirmos valor a ela é como se estivéssemos declarando uma nova variável
//do tipo var com o mesmo nome curso

if (nome === "Adamastor") {
  let curso = "DS";
  console.log(curso);
}
// console.log(curso);

curso = "Desenvolvimento";
console.log(curso);

//CONST
// Não pode ser redeclarado, nem reatribuído, nem rescrito,

const cargo = "Estudante";
console.log(cargo);
// cargo = "Programador";
console.log(cargo);

//variáveis do tipo const tem escopo de bloco, como as let, mas ela não permite reatribuição de valor

// CRIAÇÃO DE VARIÁVEIS SEM ATRIBUIÇÃO INICIAL

var aluno1;
aluno1 = "Ana Clara";
console.log(aluno1);

let aluno2;
aluno2 = "Daniel";
console.log(aluno2);

//Const aluno3;
//Declaração 'const' devem ser inicializadas com o valor

const aluno3 = "Cremilda";
console.log(aluno3);
