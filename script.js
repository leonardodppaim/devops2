const core = require('@actions/core');
const github = require('@actions/github');


try {  
    const numero = core.getInput('numero', { required: true });
    
    if(numero)
    {
        document.getElementById('resultado').innerHTML = numero;
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Pegadinha do malandro";
    }
    console.log("Concluido");
}

catch  (error){
    core.setFailed(error.message);
}


