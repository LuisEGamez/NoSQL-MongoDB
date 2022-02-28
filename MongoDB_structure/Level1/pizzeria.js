show databases

use pizzeria

db.createCollection("clientes")

db.clientes.insertMany([{
    "_id": 1,
    "nombre": "Ana",
    "direccion": {
        "calle": "Llull",
        "numero": 14,
        "piso": "8",
        "puerta": "4",
        "cp": "08005"
        },    
    "localidad_id": 1,
    "telefono": "69857425"
    },{
    "_id": 2,
    "nombre": "Juan",
    "direccion": {
        "calle": "Llull",
        "numero": 148,
        "piso": "7",
        "puerta": "4",
        "cp": "08005"        
        },
    "localidad_id": 1,
    "telefono": "69857885"    
    },{
    "_id": 3,
    "nombre": "Natalia",
    "direccion": {
        "calle": "Mola",
        "numero": 147,
        "piso": "2",
        "puerta": "4",
        "cp": "08105"
        },
    "localidad_id": 2,
    "telefono": "69457885"    
    }
])

db.localidades.insertMany([{
    "_id": 1,
    "nombre": "Barcelona",
    "provincia": 1
    },{
    "_id": 2,
    "nombre": "Hospitalet",
    "provincia": 1   
    },{
    "_id": 3,
    "nombre": "Girona",
    "provincia": 2   
    }
])

db.provincias.insertMany([{
    "_id": 1,
    "nombre": "Barcelona"
    },{
    "_id": 2,
    "nombre": "Girona"
    },{
    "_id": 3,
    "nombre": "Tarragona"
    },{
    "_id": 4,
    "nombre": "Lleida"
    }
])

db.pedidos.insert({
    "_id": 1,
    "fecha-hora": new Date(),
    "cliente_id": 1,
    "tipo": "recoger",
    "producto": [{"producto_id": 1, "cantidad": 2}, {"producto_id": 2, "cantidad": 1}],
    "total": 42.25,
    "tienda_id": 1    
})

db.productos.insertMany([{
    "_id": 1,
    "tipo": "Bebida",
    "nombre": "Coca-cola",
    "descripcion": "refresco con azucar",
    "imagen": "logoCocacola.gpn",
    "precio": 2
    },{
    "_id": 2,
    "tipo": "Pizza",
    "categoria_pizza_id": 1,
    "nombre": "gioconda",
    "descripcion": "pizza de tomate y queso",
    "imagen": "pizzas/logoGio.gpn",
    "precio": 10
    },{
    "_id": 3,
    "tipo": "Pizza",
    "categoria_pizza_id": 2,
    "nombre": "poseidon",
    "descripcion": "pizza de tomate y queso, atun y olivas",
    "imagen": "pizzas/logoPose.gpn",
    "precio": 15
    },{
    "_id": 4,
    "tipo": "Hmaburguesa",
    "nombre": "Classica",
    "descripcion": "100g ternera, queso, lechiga, cebolla",
    "imagen": "logoCocacola.gpn",
    "precio": 5
    }
])

db.categoriasPizzas.insertMany([
    {
    "_id": 1,
    "nombre": "Margaria"
    },{
    "_id": 2,
    "nombre": "Marinera"
    }
])

db.tienda.insert(
    {
    "_id": 1,
    "direccion": {
        "calle": "Llull",
        "numero": 1,
        "piso": "7",        
        "cp": "08005"        
        },
    "localidad_id": 1
    }
)

db.empleados.insertMany([{
    "_id": 1,
    "nombre": "Alberto",
    "apellido": "Garcia",
    "nif": "87594865E",
    "tienda_id": 1,
    "puesto": "cocinero"
    },{
    "_id": 2,
    "nombre": "Alba",
    "apellido": "Lopez",
    "nif": "87598865E",
    "tienda_id": 1,
    "puesto": "repartidora"      
}])


db.pedidos.insert(({
    "_id": 2,
    "fecha-hora": new Date(),
    "cliente_id": 3,
    "tipo": "domicilio",
    "producto": [{"producto_id": 1, "cantidad": 1}, {"producto_id": 3, "cantidad": 1}],
    "total": 7,
    "tienda_id": 1,
    "empleado_repartidor_id": 2,
    "fecha-hora-entrega": new Date()        
}))





