
//requireds
//const fs = require('fs'); "Es una libreria de Node"
//const fs = require('express'); "Es un paquete que se instalan, codigos de otros desarrolladores"
//const fs = require('./fs'); "Son archivos creados por nosotros"
//module tiene objetos como el id, exports:donde se puede agregar los elementos a usar de forma global

const argv=require('./config/yargs').argv;
const color=require('colors');

//Destructuración:
const {crearArchivo,listarTabla}= require('./Multiplicar/multiplicar');
//inicializar de una vez la función que se esta llamando desde el patch

let comando= argv._[0];

switch(comando){
  case 'listar':
   listarTabla(argv.base, argv.limite);
  break;

  case 'crear':
    crearArchivo(argv.base, argv.limite)
     .then (archivo=>console.log(`Archivo creado:${archivo}`))
     .catch(e=>console.log(e));
  break;

  default:
    console.log('Comando no reconocido');
}

//process
//se ejecuta como variable de entorno
//argv=argumetos:
//let argv=process.argv;
//let parametro=argv[2];
//split toma un string y lo combiarte en un arreglo, que va separando segun el caracter agregado
//let base= parametro.split('=')[1];
//console.log(argv.base);
//console.log("Limite: ",argv.limite);
//console.log(base);  solo para hacer pruebas



