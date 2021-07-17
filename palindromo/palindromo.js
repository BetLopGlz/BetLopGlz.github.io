

checkPal.addEventListener("click", function () {
    
    console.log("Hello");
    const cadena = document.getElementById("texto").value; //obtener valor de input
    const palindromo = checkPalindromo(cadena); 
    console.log.palindromo;
    window.alert(palindromo);

});

function checkPalindromo(cadena) {
    const minusculas = cadena.replace(/[\W_]/g, "").toLowerCase();//eliminar espacios en blanco y convertir a minusculas
    //split(''),  separa la cadena en un array.
    //reverse() revierte el arreglo.
    //join('') Lo vuelve a convertir en string.
    const strReversed = minusculas.split("").reverse().join(""); 
    console.log(strReversed);
    return strReversed === minusculas ? "es palindromo" : "no es palindromo"; //comparamos cadenas y regresamos el resultado
}