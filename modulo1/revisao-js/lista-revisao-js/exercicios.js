// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(ordenarCrescente)
}
function ordenarCrescente(a, b) {
    return a - b;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter(retornaPar)
}
function retornaPar(par) {
    return par % 2 === 0
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter(retornaPar).map(elevarADois)
}
function elevarADois(elevar) {
    return elevar = Math.pow(elevar, 2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for (const numero of array) {
        if (numero > maiorNumero)
            maiorNumero = numero
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objetoRetorno = {
        maiorNumero: num1,
        maiorDivisivelPorMenor: false,
        diferenca: null,
    }

    let menorNumero = num2

    if (num2 > num1) {
        objetoRetorno.maiorNumero = num2
        menorNumero = num1
    }

    if (objetoRetorno.maiorNumero % menorNumero === 0) {
        objetoRetorno.maiorDivisivelPorMenor = true
    }

    objetoRetorno.diferenca = objetoRetorno.maiorNumero - menorNumero

    return objetoRetorno
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayPares = []
    let i = 0
    while (arrayPares.length < n) {
        if (i % 2 === 0) {
            arrayPares.push(i) 
        }
       i++ 
    }
    return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}