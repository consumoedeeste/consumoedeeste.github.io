function validarNumero(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

function calcularDiferencia() {
    let referencia = parseFloat(document.getElementById('referencia').value);
    let actuales = parseFloat(document.getElementById('actuales').value);
    
    if (isNaN(referencia) || isNaN(actuales) || referencia < 0 || actuales < 0 || actuales < referencia) {
        alert("Por favor, el valor actual debe ser mayor al anterior.");
        return;
    }
    
    // Calcular la diferencia
    let consumo = actuales - referencia;
    
    // Colocar el resultado en la casilla de consumo
    document.getElementById('consumo').value = consumo;
    
    // Llamar a la función que calcula el total de la factura
    calcularFactura(consumo);
}

function calcularFactura(consumo) {
    let cargoFijo = 127.83;
    let tarifaBaja = 6.17;
    let tarifaAlta = 8.71;
    let total = 0;

    if (consumo <= 200) {
        total = cargoFijo + (consumo * tarifaBaja);
    } else {
        total = cargoFijo + (200 * tarifaBaja) + ((consumo - 200) * tarifaAlta);
    }

    document.getElementById('resultado').innerText = `El total de la factura es RD$ ${total.toFixed(2)}`;
}
