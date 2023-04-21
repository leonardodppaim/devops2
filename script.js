const core = require('@actions/core');
const github = require('@actions/github');

const adicionar = async() => {
    try{
        
   
    var texto = core.getInput('numero');
    if(texto)
    {
        console.log("Voce digitou " + texto);
    }
    else
    {
        console.log("Nada ...");
    }
    }
    catch (error){
        console.log("Erro");
    }
}




