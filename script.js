const core = require('@actions/core');
const github = require('@actions/github');

const adicionadar = async () =>{
try {  
    const numero = core.getInput('numero1', { required: true });
    
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
}
cath (error){
    core.setFailed(error.message);
}


