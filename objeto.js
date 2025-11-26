const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40//evitar atributos com espacos

console.log(prod1)

const prod2 = {
    nome: 'Xbox',
    preco: 2199.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
console.log(prod2)
 
console.log(prod2.obj.obj.blabla)
const prod3 = {
    nome: 'notebook',
    preco: 5899.90
}

console.log(prod3)

let a = 3
let b = 4
const obj1 = {a: a, b: b}//antes do es6
console.log(obj1)

console.log({a, b})