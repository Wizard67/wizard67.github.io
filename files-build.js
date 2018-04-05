const path = require("path");
const fs = require("fs-extra")
const filename = path.join(__dirname, "./dist")

// move files to root-path
if (fs.existsSync(filename)) {
  try {
    fs.moveSync(filename, __dirname)

    console.log("success!")
  } catch (err) {
    console.error(err)
  }
} else {
    console.error("no such dirname: ", filename)
}
