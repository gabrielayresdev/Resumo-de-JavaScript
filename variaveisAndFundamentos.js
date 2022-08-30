//JS segue o padrão camelCase

//Existem 3 tipos de variáveis primitivas: string, number e boolean

const str = "oi"
const number = 10
const boolean = true

//Existem 3 métodos de declarar uma variável: const, var, let

const eu = "eu" //Não modificável, global e precisa ser instanciada
var tu = "tu" //Modificável, global e undefined enquanto não for instanciada
let ele = "ele" //Modificável, limitada ao escopo e deve ser declarada antes de qualquer chamado

//null é um valor passado a uma variável
//undefined é o valor padrão para qualquer variável não instanciada

let nula = null
let indefinida

console.log(nula === indefinida)//retorna false

//falsy =>  0, ""
//truthy => 1

//truthy ou falsy
//0 -> false
//1 -> true

console.log(0 == false)//retorna true
console.log("" == false)//retorna true
console.log(1 == true)//retorna true

//Conversões
const numero = 456;
const numeroString = "456";

console.log(numero + numeroString) // conversão implícita
console.log(numero + Number(numeroString))// conversão explícita => Number() ou String()

//Comparação

//== compara apenas valores
console.log(numero == numeroString)//retorana true
//=== compara valores e tipos
console.log(numero === numeroString)//retorana false

//ternario

console.log(10 > 5 ? false : true)//retora false

//template

console.log(`${numero} + ${numeroString} = ${numero + Number(numeroString)}`)