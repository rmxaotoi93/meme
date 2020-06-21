const fs = require('fs')
const path = require('path')

const pathData = path.join(__dirname, '../data.json')
const pathMeme = path.join(__dirname, '../meme.json')
const loadOriginal = () => {

    try {
        const buffer = fs.readFileSync(pathData)
        const string = buffer.toString()
        return JSON.parse(string)

    } catch (err) {
        return []
    }
}
const loadMemes = () =>{
    try{
        const buffer = fs.readFileSync(pathMeme)
        const string = buffer.toString()
        return JSON.parse(string)
    }catch (err) {
        return []
    }
}
const saveOriginals = data =>{
    fs.writeFileSync(pathData, JSON.stringify(data))
}

module.exports = {loadOriginal, saveOriginals }