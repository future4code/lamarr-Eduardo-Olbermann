// a: Aparece um erro dizendo que o tipo da minha variavel e string portanto não pode receber número.
const minhaString: string = 1

// const meuNumero: number = "oi"
const meuNumero: any = "oi"
// b: Com um tipo especial chamado Any

// c:
type Person1 = {
    name: string,
    idade: number,
    corFavorita: string,
}

type Person2 = {
    name: string,
    idade: number,
    corFavorita: string,
}
type Person3 = {
    name: string,
    idade: number,
    corFavorita: string,
}
type Person4 = {
    name: string,
    idade: number,
    corFavorita: string,
}
// d:

enum corArcoiris {
    VERMELHA = "Vermelha",
    LARANJA = "Laranja",
    AMARELA = "Amarela",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta",
}
