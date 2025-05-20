function calcularTriangulo() {
    const baseInput = document.getElementById('base');
    const alturaInput = document.getElementById('altura');
    const lado1Input = document.getElementById('lado1');
    const lado2Input = document.getElementById('lado2');
    const lado3Input = document.getElementById('lado3');
    const resultadoDiv = document.getElementById('resultado');
    const baseError = document.getElementById('base-error');
    const alturaError = document.getElementById('altura-error');
    const lado1Error = document.getElementById('lado1-error');
    const lado2Error = document.getElementById('lado2-error');
    const lado3Error = document.getElementById('lado3-error');

    const base = parseFloat(baseInput.value);
    const altura = parseFloat(alturaInput.value);
    const lado1 = parseFloat(lado1Input.value);
    const lado2 = parseFloat(lado2Input.value);
    const lado3 = parseFloat(lado3Input.value);

    let area = '';
    let perimetro = '';
    let hasError = false;

    if (!isNaN(base) && base > 0 && !isNaN(altura) && altura > 0) {
        area = 0.5 * base * altura;
        baseError.textContent = '';
        alturaError.textContent = '';
        baseInput.classList.remove('input-error');
        alturaInput.classList.remove('input-error');
    } else if ((!isNaN(base) && base > 0) || (!isNaN(altura) && altura > 0)) {
        if (isNaN(base) || base <= 0) {
            baseError.textContent = 'Ingresa una base válida para el área.';
            baseInput.classList.add('input-error');
            hasError = true;
        } else {
            baseError.textContent = '';
            baseInput.classList.remove('input-error');
        }
        if (isNaN(altura) || altura <= 0) {
            alturaError.textContent = 'Ingresa una altura válida para el área.';
            alturaInput.classList.add('input-error');
            hasError = true;
        } else {
            alturaError.textContent = '';
            alturaInput.classList.remove('input-error');
        }
    }

    if (!isNaN(lado1) && lado1 > 0 && !isNaN(lado2) && lado2 > 0 && !isNaN(lado3) && lado3 > 0) {
        perimetro = lado1 + lado2 + lado3;
        lado1Error.textContent = '';
        lado2Error.textContent = '';
        lado3Error.textContent = '';
        lado1Input.classList.remove('input-error');
        lado2Input.classList.remove('input-error');
        lado3Input.classList.remove('input-error');
    } else if ((!isNaN(lado1) && lado1 > 0) || (!isNaN(lado2) && lado2 > 0) || (!isNaN(lado3) && lado3 > 0)) {
        if (isNaN(lado1) || lado1 <= 0) {
            lado1Error.textContent = 'Ingresa el lado 1 para el perímetro.';
            lado1Input.classList.add('input-error');
            hasError = true;
        } else {
            lado1Error.textContent = '';
            lado1Input.classList.remove('input-error');
        }
        if (isNaN(lado2) || lado2 <= 0) {
            lado2Error.textContent = 'Ingresa el lado 2 para el perímetro.';
            lado2Input.classList.add('input-error');
            hasError = true;
        } else {
            lado2Error.textContent = '';
            lado2Input.classList.remove('input-error');
        }
        if (isNaN(lado3) || lado3 <= 0) {
            lado3Error.textContent = 'Ingresa el lado 3 para el perímetro.';
            lado3Input.classList.add('input-error');
            hasError = true;
        } else {
            lado3Error.textContent = '';
            lado3Input.classList.remove('input-error');
        }
    }

    if (hasError) {
        resultadoDiv.textContent = '';
        return;
    }

    let resultadoHTML = '';
    if (area !== '') {
        resultadoHTML += `<p>Área: ${area.toFixed(2)}</p>`;
    }
    if (perimetro !== '') {
        resultadoHTML += `<p>Perímetro: ${perimetro.toFixed(2)}</p>`;
    }

    resultadoDiv.innerHTML = resultadoHTML;
    resultadoDiv.classList.add('resultado-activo');
    setTimeout(() => {
        resultadoDiv.classList.remove('resultado-activo');
    }, 2000);
}