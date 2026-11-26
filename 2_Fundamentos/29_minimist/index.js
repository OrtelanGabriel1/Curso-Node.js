const minimalist = require('minimist')

const soma = require('./soma').soma

const args = minimalist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

console.log(soma(a,b))

//node index.js --a=5 --b=14