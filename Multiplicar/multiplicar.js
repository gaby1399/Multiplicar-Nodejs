
const fs = require('fs');
const color=require('colors');//los requires se crean por archivo que se necesite

let listarTabla=(base,limite)=>{

    if(!Number(base)){
      console.log("El valor introducido no un número");
      return;
    }

    if(!Number(limite)){
     console.log("El valor introducido no un número");
      return;
    }

    console.log('=========================================='.red);
    console.log(`---------------Tabla de ${base}----------------`.bold);
    console.log('=========================================='.red);


   for(let i=1;i<=limite;i++){
    console.log(`${base} * ${i} = ${base*i}\n`);
   }

}

let crearArchivo = (base,limite)=>{

  return new Promise((resolve,reject)=>{

    if(!Number(base)){
      reject("El valor introducido no un número");
      return;
    }

    let data='';

   for(let i=1;i<=limite;i++){
     data +=`${base} * ${i} = ${base*i}\n`;
   }

    fs.writeFile(`Tablas/tabla-${base}al-${limite}.txt`, data, (err) => {
      if (err)
          reject (err)
      else
         resolve(`tabla-${base}-al-${limite}.txt`.green);
    });

  });
}

module.exports={
  crearArchivo,
  listarTabla
}