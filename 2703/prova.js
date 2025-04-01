let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let resultados = {
  soma: num1,
  subtracao: num1,
  multiplicacao: num1,
  divisao: num1,
  resto: num1
};

resultados.soma += num2;
resultados.subtracao -= num2;
resultados.multiplicacao *= num2;
resultados.divisao /= num2;
resultados.resto %= num2;

console.log("=== Resultados ===");
console.log(`Soma: ${num1} + ${num2} = ${resultados.soma}`);
console.log(`Subtração: ${num1} - ${num2} = ${resultados.subtracao}`);
console.log(`Multiplicação: ${num1} * ${num2} = ${resultados.multiplicacao}`);
console.log(`Divisão: ${num1} / ${num2} = ${resultados.divisao}`);
console.log(`Resto da divisão: ${num1} % ${num2} = ${resultados.resto}`);