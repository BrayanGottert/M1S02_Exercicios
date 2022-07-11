var cont = 0,
  qtdRuim = 0;

while (cont < 4) {
  var avaliar = window.prompt(
    "Qual a sua avaliação da série Stranger Things? (Ruim, Bom ou Excelente)"
  );

  switch (avaliar) {
    case "Ruim":
      qtdRuim++;
      break;
    case "Bom":
      break;
    case "Execelente":
      break;
  }
  cont++;
}

document.write("Número de avaliações 'Ruim': " + qtdRuim);
