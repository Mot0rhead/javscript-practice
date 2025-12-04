/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let i =0 ; i<=20; i++){
    console.log(i)
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let resultado = 0
for(let i =0 ; i<=100; i++){
   resultado = resultado +i
}
console.log(resultado)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for(let i =0 ; i<=50; i++){
  if(i%2==0){
    console.log("Numero par"+i)
  }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let arrayNombres = ['Juan','Maria','Chema']
for (let i =0 ; i<= arrayNombres.length-1;i++){
    console.log(arrayNombres[i])
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadenatexto = 'Juan'.toLowerCase()
let contador = 0
let vocales = ['a', 'e', 'i', 'o', 'u']
for (let i =0 ; i<= cadenatexto.length-1;i++){
    console.log(`La letra ${cadenatexto.charAt(i)} es vocal?  ${vocales.includes(cadenatexto[i])}`)
   if(vocales.includes(cadenatexto[i])){
     contador++
   }
   console.log(`Número de vocales: ${contador}`)
}

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let arrayNumeros = [1,2,3,4]
for (let i =0 ; i<= arrayNombres.length-1;i++){
    console.log(arrayNombres[i])
}
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10