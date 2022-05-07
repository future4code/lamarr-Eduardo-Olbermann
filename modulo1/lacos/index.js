// 1. Exercícios de interpretação de código

// a. A variavel valor e somada com i enquanto a variavel i for menor que 5, ai no console aparece o valor 10.

// 2. 

// a. 
// 19
// 21
// 23
// 25
// 27
// 30

// b. Não, se precisasse acessar o indice, usuaria o for convencional.

/*3.
*
**
***
****
*/

// 1. Exercícios de escrita de código

const qntPetsUsuario = Number(prompt("quantos bichinhos de estimação você tem?"))

if (qntPetsUsuario === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else if (qntPetsUsuario > 0) {
    let qntAtual = 0
    let arrayDosPets = []
    while (qntAtual < qntPetsUsuario) {
        let petAtual = prompt(`Digite o nome do seu ${qntAtual + 1} pet`)
        arrayDosPets.push(petAtual)
        qntAtual++
    }
    console.log(arrayDosPets)
}

// 2.

// a.
function imprimeValores(array) {
    for (const numero of array) {
        console.log(numero)
    }
}
// b. 
function imprimeDividido(array) {
    for (const numero of array) {
        console.log(numero / 10)
    }
}

//  c.

function imprimePares(array) {
    const arrayNovo = []
    for (const numero of array) {
        if (numero % 2 ==0) {
            arrayNovo 
        }
    }
    
}