const chalk = require('chalk')
const pkg = require('../package.json')

console.log(`
****************************

${chalk.green('Hey there! 👋')}

Thanks for giving the ${pkg.name} a try. 🎉
To get you going really quickly this project includes a setup step.

${chalk.yellow.bold('npm run import')} automates the following steps for you:
  - imports ${chalk.green('a predefined content model')}
  - creates a config file ${chalk.yellow('.contentful.json')}

When this is done run ${chalk.yellow('npm run dev')} and you're good to go.
`)
