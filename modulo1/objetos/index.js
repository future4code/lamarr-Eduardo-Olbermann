// 1. Exericios de interpretação de código

// a.
// console.log(filme.elenco[0])=R: ''Matheus Nachtergaele''
// console.log(filme.elenco[filme.elenco.length - 1])=R: ''Virginia Cavendish"
// console.log(filme.transmissoesHoje[2])=R: canal: "Globo", horario: "14h"

// 2.Exericios interpretação de código

// a.

// console.log(cachorro)=R: nome: "Juca", idade: 3, raca: "SRD"
// console.log(gato)R: nome: "Juba", idade: 3, raca: "SRD"
// console.log(tartaruga)R: nome: "Jubo", idade: 3, raca: "SRD"

// b. Ele faz uma cópia de tudo que está dentro de um objeto

// 3.

// a.

// console.log(minhaFuncao(pessoa, "backender"))R: false
// console.log(minhaFuncao(pessoa, "altura"))R: undefined

// b. Ele ta chamando a função e pedindo pra mostrar se dentro do objeto pessoa tem a propriedade ''backender''
// então ele retorna o que tem dentro da propriedade, no segundo, como não existe a propriedade ''altura'', ele retorna undefined.

// 1. Exercícios de escrita de código
// a.
const pessoa = {
    nome: "Eduardo",
    apelidos: ["Dudu", "Edu", "Du"]
}
function imprimirPessoa(pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}
// b.
const novaPessoa = {
    ...pessoa,
    apelidos: ["Duzao", "Duzinho", "Duca"]
}
imprimirPessoa(novaPessoa)

// 2.

const pessoaUm = {
    nome: "Eduardo",
    idade: 21,
    profissao: "Estudante",
}

const pessoaDois = {
    nome: "Daniel",
    idade: 24,
    profissao: "Estudante",
}

function informacoes(pessoa) {
    return [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
}

// 3.

const carrinho = []

const frutaUm = {
    nome: "Abacaxi",
    disponibilidade: true,
}
const frutaDois = {
    nome: "Maçã",
    disponibilidade: true,
}
const frutaTres = {
    nome: "Banana",
    disponibilidade: true,
}

function adicionarNoCarrinho(fruta) {
    carrinho.push(fruta) 
}
adicionarNoCarrinho(frutaUm)
adicionarNoCarrinho(frutaDois)
adicionarNoCarrinho(frutaTres)
console.log(carrinho)

// Desafios

// 1.
function perguntasAoUsuario() {
    const respostaUm = prompt("Qual seu nome?")
    const respostaDois = Number(prompt("Qual sua idade?"))
    const respostaTres = prompt("Qual profissão?")
    
    const dadosUsuario = {
        nome: respostaUm,
        idade: respostaDois,
        profissao: respostaTres,
    }
    console.log(dadosUsuario, typeof(dadosUsuario))
}

// 2.

function checarLancamentos(filme1, filme2) {
    return `O primeiro filme foi lançado antes do segundo? ${filme1.anoDeLancamento < filme2.anoDeLancamento}. O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoDeLancamento === filme2.anoDeLancamento}`
}

// 3.

function checarEstoque (fruta) {
    const frutaInvertida = {
        ...fruta,
        disponibilidade: !fruta.disponibilidade 
    }
    return frutaInvertida
}