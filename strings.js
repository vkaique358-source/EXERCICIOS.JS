const escola = "coder"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charAt(3))
console.log(escola.indexOf('d'))
console.log(escola.charCodeAt(3))
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) // concatena strings
console.log(escola.replace('o', '0')) //substitui o primeiro 'o' por '0'
console.log(escola.replace(/\d/g, '0'))//substitui todos os digitos por '0'
 
console.log('Ana, Maria, Vitor'.split(','))// transforma em array