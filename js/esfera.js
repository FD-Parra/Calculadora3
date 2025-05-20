function calcularEsfera() {
    const radioInput = document.getElementById('radio');
    const resultadoDiv = document.getElementById('resultado');
    const radioError = document.getElementById('radio-error');
    const radio = parseFloat(radioInput.value);

    if (isNaN(radio) || radio <= 0) {
        radioError.textContent = 'Por favor, ingresa un radio válido (número positivo).';
        resultadoDiv.textContent = '';
        radioInput.classList.add('input-error');
        return;
    } else {
        radioError.textContent = '';
        radioInput.classList.remove('input-error');
    }

    const areaSuperficial = 4 * Math.PI * Math.pow(radio, 2);
    const volumen = (4/3) * Math.PI * Math.pow(radio, 3);

    resultadoDiv.innerHTML = `
        <p>Área Superficial: ${areaSuperficial.toFixed(2)}</p>
        <p>Volumen: ${volumen.toFixed(2)}</p>
    `;
    resultadoDiv.classList.add('resultado-activo');
    setTimeout(() => {
        resultadoDiv.classList.remove('resultado-activo');
    }, 2000);
}