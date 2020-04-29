'use strict'

const fs = require('fs')
const path = require('path')
let packageJSON = require(path.resolve(__dirname, '../package.json'))

delete packageJSON.scripts['setup']
delete packageJSON.scripts['postinstall']
delete packageJSON.scripts['cleanup-repository']

let data = JSON.stringify(packageJSON, null, 2)
fs.writeFileSync(path.resolve(__dirname, '../package.json'), data)
