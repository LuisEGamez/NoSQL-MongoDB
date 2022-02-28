use youtube

db.usuarios.insertMany([{
    "_id": 1,
    "email": "abcde@gmail.com",
    "password": "123456",
    "nombre": "Ana_458",
    "fecha-nacimiento": "1992-05-10",
    "nacionalidad": "España",
    "cp": "08005",
    "canal_id": 1
    },{
    "_id": 2,
    "email": "abcdefg@gmail.com",
    "password": "123456789",
    "nombre": "LuisGA",
    "fecha-nacimiento": "1992-12-26",
    "nacionalidad": "España",
    "cp": "08005",
    "canales_sub_id": [1,8]    
}])

db.canales.insertOne({
    "_id": 1,    
    "usuario_id": 1,
    "nombre": "El canal de Anetta",
    "descripcion": "canal dedicado a la pintura",
    "fecha-creacion": new Date(),
    "subcriptores_id": [2,3]
})

db.comentarios.insertMany([{
    "_id": 1,
    "texto": "Me encanta este video",
    "fecha-hora": ISODate("2021-10-19T16:36:14.197Z"),
    "usuario_id": 1,
    "video_id": 1
    },{
    "_id": 2,
    "texto": "Odio este video",
    "fecha-hora": ISODate("2021-10-19T16:36:14.197Z"),
    "usuario_id": 2,
    "video_id": 2

}])

db.likeComents.insert({
    "_id": 1,
    "fecha": new Date(),
    "comentario_id": 1,
    "usuario_id": 2  
})

db.DislikeComents.insert({
    "_id": 1,
    "fecha": new Date(),
    "comentario_id": 2,
    "usuario_id": 1 
})

db.videos.insertMany([{
    "_id":1,
    "titulo": "El molino",
    "fecha-publicacion": new Date(),
    "estado": "publico",
    "desripcion": "Video sobre un molino de agua",
    "thumbnail": "/elmolino/mini.jpg",
    "tamaño(Mb)": 59,
    "num_likes": 1,
    "num_dislikes": 1,
    "etiqueta_id": [2,3],
    "usuario_id": 1,
    "playlist_id":[1]
    },{
    "_id":2,
    "titulo": "El agua",
    "fecha-publicacion": new Date(),
    "estado": "publico",
    "desripcion": "Video sobre el ciclo del agua",
    "thumbnail": "/elagua/mini.jpg",
    "tamaño(Mb)": 80,
    "num_likes": 2,
    "num_dislikes": 0,
    "etiqueta_id": [1,3],
    "usuario_id": 2,
    "playlist_id":[2]
    },{
    "_id":3,
    "titulo": "El viento",
    "fecha-publicacion": new Date(),
    "estado": "privado",
    "desripcion": "Video sobre el ciclo del viento",
    "thumbnail": "/elviento/mini.jpg",
    "tamaño(Mb)": 90,
    "num_likes": 0,
    "num_dislikes": 0,
    "etiqueta_id": [2],
    "usuario_id": 2,
    "playlist_id":[1,2]
    },{
    "_id":4,
    "titulo": "El fuego",
    "fecha-publicacion": new Date(),
    "estado": "oculto",
    "desripcion": "Video sobre el ciclo del fuego",
    "thumbnail": "/elfuego/mini.jpg",
    "tamaño(Mb)": 100,
    "num_likes": 1,
    "num_dislikes": 0,
    "etiqueta_id": [2],
    "usuario_id": 2,
    "playlist_id":[1,2]
}])

db.playlists.insertMany([{
    "_id": 1,
    "nombre": "Varios",
    "descripcion": "Videdos random",
    "fecha-creacion": new Date(),
    "estado": "publica",
    "usuario_id": 1,
    "videos_id": [1,3,4]
    },{
    "_id": 2,
    "nombre": "Elementos",
    "descripcion": "Videdos sobre los elementos",
    "fecha-creacion": new Date(),
    "estado": "privada",
    "usuario_id": 2,
    "videos_id": [2,3,4]
}])

db.etiquetas.insertMany([{
    "_id": 1,
    "nombre": "ciencia",
    "video_id": [2,3,4]
    },{
    "_id": 2,
    "nombre": "construcciones",
    "video_id": [1]
    },{
    "_id": 3,
    "nombre": "acuatico",
    "video_id": [1,2]
}])


db.likes.insert({
    "_id": 1,
    "fecha": new Date(),
    "video_id": 1,
    "usuario_id": 2  
})

db.Dislikes.insert({
    "_id": 1,
    "fecha": new Date(),
    "video_id": 2,
    "usuario_id": 1 
})












