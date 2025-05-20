function calcularPiramide() {
    const baseInput = document.getElementById('base');
    const alturaInput = document.getElementById('altura');
    const resultadoDiv = document.getElementById('resultado');
    const baseError = document.getElementById('base-error');
    const alturaError = document.getElementById('altura-error');
    const base = parseFloat(baseInput.value);
    const altura = parseFloat(alturaInput.value);

    if (isNaN(base) || base <= 0) {
        baseError.textContent = 'Por favor, ingresa un lado de la base válido (número positivo).';
        resultadoDiv.textContent = '';
        baseInput.classList.add('input-error');
        return;
    } else {
        baseError.textContent = '';
        baseInput.classList.remove('input-error');
    }

    if (isNaN(altura) || altura <= 0) {
        alturaError.textContent = 'Por favor, ingresa una altura válida (número positivo).';
        resultadoDiv.textContent = '';
        alturaInput.classList.add('input-error');
        return;
    } else {
        alturaError.textContent = '';
        alturaInput.classList.remove('input-error');
    }

    const areaBase = Math.pow(base, 2);
    const volumen = (1/3) * areaBase * altura;

    // Calcular el área lateral y total (un poco más complejo)
    const apotema = Math.sqrt(Math.pow(altura, 2) + (Math.pow(base, 2) / 4));
    const areaLateral = 2 * base * apotema;  // 4 triángulos, cada uno con base y apotema
    const areaTotal = areaBase + areaLateral;

    resultadoDiv.innerHTML = `
        <p>Área de la Base: ${areaBase.toFixed(2)}</p>
        <p>Área Lateral: ${areaLateral.toFixed(2)}</p>
        <p>Área Total: ${areaTotal.toFixed(2)}</p>
        <p>Volumen: ${volumen.toFixed(2)}</p>
    `;
    resultadoDiv.classList.add('resultado-activo');
    setTimeout(() => {
        resultadoDiv.classList.remove('resultado-activo');
    }, 2000);
}