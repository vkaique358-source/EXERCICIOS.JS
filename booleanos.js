let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')//valores que sao considerados verdadeiros
console.log(!!3)
console.log(!!-1)//qualquer numero diferente de 0
console.log(!!' ')//string com espaco
console.log(!![])//array
console.log(!!{})//objeto

console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log('pra finlizar...')
console.log(!!('' || null || 0 || ' '))
let nome = ''
console.log(nome || 'Desconhecido')