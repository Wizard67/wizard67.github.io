const path = require("path");
const fs = require("fs-extra")
const _ = require('lodash')
const YAML = require('yamljs')

const keepFiles = require('./package.json').keepFiles

// add jekyll collections to keepFoles
const collection = YAML.parse(fs.readFileSync('./_config.yml').toString())

_.forEach(collection.collections, (value, key) => {
  keepFiles.push(`_${key}`)
})

// remove files that not keep
const currentFiles = fs.readdirSync(__dirname)

_.difference(currentFiles, keepFiles).forEach((file)=>{

  fs.removeSync( path.join(__dirname, file) )

})
