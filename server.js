const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser =  require('body-parser')
const { url } = require('inspector')

require('./db')
const ProductModel = require('./product_schema')
const BasgetModel = require('./basget_schema')


var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/getproductapi', (req, res) => {

    ProductModel.find((err,doc)=>{
      if(err) res.json({"status":"failed"});
      res.json({result:"secces",data:doc})
    
    })
})
app.get('/getbasgetapi', (req, res) => {
  
    BasgetModel.find((err,doc)=>{
      if(err) res.json({"status":"failed"});
      res.json({result:"secces",data:doc})
      
    })

})

app.post('/addproductapi', function (req, res) {
  
    ProductModel.create(req.body,(err,doc)=>{
      if(err) res.json({"status":"failed"});
      res.json({"status":"success"})
      
  })

})

app.post('/addbasgetapi', function (req, res) {
  
    BasgetModel.create(req.body,(err,doc)=>{
      if(err) res.json({"status":"failed"});
      res.json({"status":"success"})
      
  })

})


app.listen(port, () => console.log(`listening on port :`+ port))