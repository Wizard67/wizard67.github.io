const path = require("path");
const fs = require("fs-extra")
const _ = require('lodash')
const YAML = require('yamljs')

const keepFiles = [
  '.git',
  '_site',
  'api',
  'dist',
  'node_modules',
  'public',
  'src',
  '_config.yml',
  '.gitignore',
  'Gemfile',
  'Gemfile.lock',
  'handleFiles.js',
  'package-lock.json',
  'package.json',
  'README.md',
  'vue.config.js',
]

const filename = path.join(__dirname, "./dist")

/* 
 *  add jekyll collections to keepFoles
 */
const collection = YAML.parse(fs.readFileSync('./_config.yml').toString())

_.forEach(collection.collections, (value, key) => {
  keepFiles.push(`_${key}`)
})

/* 
 * remove files that not keep
 */
const currentFiles = fs.readdirSync(__dirname)

_.difference(currentFiles, keepFiles).forEach((file)=>{

  fs.removeSync( path.join(__dirname, file) )

})

/* 
 *  move files to root-path
 */
if (fs.existsSync(filename)) {
  try {
    fs.moveSync(filename, __dirname)

    console.log("success!")
  } catch (err) {
    console.error(err)
  }
} else {
    console.error("no such filename")
}
