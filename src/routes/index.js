const router= require('express').Router();

//Importarcion de Controladores 
const {Registrarse,VistaRegistrarse,MostrarTodo,Mostrar,BusquedaEspecifica,Eliminar,Actualizar,VistaActualizar} = require('../Controller/user.controller');

//Vista Principal
router.get('/',MostrarTodo);

// VistaRegistro y Registro
router.get('/upload',VistaRegistrarse);
router.post('/upload',Registrarse);

//VistaEspecifica
router.get('/image/:id',BusquedaEspecifica);

//Eliminar Usuario
router.get('/image/:id/delete',Eliminar);

//VistaActualizacion y Actualizacion
router.get('/update/:id',VistaActualizar);
router.post('/update/:id',Actualizar);

module.exports = router;