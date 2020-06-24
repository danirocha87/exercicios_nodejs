let rs =require("readline-sync")

let dia  = rs.questionFloat("Qual seu dia de nascimento?")
let mes  = rs.questionFloat("Qual seu mes de nascimento?")

if(mes === 3){
    if(dia >=21){
        console.log("Voce é de Aries")
    } else{
        console.log("Peixes")
    }
}
else if(mes === 4){
    if(dia >=21){
        console.log("Touro")
    }else{
         console.log("ARIES")
    }
}
else if(mes ===5){
     if(dia >=21){
        console.log("Gemeos")
     } else{
         console.log("Touro")
     }
    }  
else if(mes === 6){
    if( dia >=21){
        console.log("Cancer")
    } else {
        console.log("Gemeos")
    }

}else if( mes ===7){
    if(dia >=23){
        console.log("Leao")
    }else{
        console.log("Cancer")
    } 
} else if(mes === 8){
    if(dia >=23){
        console.log("Virgem")
    } else{
        console.log("Leao")
    }
}  else if(mes ===9){
    if ( dia >=23){
        console.log("libra")
    }else{
        console.log("virgem")
    }
} else if(mes ===10){
    if(dia >= 23){
        console.log("Escorpiao")
    }else{
        console.log("Libra")
    }
} else if(mes ===11){
     if (dia >=22){
     console.log("Sagitario")
}else{
    console.log("Escorpiao")
}
}else if(mes ===12){
    if(dia >=22){
     console.log("Capricornio")
    }else{
        console.log("Sagitario")
    }
}else if (mes ===1){
     if( dia >=21){
     console.log("Aquario")
}else{
    console.log("Capricornio")
}
}else if(mes ===2){
       if ( dia >=19){
    console.log("Peixes")
       }else{
           console.log("Aquario")
       }
}


 