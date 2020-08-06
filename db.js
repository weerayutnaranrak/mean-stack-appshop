var mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1/appshop',{useNewUrlParser: true})

mongoose.connection.on('connected',function (){
    console.log('Mongoose connection on');
});

mongoose.connection.on('error',function(err){
    console.log('Mongoose connection err ' + err );
})

mongoose.connection.on('disconnected',function(){
    console.log('Mongoose connection disconnected');
})

process.on('SIGINT',function(){
    mongoose.connection.close(function(){
        console.log('Mongoose default connection disconnected trough app');
        process.exit(0);
    })
});