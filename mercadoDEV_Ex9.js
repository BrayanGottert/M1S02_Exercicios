var qtd1 = 0,
  qtd2 = 0,
  qtd3 = 0,
  qtd4 = 0,
  qtd5 = 0,
  fecharPedido = false,
  produto,
  maiotQtd;

while (fecharPedido == false) {
  produto = window.prompt(
    "Digite o número conforme o produto que deseja comprar 1-5, ou 6 para fechar seu pedido:" +
      "<br> <ul> <li>(1) Hortifruti <li>(2) Laticínios <li>(3) Carnes <li>(4) Peixes <li>(5) Aves <li>(6) Fechar pedido </ul>"
  );
  // document.write(produto + "<br>"); *linha de teste

  switch (produto) {
    case "1":
      let input1 = window.prompt(
        "Quantos itens Hortifruti você deseja comprar?"
      );
      qtd1 = qtd1 + parseInt(input1);
      break;
    case "2":
      let input2 = window.prompt(
        "Quantos itens Laticínios você deseja comprar?"
      );
      qtd2 = qtd2 + parseInt(input2);
      break;
    case "3":
      let input3 = window.prompt("Quantos itens Carnes você deseja comprar?");
      qtd3 = qtd3 + parseInt(input3);
      break;
    case "4":
      let input4 = window.prompt("Quantos itens Peixes você deseja comprar?");
      qtd4 = qtd4 + parseInt(input4);
      break;
    case "5":
      let input5 = window.prompt("Quantos itens Aves você deseja comprar?");
      qtd5 = qtd5 + parseInt(input5);
      break;
    case "6":
      fecharPedido = true;
      break;
    default:
        window.prompt("Produto não listado, escolha novamente");
        break;

  }
  //  fecharPedido = true *linha de teste 1
  // document.write("qtd1: " + qtd1 + "<br>"); * linhas de teste
  // document.write("qtd2: " + qtd2 + "<br>");
  // document.write("qtd3: " + qtd3 + "<br>");
  // document.write("qtd4: " + qtd4 + "<br>");
  // document.write("qtd5: " + qtd5 + "<br>");
}
const arrQtd = [
  parseInt(qtd1),
  parseInt(qtd2),
  parseInt(qtd3),
  parseInt(qtd4),
  parseInt(qtd5),
];

const arrQtdOrdenada = arrQtd.sort((a, b) => a - b);
var maiorQtd = arrQtdOrdenada[4];

if (maiorQtd == 0){
    document.write(
        "Nenhum Produto comprado!"
      );
      maiorQtd = null;
}
if (maiorQtd == qtd5) {
  document.write(
    "Entre os produtos, você comprou mais Aves: " + qtd5 + " unidades <br>"
  );
}
if (maiorQtd == qtd4) {
  document.write(
    "Entre os produtos, você comprou mais Peixes: " + qtd4 + " unidades <br>"
  );
}
if (maiorQtd == qtd3) {
  document.write(
    "Entre os produtos, você comprou mais Carnes: " + qtd3 + " unidades <br>"
  );
}
if (maiorQtd == qtd2) {
  document.write(
    "Entre os produtos, você comprou mais Laticínios: " +
      qtd2 +
      " unidades <br>"
  );
}
if (maiorQtd == qtd1) {
  document.write(
    "Entre os produtos, você comprou mais Hortifruti: " +
      qtd1 +
      " unidades <br>"
  );
}
//  document.write(arrQtd);                 *linha d teste
//  document.write("<br>");
//  document.write(arrQtd.sort((a,b)=>a-b));

//document.write(maiorQtd);

/* switch(maiorQtd){  *Não funciona se dois ou mais produtos comprados com mesma quantidades  forem os mais comprados...
    case qtd1:
        document.write("Entre os produtos, você comprou mais Hortifruti: " + qtd1 + " unidades");
    break;
    case qtd2:
        document.write("Entre os produtos, você comprou mais Laticínios: " + qtd2 + " unidades");
    break;
    case qtd3:
        document.write("Entre os produtos, você comprou mais Carnes: " + qtd3 + " unidades");
    break;
    case qtd4:
        document.write("Entre os produtos, você comprou mais Peixes: " + qtd4 + " unidades");
    break;
    case qtd5:
        document.write("Entre os produtos, você comprou mais Aves: " + qtd5 + " unidades");
    break;
} */
