const os = require('node:os')

console.log('Información del sistema operativo')

console.log('__________________________________')

console.log('Nombre del sistema operativo: ', os.platform())
console.log('Versión del sistema operativo: ', os.release())
console.log('Versión del sistema operativo: ', os.arch())
console.log(os.hostname())
console.log(os.machine())

console.log('Pepito')
