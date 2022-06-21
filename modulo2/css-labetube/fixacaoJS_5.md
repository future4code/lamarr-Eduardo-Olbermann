```function criarArrayNomesAnimais() {

    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

function retornaNome (animal) {
   return animal.nome
 }
 
 let novoArray = animais.map(retornaNome)
 
return  novoArray

}´´´