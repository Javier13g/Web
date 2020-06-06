

function primo (n)  //FUNCION QUE TE DICE SI UN NUMERO ES PRIMO O NO 
{
  if (typeof(n)=== 'string')
    {
      return null;
    }
    var i;
    if (n == 1) return 0;
    for (i = 2; i * i <= n; i++)
    {
        if (n % i == 0) return "No es primo"; //NO ES PRIMO
    }
    return "Es primo"; //ES PRIMO

    if (typeof(n)=== 'string')
    {
      return null;
    }
}

//TEST POSITIVOS DE LA FUNCION PRIMO
console.log(primo(3))
console.log(primo(100))
console.log(primo(25))

//TEST NEGATIVOS DE LA FUNCION PRIMO
console.log(primo('a'))
console.log(primo('Abdiel'))
console.log(primo('RD'))

//FUNCION QUE CALCULA LA EDAD SEGUN TU FECHA DE NACIMIENTO
function calcular_edad(dia_naci,mes_nacim,año_naci)
{
    fechaActual = new Date();  //fecha_hoy
    añoActual = fechaActual.getYear(); //ahora_anio
    mesActual = fechaActual.getMonth(); //ahora_mes
    diaActual = fechaActual.getDate(); //ahora_dia
    edad = (añoActual + 1900) - año_naci; 
    if ( mesActual < (mes_nacim - 1))
    {
      edad--;
    }
    if (((mes_nacim - 1) == mesActual) && (diaActual < dia_naci))
    { 
      edad--;
    }
    if (edad > 1900)
    {
    edad -= 1900;
    }
    if (typeof(dia_naci)=== 'string')
    {
      return null;
    }
    if (typeof(mes_nacim)=== 'string')
    {
      return null;
    }
    if (typeof(año_naci)=== 'string')
    {
      return null;
    }
    if (typeof(dia_naci, mes_nacim, año_naci)=== 'string')
    {
      return null;
    }
  return edad + " años";
}

//TEST POSITIVOS DE LA FUNCION CALCULAR EDAD 
console.log(calcular_edad(13,9,2000))
console.log(calcular_edad(12,8,1997))

//TEST NEGATIVOS DE LA FUNCION CALCULAR EDAD 
console.log(calcular_edad('A',9,2000))
console.log(calcular_edad(10,'B',2000))
console.log(calcular_edad('A',9,'C'))
console.log(calcular_edad('Z','F','D'))
