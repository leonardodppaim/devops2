const core = require('@actions/core');
const github = require('@actions/github');


try {  
    const numero = core.getInput('numero', { required: true });
    
    if(numero)
    {
        console.log(numero);
       
    }
    else
    {
        console.log("Falhou");
        
    }
    
}

catch  (error){
    core.setFailed(error.message);
}


