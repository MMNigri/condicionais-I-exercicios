function quetionario(idade, escolaridade, superior) {

    if (idade >=18) {
        console.log("A pessoa já atingiu a maior idade")
    
    }else
    {
        console.log("A pessoa é menor de idade")

    }
    if (escolaridade === true){
        console.log("A pessoa terminou o ensino médio")

    }else{
        console.log("A pessoa não terminou o ensino médio")

    }
    if (superior === true){
        console.log("A pessoa está cursando alguma faculdade")
        
    }else{
        console.log("A pessoa não está cursando alguma faculdade")


    }

}

quetionario(26,true,true)
quetionario(17,false,false)
