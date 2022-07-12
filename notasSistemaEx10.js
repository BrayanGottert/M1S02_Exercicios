var contador = 1,
  nota,
  i,
  somaNotas = 0,
  mediaNotas = 0;
var lista = [];

var nomeAluno = window.prompt("Digite o nome do aluno: ");

while (contador < 5) {
  nota = window.prompt("Digite a nota do aluno (" + contador + "/4):");
  lista.push(parseInt(nota));
  contador++;
}
/* document.write("contador: " + contador);
document.write("<br></br>");
document.write("lista: " + lista);
document.write("<br></br>");
document.write("lista.length: " + lista.length);
document.write("<br></br>");
 */

for (i = 0; i < lista.length; i++) {
  somaNotas = parseInt(somaNotas) + parseInt(lista[i]);
}

/* document.write("soma: " +somaNotas);
document.write("<br></br>"); */

mediaNotas = somaNotas / lista.length;
/* document.write("media: " +mediaNotas);
document.write("<br></br>"); */

document.write("O aluno " + nomeAluno + " teve media: " + mediaNotas);
document.write("<br></br>");

if (mediaNotas >= 7) {
  document.write("Status: Aprovado!");
} else if (mediaNotas < 7) {
  document.write("Status: Reprovado!");
} else {
  document.write("Recalcular");
}


/* var contador = 0,
  nota,
  i,
  somaNotas = 0,
  mediaNotas = 0;
var lista = [];

var nomeAluno = "Brayan";

while (contador < 4) {
  nota = 8;
  lista.push(nota);
  contador++;
}

console.log(lista);
console.log(<br></br>);

for (i = 0; i > lista.length; i++) {
  somaNotas = parseInt(somaNotas) + parseInt(lista[i]);
}

console.log(somaNotas);
console.log(<br></br>);

mediaNotas = somaNotas / lista.length;
console.log(mediaNotas);
console.log(<br></br>);

console.log("O aluno " + nomeAluno + " teve média: " + mediaNotas);
console.log(<br></br>);
if (mediaNotas >= 7) {
  console.log("Status: Aprovado!");
} else if (mediaNotas < 7) {
  console.log("Status: Reprovado!");
} else {
  console.log("Recalcular");
} */