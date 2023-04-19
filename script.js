function adicionar (){
    var numero = document.getElementById('entrada1').innerHTML;
    if(numero)
    {
        document.getElementById('resultado').innerHTML = numero;
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}

function teste (){
    document.getElementById('resultado').innerHTML = "teste";
}