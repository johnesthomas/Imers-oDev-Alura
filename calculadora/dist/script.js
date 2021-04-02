var primeiroValor = parseFloat(prompt('Digite o primeiro valor: '))

var segundoValor = parseFloat(prompt('Digite o segundo valor: '))

var operacao = prompt(' Digite 1 para adição(+) \n Digite 2 para subtração(-) \n Digite 3 para multiplicação(*) \n Digite 4 para divisão(/)')

if (operacao == 1){  
  var resultado = primeiroValor + segundoValor
  
  document.write("<h2>" + primeiroValor + " + " +   segundoValor + " = "+ resultado + "</h2>")
  
} else if (operacao == 2){
  var resultado = primeiroValor - segundoValor
  
  document.write("<h2>" + primeiroValor + " - " +   segundoValor + " = "+ resultado + "</h2>")
  
} else if (operacao == 3){
  var resultado = primeiroValor * segundoValor
  
  document.write("<h2>" + primeiroValor + " * " +   segundoValor + " = "+ resultado + "</h2>")
  
} else if (operacao == 4) {
  var resultado = primeiroValor / segundoValor
  
  document.write("<h2>" + primeiroValor + " / " +   segundoValor + " = "+ resultado + "</h2>")
  
} else {
  document.write('<h2> Opção Inválida </h2>')
}