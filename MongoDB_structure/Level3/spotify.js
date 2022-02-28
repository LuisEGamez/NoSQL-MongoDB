use sopotify

db.usuarios.insertMany([{
    "_id": 1,
    "email": "abcde@gmail.com",
    "password": "123456",
    "nombre": "Ana_458",
    "fecha-nacimiento": "1992-05-10",
    "sexo": "M",
    "cp": "08005",
    "premiun": "S",
    "subcripcion":
        [{
            "_id": 1,
            "fecha_inicio": "2020-05-06",
            "fecha_renovación": "2021-05-06,
            "pago": "P",
            "paypal_info":
                {"usuario": "asdf@gmail.com"}            
        }],
    "canciones_favoritas_id": [1,2]
    },{
    "_id": 2,
    "email": "abcdefg@gmail.com",
    "password": "123456789",
    "nombre": "LuisGA",
    "fecha-nacimiento": "1992-12-26",
    "sexo": "V",
    "cp": "08005",
    "premiun": "N",
    "artista_favorito_id": [1,3]
    },{
    "_id": 3,
    "email": "abcdesssfg@gmail.com",
    "password": "453456789",
    "nombre": "LuiciaA",
    "fecha-nacimiento": "1997-11-16",
    "sexo": "M",
    "cp": "08005",
    "premiun": "N",
    "canciones_favoritas_id": [1,3],
    "artista_favorito_id": [1,2]    
    },{
    "_id": 4,
    "email": "asssfg@gmail.com",
    "password": "453466789",
    "nombre": "AntonioHH",
    "fecha-nacimiento": "1999-10-17",
    "sexo": "H",
    "cp": "08005",
    "premiun": "S",
    "subcripcion":
        [{
            "_id": 1,
            "fecha_inicio": "2019-04-06",
            "fecha_renovación": "2021-04-06,
            "pago": "T",
            "tarjeta_info":
                {"numero": "5874587458526",
                 "fecha_cad": "2026-08",
                 "cvc": "254"}            
        }],
    "canciones_favoritas_id": [1]
}])

db.playlists.insertMany([
    {
    "_id": 1,
    "usuario_id":1,
    "titulo": "Exitos españoles",
    "num_canciones": 3,
    "fecha_creacion": new Date(),
    "estado": "A",
    "compartida": "S",
    "seguidores_id": [2,4],
    "canciones": [
        {
        "cancion_id":1,
        "usuario_id":2,
        "fecha": new Date()
        },{
        "cancion_id":2,
        "usuario_id":2,
        "fecha": new Date()
        },{
        "cancion_id":3,
        "usuario_id":4,
        "fecha": new Date()
        }
    ]},{
    "_id": 2,
    "usuario_id":3,
    "titulo": "Exitos pop",
    "num_canciones": 3,
    "fecha_creacion": new Date(),
    "estado": "A",
    "compartida": "N",
    "canciones": [
        {
        "cancion_id":1,
        "usuario_id":2,
        "fecha": new Date()
        },{
        "cancion_id":3,
        "usuario_id":2,
        "fecha": new Date()
        }
    ]},{
    "_id": 3,
    "usuario_id":2,
    "titulo": "Exitos rock",
    "num_canciones": 3,
    "fecha_creacion": new Date(),
    "estado": "D",
    "fecha-eliminacion": "2020-02-05",
    "compartida": "N",
    "canciones": [
        {
        "cancion_id":2,
        "usuario_id":2,
        "fecha": new Date()
        },{
        "cancion_id":3,
        "usuario_id":2,
        "fecha": new Date()
        }
    ]  
}])

db.canciones.insertMany([{
    "_id": 1,
    "titulo": "Luna verde",
    "duracion(seg)": 180,
    "num_reproducciones": 20,
    },{
    "_id": 2,
    "titulo": "Ave Maria",
    "duracion(seg)": 195,
    "num_reproducciones": 30,
    "albun_id": 1
    },{
    "_id": 3,
    "titulo": "Corazon partio",
    "duracion(seg)": 175,
    "num_reproducciones": 50,
    "albun_id": 2
    },{
    "_id": 4,
    "titulo": "Soldadito Marinero",
    "duracion(seg)": 215,
    "num_reproducciones": 30,
    "albun_id": 3  
}])

db.albumes.insertMany([{
    "_id":1,
    "titulo":"Pop Mix",
    "anyo_publicación":  "2015",
    "imagen": "/imagen.jpg",
    "artista_id": 1
    },{
    "_id":2,
    "titulo":"Romantico Mix",
    "anyo_publicación":  "2016",
    "imagen": "/imagen.jpg",
    "artista_id": 2
    },{
    "_id":3,
    "titulo":"Rock Mix",
    "anyo_publicación":  "2016",
    "imagen": "/imagen.jpg",
    "artista_id": 3    
}])

db.artistas.insertMany([{
    "_id": 1,
    "nombre": "Pepe el cantador",
    "imagen": "/imagen.jpg",
    "atistas_parecidos_id": [2,3]
    },{
    "_id": 2,
    "nombre": "Juana la que canta",
    "imagen": "/imagen.jpg",
    "atistas_parecidos_id": [1,3]
    },{
    "_id": 3,
    "nombre": "David Gala",
    "imagen": "/imagen.jpg",
    "atistas_parecidos_id": [1,2]
}])

db.pagos.insertMany([{
    "_id":1,
    "usuario_id":1,
    "fecha": new Date(),
    "total":5
    },{
    "_id":2,
    "usuario_id":1,
    "fecha": new Date(),
    "total":7
    },{
    "_id":3,
    "usuario_id":4,
    "fecha": new Date(),
    "total":6
}])












