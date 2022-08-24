const fs = require ('fs')
const abrirArquivo = (nomeArquivo) => {
  //função callback
  const exibirConteudo = function (erro, conteudo){
    if (erro)
      console.log (`Erro: ${erro}`)
    else{
      const res = +conteudo.toString() * 2
      const finalizar = function (erro){
        if (erro)
          console.log(`Erro: ${erro}`)
        else
          console.log('Conteúdo armazenado com sucesso')
      }
      fs.writeFile('dobro.txt', res.toString(), finalizar)
    }
  }
  fs.readFile(nomeArquivo, exibirConteudo)
}
abrirArquivo('arquivo.txt')




// function demorada (tempo){
//   console.log (`demorada: ${tempo}`)
//   const atualMaisTempo = new Date().getTime() + tempo
//   while (new Date().getTime() <= atualMaisTempo);
//   const d = 8 + 4
//   return d
// }
// setTimeout(function(){demorada(2000)}, 2000)
// setTimeout(function(){demorada(1000)}, 1000)

// console.log('chegou ao fim do script principal')

// setTimeout (() => {
//   console.log('dentro da timeout')
// }, 0)

// const a = new Date().getTime() + 10000
// while ( new Date().getTime() <= a);
// console.log('fora da timeout')


// function demorada (){
//   const atualDeslocadaDe2Segundos = new Date().getTime() + 2000
//   while (new Date().getTime() <= atualDeslocadaDe2Segundos){}
//   const d = 8 + 4
//   return d
// }
// const a = 2 + 3
// const b = 7 + 9

// setTimeout(function(){
//   const d = demorada()
//   console.log(d)
// }, 500)

// const e = 2 + a + b
// console.log(e)

// const a = 2 + 3
// const b = 5 + 9
// const d = demorada()
// const e = 2 + a + b
// console.log(e)

// const a = 2 + 7
// const b = 5
// console.log(a + b)


// console.log('Eu primeiro')
// console.log('Agora eu')
// console.log('Sempre vou ser a última :(...')


// //uma calculadora que faz operações de soma e subtração envolvendo dois operandos
// let calculadora = {
//   soma: (a, b) => a + b,
//   subtracao: function (a, b){
//      return a - b
//   }
// }

// const res = calculadora.soma(2, 3)
// const outroRes = calculadora['subtracao'](5, 2)
// console.log(outroRes)



//3 Uma concessionária tem CNPJ e endereço. Ela possui
//um carro em estoque. Ele tem marca, modelo e ano de fabricação.
// let concessionaria = {
//   cnpj: '62.555.326/0001-27',
//   endereco: {
//     logradouro: 'Rua C',
//     numero: 500,
//     bairro: 'Vila J'
//   },
//   carros: [
//     {
//       marca: 'BMW',
//       modelo: "X1",
//       anoFabricacao: 2022
//     },
//     {
//       marca: 'Fiat',
//       modelo: 'Uno',
//       anoFabricacao: 1997
//     },
//     {
//       marca: 'Jeep',
//       modelo: 'Compass',
//       anoFabricacao: 2020
//     }
//   ]
// }

// //2 Uma pessoa que se chama Maria, tem 21 anos e mora na rua B,
// //número 121
// let maria = {
//   nome: "Maria",
//   idade: 21,
//   endereco: {
//     logradouro: 'Rua B',
//     numero: 121
//   }
// }

// console.log(`
//   ${maria.nome},
//   ${maria['idade']},
//   ${maria.endereco.logradouro},
//   ${maria['endereco']['numero']},
//   ${maria['endereco'].numero}
// `)
// Qual o seu nome?,Qual o seu e-mail?
// André,andre@email.com
// Jaqueline,jaqueline@email.com

// let exemplo = {
//  'Qual o seu nome?': 'André',
//  'Qual o seu e-mail?': 'andre@email.com' 
// }

// console.log(exemplo['Qual o seu nome?'])




// //uma pessoa que se chama João e que tem 17 anos
// let pessoa = {
//   nome: "João",
//   idade: 17
// }
// // console.log(pessoa)
// console.log("Meu nome é: " + pessoa.nome)
// console.log(`Meu nome é ${pessoa.nome}`)
// const nome = pessoa.nome
// console.log("Tenho " + pessoa[`idade`] + " anos")


// function saudacoesFactory(saudacao, nome){
//   return function(){
//     console.log (`${saudacao}, ${nome}`)
//   }
// }

// let ola = saudacoesFactory('Olá', 'Jaqueline')
// let ateLogo = saudacoesFactory('Até logo', 'Jaqueline')

// ola()
// ateLogo()


// function ola(){
//   let nome = 'Jaqueline'
//   return function(){
//     console.log(`Olá, ${nome}`)
//   }
// }

// let olaResult = ola()
// olaResult()

// function f (){
//   let nome = "Ana"
//   function g(){
//     console.log(nome)
//   }
//   g()
// }
// f()


// //função de alta ordem (higher order function)
// function f (funcao){
//   //callable
//   funcao()
// }
// //função de alta ordem (higher order function)
// function g(){
//   function outraFuncao(){
//     console.log("Fui criada por G")
//   }
//   return outraFuncao
// }
// f(g)()
// f(g())

// f(g)
// f(g())
// f(g()())
// const gResult = g()
// // console.log(gResult)
// gResult()
// g()()
// console.log(g()())
// g()()()



// let umaFuncao = function () {
//   console.log('Fui armazenada em uma variável')
// }
// umaFuncao()


// f(function(){console.log("Estou sendo passada para f")})

// class Teste{
//   void m1 (Method m){
//     m()
//   }

//   void m2(){

//   }

//   main(){
//     m1(m2)
//   }
// }

// const devolveUmValor = () => 2
// console.log(devolveUmValor())
// console.log(devolveUmValor)

// const exibeOi = nome => console.log(`Oi, ${nome}`)
// exibeOi('João')



// const dobro = (valor) => valor * 2
// const dobro = (valor) => { return valor * 2 }
// console.log(dobro(1))

// const hello = () => console.log('Hello')

// hello()

// () => {}

// const triplo = function (n = 5){
//   return n * 3
// }

// console.log(triplo(7))
// console.log(triplo())
// console.log(triplo(undefined))
// console.log(triplo(null))
// console.log(triplo('abc'))
// // function triplo (n = 5){
//   return n * 3;
// }


// const dobro = function (n) {
//   return (
//     n * 2
//   );
// }

// const res = dobro(3)
// console.log(res)


// function soma (a, b){
//   if (a !== 0 && b !== 0)
//     return a + b;
// }
// const res = soma(0, 0)

// console.log(res)


// function oi(){
//   console.log('oi')
// }

// oi('Maria', 'João')
// // definição da função
// function hello(){
//   console.log('Oi')
// }
// // essa é a chamada da função, é onde dizemos que ela deve ser colocada em execução
// hello()

// function hello (nome){
//   console.log(`Oi, ${nome}`)
// }
// hello('Pedro')


// int soma (int a, int b){
//   return a + b;
// }



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