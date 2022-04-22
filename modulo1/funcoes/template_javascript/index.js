/*
1. Exercicio interpretação de código

a.  10,50
b.  Ele não imprimiria o resultado no console, ele iria fazer a multiplicação normal.

2. Leia o código abaixo

a.  Ele pediu pro usuário digitar um texto, converteu o texto que o usuario digitou em letras minusculas
e verificou se o usuario inseriu a palavra cenoura, retornando um booleano.

b. 
    i.Eu gosto de cenoura = true
    ii.CENOURA é bom pra vista = true
    iii.Cenouras crescem na terra = true
*/

// 1. Exercícios de escrita de código

// a.
function imprimirInformacoes() {
    console.log("Eu sou Eduardo, tenho 21 anos, moro em Florianopolis e sou estudante.")
}

// b.
function informacoesUsuario(nome, idade, cidade, profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}

// 2. Escreva as funções explicadas abaixo

// a.
function somar(n1, n2) {
    return n1 + n2
}
console.log(somar(21, 22))

// b.
function maiorQue(n1, n2) {
    return n1 >= n2
}

// c.
function par(n1) {
    return n1 % 2 === 0
}

// d. 
function imprimirMaiusculo(mensagem) {
    console.log(mensagem.length, mensagem.toUpperCase())
}

// 3. 
function soma(n1, n2) {
    return n1 + n2
}
function subtracao(n1, n2) {
    return n1 - n2
}
function multiplicacao(n1, n2) {
    return n1 * n2
}
function divisao(n1, n2) {
    return n1 / n2
}

const numero1 = Number(prompt("Digite um número"))
const numero2 = Number(prompt("Digite outro numero"))

console.log(`Numeros inseridos: ${numero1} e ${numero2}`)
console.log(`Soma: ${soma(numero1, numero2)}`)
console.log(`Subtração: ${subtracao(numero1, numero2)}`)
console.log(`Mutiplicação: ${multiplicacao(numero1, numero2)}`)
console.log(`Divisão: ${divisao(numero1, numero2)}`)

