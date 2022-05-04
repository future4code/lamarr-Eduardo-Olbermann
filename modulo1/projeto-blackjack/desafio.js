/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
   let cartasUsuario = []
   let cartasComputador = []
   cartasUsuario.push(comprarCarta(), comprarCarta())
   cartasComputador.push(comprarCarta(), comprarCarta())

   while (cartasUsuario[0].texto[0] === "A" && cartasUsuario[1].texto[0] === "A") {
      cartasUsuario[0] = comprarCarta()
      cartasUsuario[1] = comprarCarta()
   }
   while (cartasComputador[0].texto[0] === "A" && cartasComputador[1].texto[0] === "A") {
      cartasComputador[0] = comprarCarta()
      cartasComputador[1] = comprarCarta()
   }

   let pontosUsuario = valorCartas(cartasUsuario)

   while (pontosUsuario < 21) {
      let perguntaContinuar = `Suas cartas são ${formatarCartas(cartasUsuario)}. A carta revelada do computador é ${cartasComputador[0].texto}.\nDeseja comprar mais uma carta?`

      if (confirm(perguntaContinuar)) {
         let cartaNova = comprarCarta()
         pontosUsuario += cartaNova.valor
         cartasUsuario.push(cartaNova)
      } else {
         break
      }
   }

   let pontosComputador = valorCartas(cartasComputador)
   let mensagemResultado = `Suas cartas são ${formatarCartas(cartasUsuario)}. Sua pontuação é ${pontosUsuario}.\n`
   mensagemResultado += `As cartas do computador são ${formatarCartas(cartasComputador)}. A pontuação do computador é ${valorCartas(cartasComputador)}.\n`

   if (pontosUsuario === pontosComputador) {
      mensagemResultado += "Empate!"
   } else {
      if (pontosUsuario <= 21 && pontosUsuario > pontosComputador) {
         mensagemResultado += "Usuário ganhou!"
      } else {
         mensagemResultado += "Computador ganhou!"
      }
   }
   alert(mensagemResultado)

} else {
   console.log("O jogo acabou")
}

function formatarCartas(cartas) {
   let retornaString = ""
   for (const carta of cartas) {
      retornaString += " " + carta.texto
   }
   return retornaString
}

function valorCartas(cartas) {
   let valorPontos = 0
   for (const carta of cartas) {
      valorPontos += carta.valor
   }
   return valorPontos
}