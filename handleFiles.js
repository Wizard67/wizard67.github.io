const path = require("path");
const fs = require("fs-extra")
const _ = require('lodash')
const filename = path.join(__dirname, "./dist")

const keepFiles = [
  '.git',
  '_articles',
  '_notes',
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
