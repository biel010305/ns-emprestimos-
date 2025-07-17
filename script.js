
document.getElementById("simulador-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const valor = parseFloat(document.getElementById("valor").value);
  const parcelas = parseInt(document.getElementById("parcelas").value);
  const juros = parseFloat(document.getElementById("juros").value) / 100;

  const parcela = (valor * (1 + juros)) / parcelas;
  const total = parcela * parcelas;

  document.getElementById("resultado").innerHTML = `
    Valor da Parcela: R$ ${parcela.toFixed(2)}<br>
    Total com Juros: R$ ${total.toFixed(2)}
  `;
});
