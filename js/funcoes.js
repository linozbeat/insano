


async function criarConta(){
    nome = await $tbNome.value
    sobrenome = await $tbSobrenome.value
    idade = await $tbIdade.value
    var nomeCompleto = nome + " " + sobrenome
    
   console.log("ola " + nome + " " + sobrenome + " sua idade é " + idade)
   var dados = nomeCompleto + " " + idade 

   console.log(dados)
 
}
