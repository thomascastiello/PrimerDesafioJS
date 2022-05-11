 //Ciclo con for, cantidad de veces que brinda el usuario

let userNewNumber= parseFloat(prompt('Ingrese su número favorito para realizar las iteraciones que desee en consola:'));
for (let i = 0; i <= userNewNumber; i++) {
    console.log(`iteraciones realizadas ${i}`);
}
console.log('Fin del ciclo, vuelva pronto!');




//ciclo con while 
let number = parseInt(prompt('Bienvenidos a la segunda parte del Desafio. \n Debes adivinar el número correcto del 1 al 5'));

while (number != 5) {
    switch (number) {
        case 1:
            alert('Estas muy lejos de adivinarlo.');
            break;

        case 2:
            alert('Te acercas a paso de tortuga.');
            break;

        case 3:
            alert('Estas cerca del número.');
            break;

        case 4:
            alert('QUEMAAAAA!!!!!');
            break;

        default:
            alert('¡¡¡Asegurate de estar poniendo un número del 1 al 5!!!!');
            break;
    }
    number = parseInt(prompt('Bienvenidos a la segunda parte del Desafio. \n Debes adivinar el número correcto del 1 al 5'));
}
alert('¡En hora buena!, gracias por participar!');