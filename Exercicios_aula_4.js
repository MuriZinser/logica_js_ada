// Desafio - 1 Verificação de números pares e ímpares usando Ternário
const numero = 7;
const resultado = numero % 2 === 0 ? "É par" : "É impar";
console.log(resultado);

// Desafio - 1 Verificação de números pares e ímpares usando IF
if (numero % 2 == 0) {
  console.log("É par");
} else {
  console.log("É impar");
}

// Desafio 2 - Verificação de nota
const nota = Number(prompt("Digite sua nota: "));

if (nota >= 90) {
  console.log("Aprovado com mérito");
} else if (nota >= 70) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// Desafio 3 - Determinar o maior número
const numero1 = 5;
const numero2 = 15;
const numero3 = 10;

if (numero1 > numero2 && numero1 > numero3) {
  console.log(numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log(numero2);
} else {
  console.log(numero3);
}

// Desafio 4 - Verificação de triângulo
const lado1 = 3;
const lado2 = 4;
const lado3 = 5;

if (lado1 === lado2 && lado1 === lado3) {
  console.log("Triângulo equilátero!");
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
  console.log("Triangulo isósceles!");
} else {
  console.log("Triângulo escaleno");
}

// Desafio 5 - Verificação de ano bissexto
const ano = 2023;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log("Esse ano é bissexto");
} else {
  console.log("Esse ano não é bissexto");
}

// Desafio 6 - Verificação de idade para compra de bebida alcoólica Ternário
idade >= 29
  ? console.log("Você pode comprar bebidas alcóolicas!")
  : console.log("Você não pode ainda comprar bebidas alcoólicas!");

// Desafio 6 - Verificação de idade para compra de bebida alcoólica If
const idade = 29;
if (idade >= 18) {
  console.log("Você pode comprar bebidas alcóolicas!");
} else {
  console.log("Você não pode ainda comprar bebidas alcoólicas!");
}

// Desafio 7 - Verificação de Números pares e ímpares
const ParOuImpar = 33;
switch (ParOuImpar % 2) {
  case 0:
    console.log("É par");
    break;
  default:
    console.log("É ímpar");
}

// Desafio 8 - Conversão de notas em conceitos
const VogalOuConsoante = "i";
switch (VogalOuConsoante.toUpperCase()) {
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
    console.log("É vogal");
    break;
  default:
    console.log("É consoante");
}

// Desafio 9 - Determinação de estação do ano
const mes = "janeiro";
switch (mes.toLowerCase()) {
  case "dezembro":
  case "janeiro":
  case "fevereiro":
    console.log("Inverno");
    break;
  case "março":
  case "abril":
  case "maio":
    console.log("Primavera");
    break;
  case "junho":
  case "julho":
  case "agosto":
    console.log("Verão");
    break;
  case "setembro":
  case "outubro":
  case "novembro":
    console.log("Outono");
    break;
  default:
    console.log("Mês não existente!");
}
