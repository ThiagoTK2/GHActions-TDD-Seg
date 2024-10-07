function fatorial(n) {
  if (typeof n !== 'number') {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n < 0) {
    throw new Error("Não existe fatorial de número negativo");
  }
  if (n === 0) return 1; // Fatorial de 0 é 1
  return n === 1 ? 1 : n * fatorial(n - 1); // Fatorial recursivo
}

function fibonacci(n) {
  if (typeof n !== 'number') {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n < 0) {
    throw new Error("Não existe Fibonacci de número negativo");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  let a = 0, b = 1, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function ehPrimo(n) {
  if (typeof n !== 'number') {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n <= 1) return false; // Números menores que 2 não são primos
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false; // Se for divisível por outro número além de 1 e ele mesmo
  }
  return true;
}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
}