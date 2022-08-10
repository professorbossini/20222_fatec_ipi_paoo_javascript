// //mais antigo: function
// //mais moderno: arrow functions

// function hello (){
//   console.log('Oi')
// }
// hello(1)

// function hello (nome){
//   console.log (`Oi, ` + nome)
// }
// hello('Pedro')





// const nome = "Comecei uma string e preciso de aspas simples: '''''''''"
// const n = '""""""\"ana'

// //métodos de vetores
// const nomes = ['Ana Maria', "Antonio", "Rodrigo", "Alex", "Cristina"]
// //filter
// const apenasComA = nomes.filter((n) => {return n.startsWith("A")})
// console.log(apenasComA)

// //vetor que contenha a primeira letra de cada nome
// const primeirasLetras = nomes.map((nome) => {return nome.charAt(0)})
// console.log(primeirasLetras)

// const todosComecamComA = nomes.every((nome) => {return nome.startsWith('A')})

// console.log(todosComecamComA)

// const valores = [1, 2, 3, 4]
// //reduce
// const soma = valores.reduce((ac, v) => {return ac + v})
// console.log(soma)




// v2 = [2, 'abc', true, [1, 2, 3]]
// // console.log(v2)
// for (let i = 0; i < v2.length; i++){
//   console.log(v2[i])
// }
// //declaração
// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log(v1.length)
// v1[10] = 2
// console.log(v1.length)





// console.log(1 == 1)
// console.log (1 == '1')
// console.log (1 === 1)
// console.log (1 === '1')
// console.log (true == 1)
// console.log(1 == [1])
// console.log (null == null)
// console.log (null == undefined)
// console.log([] == false)
// console.log([] == [])

//===: compara por tipo e depois por valor. Se os tipos forem diferentes, ele já resulta em false. Caso contrário, compara os valores.
// ==:  compara por valor. Se os tipos forem diferentes, faz coerção implícita.
// por que não usar ==?
// const n1 = 2 '2'
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)
// console.log (n1 + Number(n2))

// var idade = 18
// console.log(`Olá, ${nome}`)
// //hoist
// //içamento
// if (idade >= 18){
//   let nome = 'Maria'
//   console.log (`Parabéns, ${nome}. Você já pode dirigir`)
// }
// console.log(`Até mais, ${nome}`)



// let linguagem = "Javascript"
// console.log("Aprendendo " + linguagem)
// let linguagem = "Java"
// console.log("Aprendendo " + linguagem)

// int a = 2;
// int a = 3;

// //ECMAScript 6
// var assimTambem = "var também serve"
// assimTambem = "outra"
// assimTambem = false

// let a = 1
// let b = false
// let c = "oi"
// a = 2
// //var, let, const
// // //String s = 1
// // s.substring(2, 5);0
// const nome = 'José'
// // nome = "João"
// nome = 123
// nome = true
// const outroNome = "Maria"
// const aindaOutroNome = `Pedro`


//esse é um comentário em Javascript (de uma única linha)
/*
Esse é um comentário
de múltiplas linhas
*/ 