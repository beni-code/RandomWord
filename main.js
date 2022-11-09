const fs = require('fs')
const path = require('path')
const fsExtra = require('fs-extra')

const imgs = fs.readdirSync('./imgs')

let pngs = imgs.filter(img => {
    if (path.extname(img) === '.png') {
        return true;
    } else {
        return false;
    }
}).map(png => {
    return `./imgs/${png}`
})

let str = `let pngs = ${JSON.stringify(pngs)}`

if (!fs.existsSync('./dist')) {

    fs.mkdirSync('./dist')
}
fs.writeFileSync('./dist/index.js', str, 'utf-8')
fs.copyFileSync('./index.html', './dist/index.html')
fsExtra.copySync('./imgs', './dist/imgs')
