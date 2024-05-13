let numero = 0; 
while (numero <= 10) {
if (numero == 0){
    console.log("No es un numero Natural")
    numero++
    continue
}
  if (numero % 2 === 0) {
    console.log(numero, "es par");
  } else {
    console.log(numero, "es impar");
  }

  numero++
}