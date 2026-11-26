const chalk = require ('chalk')
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

const nota = parseInt(args['nota'])

if (nota > 7){
    console.log(chalk.green(nota))
}
else if (nota == 7){
    console.log(chalk.yellow(nota))
}else {console.log(chalk.red(nota))}

//node index.js --nota=9