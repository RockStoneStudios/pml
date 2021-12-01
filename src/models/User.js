const {Schema,model} = require('mongoose');

const imageSchema = new Schema({
  
})

 module.exports =  model('Image',imageSchema);





const UserSchema = new Schema({
     nombre : {
         type : String,
         required : true
     },
     apellido : {
         type : String,
         required : true
     },
     tipo_documento : {
         type : String,
         required : true
     } ,
     documento_identidad : {
         type : Number,
         required : true,
         unique : true
     },
     correo : {
         type : String,
         required : true,
         unique : true
     },
     celular : {
         type : String,
         required : true
     },
     fecha : {
         type : String,
     },
    
    filename : {type:String},
    path : {type: String},
    originalname : {type: String},
    mimetype : {type : String},
    size : {type:Number},
    created_at : {type : Date, default :Date.now()}
});


module.exports = model('User',UserSchema);