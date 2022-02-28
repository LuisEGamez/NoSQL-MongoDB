show databases

use optica

db.createCollection("proveedores")

db.proveedores.insert({
    "_id": 1,
    "nombre": "Vision X",
    "direccion": {
        "calle": "Valencia",
        "numero": 147,
        "piso": "4",
        "puerta": "2",
        "ciudad": "Barcelona",
        "cp": "08005",
        "pais": "España"
        },
    "telefono": "69857425",
    "fax": "698525895",
    "nif": "58742158W"  
})

db.marcas.insert({
    "_id": 1,
    "nombre": "Ray BB",
    "proveedores": 1   
})

db.gafas.insert({
    "_id": 1,
    "marca": 1,
    "graduacion": "1.5",
    "tipo": "metalica",
    "color": "roja",
    "precio": 50 
})

db.clientes.insertMany([{
    "_id": 1,
    "nombre": "Ana",
    "direccion": {
        "calle": "Llull",
        "numero": 14,
        "piso": "8",
        "puerta": "4",
        "ciudad": "Barcelona",
        "cp": "08005",
        "pais": "España"
        },
    "telefono": "69857425",
    "email": "hdgej@gmail.com",
    "fecha_registro": "2017-02-05"
    },{
    "_id": 2,
    "nombre": "Juan",
    "direccion": {
        "calle": "Peru",
        "numero": 18,
        "piso": "4",
        "puerta": "4",
        "ciudad": "Barcelona",
        "cp": "08006",
        "pais": "España"
        },
    "telefono": "69863425",
    "email": "hñploj@gmail.com",
    "fecha_registro": "2017-02-10", 
    "recomendador_id": 1    
}])

db.empleado.insertMany([{
    "_id": 1,
    "nombre": "Pepe",
    "telefono": "69832125",
    "email": "hoiuj@gmail.com",
    "fecha_contratacion": "2016-02-05"
    },{
    "_id": 2,
    "nombre": "Marta",
    "telefono": "69888125",
    "email": "hoiujaa@gmail.com",
    "fecha_contratacion": "2016-03-05"    
}])

db.ventas.insert({
    "_id": 1,
    "empleado_id": 1,
    "cliente_id":1,
    "gafas_id": [1],
    "fecha": new Date()
})















