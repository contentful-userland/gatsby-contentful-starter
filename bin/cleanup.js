'use strict'

const fs = require('fs')
const path = require('path')
const rawdata = fs.readFileSync(path.resolve(__dirname, '../package.json'))

let packageJSON = JSON.parse(rawdata)
delete packageJSON.scripts['setup']
delete packageJSON.scripts['postinstall']
delete packageJSON.scripts['cleanup-repository']

let data = JSON.stringify(packageJSON)
fs.writeFileSync(path.resolve(__dirname, '../package.json'), data)
