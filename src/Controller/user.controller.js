const User = require('../models/User');
const {unlink} = require('fs-extra');
const path = require('path');
const {Mongoose} = require('mongoose');
const { ObjectId } = require('mongoose');

const Registrarse = async(req,res)=>{
    const {nombre,apellido,tipo_documento,documento_identidad,correo,celular,fecha} = req.body;
     if(nombre.length<1) return res.status(400).json({message : "Ingresa Nombre"});
     if(apellido.length<1) return res.status(400).json({message : "Ingresa Apellido"});
     if(tipo_documento.length<1) return res.status(400).json({message : "Ingresa tipo de documento"});
     
     if(!correo.includes('@') && !correo.endsWith('.com')) return res.status(400).json({message : "Correo Invalido"});
     if(celular.length<7) return res.status(400).json({message : "Celular Invalido"});

     const user = new User({
         nombre,
         apellido,
         tipo_documento,
         documento_identidad,
         correo,
         celular,
         fecha : fecha ,
         filename : req.file.filename,
         path : '/img/uploads/'+req.file.filename,
         originalname : req.file.mimetype,
         size : req.file.size
     });
 try{
    const result = await user.save();
    if(result) return res.redirect('/');
    
 } catch(error){
     res.status(400).json(error);
 }
}

const VistaRegistrarse = async(req,res)=>{
    res.render('upload');
}

const MostrarTodo = async(req,res)=>{
    const users = await User.find();
   res.render('index',{users});
}

const Mostrar = async(req,res)=>{
    const user = await User.findById(req.params.id);
    res.render('profile',{user:user});
}

const BusquedaEspecifica = async(req,res)=>{
    const user = await User.findById(req.params.id);
    res.render('profile',{user:user});
}

const Eliminar = async(req,res)=>{
    const user= await User.findByIdAndDelete(req.params.id);
         await unlink(path.resolve('./src/public'+user.path));
         res.redirect('/');
}

const Actualizar = async(req,res)=>{

    
       try{

           const result =  await User.findByIdAndUpdate(req.params.id,req.body);
          
        await  result.save(req.body);
           if(res) {
               res.redirect('/');
           }
       }catch(error){

           res.status(400).json({message : "Error"});
       }
           
      }
     



const VistaActualizar = async(req,res)=>{
    const {id} = req.params.id;
    console.log(id);


    const user = await User.findById(req.params.id);
    res.render('update',{user});
}



module.exports = {
    Registrarse,
    VistaRegistrarse,
    Mostrar,
    MostrarTodo,
    BusquedaEspecifica,
    Eliminar,
    Actualizar,
    VistaActualizar
}
