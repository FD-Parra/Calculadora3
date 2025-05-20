function calcularCirculo() {
    const radioInput = document.getElementById('radio');
    const resultadoDiv = document.getElementById('resultado');
    const radioError = document.getElementById('radio-error');
    const radio = parseFloat(radioInput.value);

    // Validar la entrada
    if (isNaN(radio) || radio <= 0) {
        radioError.textContent = 'Por favor, ingresa un radio válido (número positivo).';
        resultadoDiv.textContent = '';
        // Agregar clase de error al input (ejemplo de modificación del DOM)
        radioInput.classList.add('input-error');
        return;
    } else {
        radioError.textContent = '';
        // Eliminar clase de error del input (ejemplo de modificación del DOM)
        radioInput.classList.remove('input-error');
    }

    const perimetro = 2 * Math.PI * radio;
    const area = Math.PI * Math.pow(radio, 2);

    resultadoDiv.innerHTML = `
        <p>Perímetro: ${perimetro.toFixed(2)}</p>
        <p>Área: ${area.toFixed(2)}</p>
    `;

    // Ejemplo de agregar una clase al resultado div
    resultadoDiv.classList.add('resultado-activo');

    // Ejemplo de eliminar una clase después de un tiempo
    setTimeout(() => {
        resultadoDiv.classList.remove('resultado-activo');
    }, 2000);
}