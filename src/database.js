const mongoose = require('mongoose');


// Conectar a Base de datos
mongoose.connect('mongodb://localhost/pmlUser',{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
}).then(db=> console.log('se ha conectado a la base de datos'))
  .catch(err=> console.log(err));