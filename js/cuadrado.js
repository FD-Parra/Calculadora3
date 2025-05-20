function calcularCuadrado() {
    const ladoInput = document.getElementById('lado');
    const resultadoDiv = document.getElementById('resultado');
    const ladoError = document.getElementById('lado-error');
    const lado = parseFloat(ladoInput.value);

    if (isNaN(lado) || lado <= 0) {
        ladoError.textContent = 'Por favor, ingresa un lado válido (número positivo).';
        resultadoDiv.textContent = '';
        ladoInput.classList.add('input-error');
        return;
    } else {
        ladoError.textContent = '';
        ladoInput.classList.remove('input-error');
    }

    const perimetro = 4 * lado;
    const area = Math.pow(lado, 2);

    resultadoDiv.innerHTML = `
        <p>Perímetro: ${perimetro.toFixed(2)}</p>
        <p>Área: ${area.toFixed(2)}</p>
    `;
    resultadoDiv.classList.add('resultado-activo');
    setTimeout(() => {
        resultadoDiv.classList.remove('resultado-activo');
    }, 2000);
}