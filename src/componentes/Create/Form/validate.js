

  //VALIDACION DEL FORMULARIO
  export default function validate(input){

    let errores = {};
  
    if(!input.name){
      errores.name = "No name information"
    }else if(!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(input.name)){   
      errores.name = "Error in name format"
    }

    if(!input.difficulty){
      errores.difficulty = "There is not information on the difficulty"
    }else if(!typeof input.rating === "number"){   
    errores.difficulty = "The difficulty is not a number"
    }else if (input.difficulty > 5 || input.difficulty < 1){
      errores.difficulty = "The difficulty field is not within the acceptable range."
    }

    if(!input.duration){
      errores.duration = "No duration information"
    } else if (!/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(input.duration)){
      errores.duration = "Error in duration format"
    }
    
    if(!input.seassion){
      errores.seassion = "No seassion information"
    }
    
    return errores
  }

