// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura1 = prompt("Qual a Altura de um Retangulo?")
const largura1 = prompt("Qual a Largura de um Retangulo?")
const rResposta = Number(altura1 * largura1)
console.log(rResposta)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt("Qual o ano atual?")
const anoDeNascimento = prompt("Qual seu ano de Nascimento?")
const rIdade = Number(anoAtual - anoDeNascimento)
console.log(rIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
let calculoIMC = peso/(altura * altura)
return calculoIMC  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome1 = prompt("Qual seu nome?")
const idade1 = prompt("Qual sua idade?")
const email1 = prompt("Qual seu email?")
console.log(`Meu nome é ${nome1}, tenho ${idade1} anos, e o meu email é ${email1}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const corFavorita1 = prompt("Qual sua cor favorita?")
const corFavorita2 = prompt("Qual sua cor favorita?")
const corFavorita3 = prompt("Qual sua cor favorita?")

console.log([corFavorita1, corFavorita2, corFavorita3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso 
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const caracteres = string1.length
const caracteres1 = string2.length
  return caracteres >= caracteres1
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return  array[array.length - 1]
}
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array.pop();
  const primeiroElemento = array.splice(0, 1, ultimoElemento)[0]
  array.push(primeiroElemento)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const frase1 = string1.toUpperCase()
const frase2 = string2.toUpperCase()
return frase1 >= frase2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}