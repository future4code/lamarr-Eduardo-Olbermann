ˋˋˋfunction contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let armazenaNumero = 0 
  for (let numero of arrayDeNumeros) {
    
     if (numero === numeroEscolhido) {
      armazenaNumero += 1
    } 
  }
  if (armazenaNumero === 0){
    return "Número não encontrado"
  }
  return `O número ${numeroEscolhido} aparece ${armazenaNumero}x`
}´´´