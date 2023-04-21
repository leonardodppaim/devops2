try {
    var numero = document.getElementById('entrada1').innerHTML;
    if(numero)
    {
        document.getElementById('resultado').innerHTML = numero;
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
    console.log("Concluido");
}
catch (error){
    cosole.log("erro");
}

