var express = require('express');
var router = express.Router();
const upload = require("../utils/upload.js")
const {loadOriginal, saveOriginals} = require("../utils/data")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/upload"  ,(req,res,next) =>{
 // save image
    upload(req, res, function (err) {
      if(err){
        return res.send('oke')
      }
      if(!req.file){
        return res.send('not oke')
      }
      // save to file
      const originals = loadOriginal()
      console.log(originals)
      originals.push({filename: req.file.filename})
      
      saveOriginals(originals)
      // Everything went fine.
      res.render("original", {images: originals, path: '/images/originals/'})
    })
})


module.exports = router;
