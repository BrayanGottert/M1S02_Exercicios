var alturaIMC, pesoIMC;
pesoIMC = window.prompt("Digite seu peso em kg:");
alturaIMC = window.prompt("Digite sua altura em metros: ");

var calcIMC = (pesoIMC / (alturaIMC * alturaIMC));

if (calcIMC >= 25){
    document.write("Você está acima do peso, procure um médico.");
}
else if (calcIMC<= 24.9 && calcIMC >=18.5){
    document.write("PARABÉNS!! Você esta no peso ideal.");
}
else {
    document.write("Você está abaixo do peso, procure um médico.")
}