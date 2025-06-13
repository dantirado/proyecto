function verificarParidad() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(numero)) {
    resultado.textContent = "Por favor, ingresa un número válido.";
    return;
  }

  if (numero % 2 === 0) {
    resultado.textContent = `${numero} es un número PAR.`;
  } else {
    resultado.textContent = `${numero} es un número IMPAR.`;
  }
}