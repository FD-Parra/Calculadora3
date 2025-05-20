function calcularCubo() {
    const aristaInput = document.getElementById('arista');
    const resultadoDiv = document.getElementById('resultado');
    const aristaError = document.getElementById('arista-error');
    const arista = parseFloat(aristaInput.value);

    if (isNaN(arista) || arista <= 0) {
        aristaError.textContent = 'Por favor, ingresa una arista válida (número positivo).';
        resultadoDiv.textContent = '';
        aristaInput.classList.add('input-error');
        return;
    } else {
        aristaError.textContent = '';
        aristaInput.classList.remove('input-error');
    }

    const areaTotal = 6 * Math.pow(arista, 2);
    const volumen = Math.pow(arista, 3);

    resultadoDiv.innerHTML = `
        <p>Área Total: ${areaTotal.toFixed(2)}</p>
        <p>Volumen: ${volumen.toFixed(2)}</p>
    `;
    resultadoDiv.classList.add('resultado-activo');
    setTimeout(() => {
        resultadoDiv.classList.remove('resultado-activo');
    }, 2000);
}