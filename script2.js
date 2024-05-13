let altura = 5;
let triangulo = "";

for (let i = 1; i <= altura; i++) {
  let fila = "";
  for (let j = 1; j <= i; j++) {
    fila += "#";
  }
  triangulo += fila + "\n";
}

console.log(triangulo);