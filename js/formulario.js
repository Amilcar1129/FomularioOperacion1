function realizarOperacion(operacion) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    let resultado = 0;

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    switch (operacion) {
        case 'suma':
            resultado = numero1 + numero2;
            break;
        
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}
