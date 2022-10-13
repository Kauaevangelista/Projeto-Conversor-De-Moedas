function converter() {
    var valorElemento = document.getElementById("valor");

    var valor = valorElemento.value;

    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmReal = valorEmDolarNumerico * 5.26;

    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido = "O resultado em real é R$ " + valorEmReal;

    elementoValorConvertido.innerHTML = valorConvertido;

}

function converterEmReal() {
    var valorElementoBtc = document.getElementById("valorEmBTC");

    var valorBtc = valorElementoBtc.value;

    var valorEmBitcoin = parseFloat(valorBtc);

    var valorDeBitcoinParaReal = valorEmBitcoin * 300.000;

    var valorDeBitcoinParaRealFixado = valorDeBitcoinParaReal.toFixed(3)

    var elementoRealConvertido = document.getElementById("valorConvertidoEmReal");

    var valorConvertidoDoBTCEmReal = "O resultado em real é R$ " + valorDeBitcoinParaRealFixado;

    elementoRealConvertido.innerHTML = valorConvertidoDoBTCEmReal;

}