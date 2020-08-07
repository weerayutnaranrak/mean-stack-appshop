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

app.get('/getproductapi', (req, res,next) => {
  try {
    ProductModel.find((err,doc)=>{
      if(err) res.json({"status":"failed"});
      res.json({result:"secces",data:doc})
      res.send(doc)
    })
  } catch (error) {
    next(err);
  }
  
})

app.get('/getbasgetapi', (req, res) => {
  try {
    BasgetModel.find((err,doc)=>{
      if(err) res.json({"status":"failed"});
      res.json({result:"secces",data:doc})
    })
  } catch (error) {
    next(err);
  }
  
})

app.post('/addproductapi', function (req, res) {
  try {
    ProductModel.create(req.body,(err,doc)=>{
      if(err) res.json({"status":"failed"});
      res.json({"status":"success"})
  })
  } catch (error) {
    next(err);
  }
    
})

app.post('/addbasgetapi', function (req, res) {
  try {
    BasgetModel.create(req.body,(err,doc)=>{
      if(err) res.json({"status":"failed"});
      res.json({"status":"success"})
  })
  } catch (error) {
    next(err);
  }
  
})


app.listen(port, () => console.log(`listening on port :`+ port))