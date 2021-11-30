# PLM Omar

## Pasos para instalación
1. ##### First Arrastrar la Carpeta del Proyecto hacia su editor de preferencia sea Visual Studio Code, Atom etc...

2. ##### Tener instalado mongoDb en su computador , si quiere ver las colecciones de forma visual tener Robo 3T instalado en su Computadora , luego encienda el servico de Mongo desde la consola con mongod

3. ##### Abrir la consola y desde la carpeta ejecutar npm install para reinstalar las dependencias  se observan tambien en package.json

4. ##### Se deberan instalar las siguientes dependencias, se observan tambien en "package.json":

express
mongoose
ejs
fs-extra
morgan
timeago
uuid"
nodemon

5- El archivo "index.js" posee la configuracion del servidor el cual correra por el puerto 3000. el archivo "conexion.js" posee la configuracion de mongo 

6- Para inicializar el servidor del Data Warehouse se debe ejecutar el comando npm run dev

7- Hecho esto, verificar que el servidor indique en la consola que se ha iniciando Puerto 3000 y se ha conectado en la base de datos apenas crees el primer usuario Mongodb te genera la dbs.

8- disfruta de la app
