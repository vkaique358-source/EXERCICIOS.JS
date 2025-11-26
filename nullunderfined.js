let valor//nao inicializada
console.log(valor)//undifined

valor = null//ausencia de valor
console.log(valor)//null
//console.log(valor.toString())//erro!! nao da pra acessar propriedades de algo que esta null ou undifined

const produto = {}
console.log(produto.preco)//undifined
console.log(produto)//objeto vazio
produto.preco = 3.50
console.log(produto)//objeto com preco

produto.preco = undefined//evita atribuir undefined
console.log(!!produto.preco)//false
console.log(produto)//com preco undefined

produto.preco = null//sem preco
console.log(!!produto.preco)//false
console.log(produto)//sem preco

