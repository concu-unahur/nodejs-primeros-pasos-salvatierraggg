function siguiente(x, next) {
  next(x + 1)
}

function doble(x,next){
  next(x*2)
}

function siguienteDelDoble(x,next){
  next(siguiente(x,doble/*(x,???)*/)) 
}

function dobleDelSiguiente(x,next){
  siguiente(x,doble(x,next))
}


siguiente(8,resultado=>{
  console.log("siguiente de 8 =>",resultado)
})

doble(8,resultado=>{
  console.log("doble de 8 =>",resultado)
})
siguienteDelDoble(8,resultado=>{
  console.log("siguienteDelDoble de 8 =>",resultado)
})

/*dobleDelSiguiente(8,resultado=>{
  console.log("dobleDelSiguiente de 8 =>",resultado)
})*/