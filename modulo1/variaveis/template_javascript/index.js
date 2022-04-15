// 1. console.log (10,10)
// console.log (10,5)
// 2. console.log(10,10,10)
// 3. horasTrabalhadas e minutosNoIntervalo

// //1.Exercicio

let nome = null
let idade = null
console.log(typeof nome)
console.log(typeof idade)
//ele aparece objeto pois não declarei nenhuma string ou number, então não aparece nada

nome = prompt("Qual é seu nome?")
idade = prompt("Qual a sua idade?")
console.log(typeof nome)
console.log(typeof idade)
//agora, como o usuario respondeu, ela virou uma string
console.log("Olá", nome, "você tem", idade , "anos")

//2.Exercicio

let primeiraPergunta = prompt("Você gosta de viajar?")
let segundaPergunta = prompt("Você gosta de pizza?")
let terceiraPergunta = prompt("Você gosta de roupa preta?")

let respostaPrimeiraPergunta = primeiraPergunta
let respostaSegundaPergunta = segundaPergunta
let respostaTerceiraPergunta = terceiraPergunta

console.log("Você gosta de viajar?", respostaPrimeiraPergunta)
console.log("Você gosta de pizza?", respostaSegundaPergunta)
console.log("Você gosta de roupa preta?", respostaTerceiraPergunta)

//3. Exercicio

let a = 10
let b = 25
let c = 0

c = a
a = b
b = c

console.log(a, b)
