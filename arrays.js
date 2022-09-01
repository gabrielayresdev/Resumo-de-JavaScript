//Declaração

let array
let arrayNum = [1, 3, 5]

//Métodos

// .length

array = [1, "banana", 3, "oi", 4, 3]
console.log(array.legth) // 6

// .push()

array.push("morango")
console.log(array) // 1, banana, 3, oi, 4, 3, morango

// .pop()

array.pop
console.log(array) // 1, banana, 3, oi, 4, 3

// .slice

console.log(array.slice(0, 2)) // 1, banana
console.log(array) // 1, banana, 3, oi, 4, 3
console.log(array.splice(3, 1, "ricardo")) // oi
console.log(array) // 1, banana, 3, ricardo, 4, 3 

// .concat()

let arraysConcatenados = array.concat(arrayNum)
console.log(arraysConcatenados) // 1, 'banana', 3, 'ricardo', 4, 3, 'morango', 1, 3, 5 

// Array de 2 dimensões

let mes = ["J", "F", "M", "A"]
let dias = [31, 28, 31, 30]

let calendario = [mes, dias]

console.log(`${calendario[0][0]} tem ${calendario[1][0]} dias`) // J tem 31 dias

// .includes()

let valida = (nome) => {
    if (array.includes(nome)) {
        console.log("nome cadastrado")
    } else {
        console.log("nome não cadastrado")
    }
}

valida("banana") // nome cadastrado
valida(16) // nome não cadastrado

// .forEach()

let soma = 0

arrayNum.forEach(index => {
    soma += index
})

console.log(soma) // 9

// .map() e .toLowerCase()/.toUpperCase()

let mesEmMinuscula = mes.map(mes => mes.toLowerCase())
console.log(mesEmMinuscula) // 'j', 'f', 'm', 'a'

let numerosPequenos = arrayNum.map(num => {
    if (num < 5) {
        return num
    } else {
        return "numero grande"
    }
})

console.log(numerosPequenos) // 1, 3, 'numero grande'

// .filter()

numerosPequenos = numerosPequenos.filter(valor => typeof valor == "number")

console.log(numerosPequenos) // 1, 3

// .reduce

soma = 0
let valorInicial = 0
soma = arrayNum.reduce((numeroAnterior, numeroAtual) => numeroAnterior + numeroAtual, valorInicial)
console.log(soma) // 9