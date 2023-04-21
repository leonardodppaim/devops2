const core = require('@actions/core');
const github = require('@actions/github');


try {  
    const numero = core.getInput('numero', { required: true });
    
    if(numero)
    {
        console.log("Concluido");
        document.getElementById('resultado').innerHTML = numero;
    }
    else
    {
        console.log("Falhou");
        document.getElementById('resultado').innerHTML = "Pegadinha do malandro";
    }
    
}

catch  (error){
    core.setFailed(error.message);
}


