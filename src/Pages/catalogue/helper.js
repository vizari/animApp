
export const dictionaryStatus = {
    "FINISHED": "Finalizado",
    "RELEASING": "EN CURSO",
    "NOT_YET_RELEASED" :"Aún no liberado",
    "CANCELLED" : "Cancelado",
    "HIATUS":"En pausa",
}

export const getStatus = (status) =>{
       return  dictionaryStatus[status]
}

export const notImagen = "https://www.webempresa.com/foro/wp-content/uploads/wpforo/attachments/3200/318277=80538-Sin_imagen_disponible.jpg"
