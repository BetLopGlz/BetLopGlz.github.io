checkLarge.addEventListener('click', function () {
  const cadena = document.getElementById('texto').value //obtener valor de textArea
  const large = checkMoreLarge(cadena)
  console.log(large)
  window.alert('La palabra más larga es: ' + large)
})

checkRepetidas.addEventListener('click', function () {
  console.log("Hello");
  const cadena = document.getElementById('textoRep').value //obtener valor de textArea
  resultado=frequentWord(cadena);
  window.alert(resultado);
})

multiplos.addEventListener('click', function () {
  console.log('Multiplos')
  mostrarNumeros()
  window.alert('Fin!!')
})

suma.addEventListener('click', function () {
  const cadena = document.getElementById('numeros').value //obtener valor de textArea
  resultado = squareSum(cadena)
  window.alert('El resultado es: ' + resultado)
})

trimestre.addEventListener('click', function () {
  const numero = document.getElementById('mes').value //obtener valor de textArea
  var month = parseInt(numero)
  var mesNombre = obtenerMes(month)
  resultado = quarterYear(month)
  window.alert('El mes es: ' + mesNombre + ', ' + resultado + ' trimestre')
})

pares.addEventListener('click', function () {
  const cadena = document.getElementById('numerosPares').value //obtener valor de textAre
  resultado = getPares(cadena)
  window.alert('Obtuve array con los numeros pares')
})

function checkMoreLarge (cadena) {
  var palabra = cadena.split(' ') //separar texto en palabras y guardar en array
  var resultado = ''

  for (var i = 0; i < palabra.length; i++) {
    //recorrer array
    if (palabra[i].length > resultado.length) {
      //validar si la palabra actual es mayor a resultado almacenado
      resultado = palabra[i]
    }
  }
  return resultado
}

function mostrarNumeros () {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log('fizzbuzz')
    } else if (i % 3 == 0) {
      console.log('fizz')
    } else if (i % 5 == 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}
function squareSum (cadena) {
  let suma = 0
  var num = cadena.split(',') // Separar por comas
  for (let i = 0; i < num.length; i++) {
    let numero = parseInt(num[i]) // leer numero
    let numSquare = Math.pow(numero, 2) // elevar número al cuadrado
    suma = suma + numSquare // agregar suma
  }
  return suma
}

function quarterYear (month) {
  var trimestre = Math.floor((month - 1) / 3) + 1
  switch (trimestre) {
    case 1:
      return 'Primer'
      break
    case 2:
      return 'Segundo'
      break
    case 3:
      return 'Tercer'
      break
    case 4:
      return 'Cuarto'
      break
  }
}

function obtenerMes (month) {
  switch (month) {
    case 1:
      return 'Enero'
      break
    case 2:
      return 'Febrero'
      break
    case 3:
      return 'Marzo'
      break
    case 4:
      return 'Abril'
      break
    case 5:
      return 'Mayo'
      break
    case 6:
      return 'Junio'
      break
    case 7:
      return 'Julio'
      break
    case 8:
      return 'Agosto'
      break
    case 9:
      return 'Septiembre'
      break
    case 10:
      return 'Octubre'
      break
    case 11:
      return 'Noviembre'
      break
    case 12:
      return 'Diciembre'
      break
  }
}

function getPares (cadena) {
  var num = cadena.split(',') // Separar por comas

  const result = num.filter(num => num % 2 == 0)

  for (let i = 0; i < result.length; i++) {
    const element = result[i]
    console.log(element)
  }
}

function frequentWord(cadena){
  cadena=cadena.replaceAll(".","");
  cadena=cadena.replaceAll(",","");
  cadena=cadena.toLowerCase();
  let palabras=[];
  let total=[];
  
  const str=cadena.split(" ");
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    console.log(element);
    if(palabras.includes(element)){
      var pos=0;
      while (palabras[pos] != element) {
        pos=pos+1;
      }
      total[pos]=total[pos]+1;
    }else{
    
      palabras.push(element);
      total.push(1);
    }
  }

  var mayor=0
  var indice=0;
  for (let i = 0; i < total.length; i++) {
    console.log("palabra :"+ palabras[i]+ " se repite: " + total[i]+ " veces");
    if (total[i] > mayor)
    {
        mayor = total[i];
        indice=i;   
    }
  }
  console.log("La palabra que más se repite es: " + palabras[indice] +" , se repite: "+ total[indice] +" veces");
  
  return cadena;
  
}
