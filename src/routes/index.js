const router= require('express').Router();

const {Registrarse,VistaRegistrarse,MostrarTodo,Mostrar,BusquedaEspecifica,Eliminar,Actualizar,VistaActualizar} = require('../Controller/user.controller');

// const router = Router();
// const {unlink} = require('fs-extra');
// const path = require('path');
// const image = require('../models/User');

// const Imagen = require('../models/User');

router.get('/',MostrarTodo);

router.get('/upload',VistaRegistrarse);
router.post('/upload',Registrarse);


router.get('/image/:id',BusquedaEspecifica);

router.get('/image/:id/delete',Eliminar);
// router.get('/image/:id/delete', async(req,res)=>{
//     const img = await Imagen.findByIdAndDelete(req.params.id);
//      await unlink(path.resolve('./src/public'+img.path));
//      res.redirect('/');
// });

router.get('/update/:id',VistaActualizar);
router.post('/update/:id',Actualizar);

module.exports = router;