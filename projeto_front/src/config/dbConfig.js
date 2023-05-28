const mogoose = require ("mongoose")
const uri="mongodb+srv://gabrielrocha6033:tanjerina@cluster0.o1bfqin.mongodb.net/?retryWrites=true&w=majority"

const connect = mogoose.connect(dbConfig,{
    useNewUrlParcer:true,
    usUnitedTopology:true


})
module.exports=connection















