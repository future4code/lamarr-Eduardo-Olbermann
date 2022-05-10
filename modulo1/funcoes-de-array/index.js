// 1. Exercícios de interpretação de código

// a. Vai imprimir os três nomes com seus apelidos  em um objeto e vai buscar o indice de cada um, mostrando o que tem em cada objeto.

// 2.Ele vai só acessar os nomes de cada propriedade

// 3.Ele vai mostrar todos os objetos com propriedades diferentes de Chijo, vai aparecer os nome e apelidos dos 2 objetos.

// 1. Exercícios de escrita de código

// a.
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

function filtrarPorNome(nomeDoCachorro) {
    return nomeDoCachorro.nome
}

let nomeDosPets = pets.map(filtrarPorNome)

// b.
function apenasSalsichas(racaSalsicha) {
    return racaSalsicha.raca === "Salsicha"
}
let cachorrosSalsichas = pets.filter(apenasSalsichas)

// c.

function mensagemCliente(clientePoodle) {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${clientePoodle.nome}!`
}

function apenasPoodles(pet) {
    return pet.raca === "Poodle"
}
let filtroDePoodles = pets.filter(apenasPoodles)
let mensagensDeDesconto = filtroDePoodles.map(mensagemCliente)


