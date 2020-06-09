var hombrePalito = new Array("O", "  /", "|", "\\\n", "  /", " \\\n")
/*var hombrePalito = new Array("___\n", "   |\n", "   O\n", "  /", "|", "\\\n", "  /", " \\\n", "___")*/
var palabra
var listica = new Array("a r r a y", "v a r i a b l e", "s t r i n g", "p a r s e", "i n t",
 " a l g o r i t m o", "j a v a", "a c o p l a m i e n t o", "a n a l i s i s", "a p l i c a c i o n", 
 "a r g u m e n t o", "v e c t o r", "a s o c i a c i o n", "c o m p i l a d o r", "p o o", "p a r a d i g m a"
 , "h t m l", "c s s", "j a v a s c r i p t", "i p", "m u l t i p l a t a f o r m a", "l i b r e r i a"
 , "s c r i p t", "c o n s t a n t e", "a p i", "d i a g r a m a", "c l a s e", "h e r e n c i a", "o b j e t o",
  "d e p u r a d o r", "m e t o d o", "e v e n t o", "a t r i b u t o", "m e n s a j e", "i d", "b r e a k p o i n t",
   "b u g", "d o m", "h o s t", "f r a m e w o r k", "l o g", "s q l", "o p e r a d o r", "p r o g r a m a", 
   "l i n u x", "d e b i a n", "u b u n t u", "p r o g r a m a d o r", "p c", "l a p t o p" )
console.log(listica)
var partesMuñeco = 0
var colNueva = 0
var jugando

function ObtienePalabra()    // funcion que obtiene la palabra que el usuario tendra que adivinar
{
   var indice = Math.round ( Math.random() * 50 )
   var cadena = new String( listica[indice] )
   palabra = cadena.split(" ")
}

function DibujaHombrePalo(visor, partesMuñeco) // funcion que permite representar al muñequito
{
   
   //partes indica el numero de partes a dibujar
   var dibujo = ""
   if (partesMuñeco < 6)
   for(var x = 0; x < partesMuñeco; x++)
   {
      dibujo += hombrePalito[x]
   }
   visor.displayHombre.value = dibujo
}

function DibujaLetra(visor, letra)
{
   //dibuja una letra de la palabra
   //posicion indica donde debe dibujar la letra
   var flag = false 
   //indica si se encontro la letra 
   //obtiene cadena actual
   var cadena = new String(visor.displayPalabra.value)
   //la separa en sus espacios
   var letrasCadena = cadena.split(" ")
   cadena = "" 
   for (var x = 0; x < palabra.length; x++)
   {
      if (palabra[x] == letra)
      {
         cadena += letra + " "
         flag = true
      } 
      else
      cadena += letrasCadena[x] + " "
   }
   visor.displayPalabra.value = cadena
   return flag
}

function NuevaLetra(visor, letra)
{
   //añade letra lista de letras
   visor.displayLetras.value += letra + " "
   //comprueba si ha de pasar a la siguiente fila
   if(colNueva == 3)
   {
      visor.displayLetras.value += "\n"
      colNueva = 0
   }
   else
   colNueva++
}

function JugandoLaVaina(visor, letra)
{
   //comprueba si esta jugando
   if (jugando)
   {
      //ciclo de jugada
      //1. añade letra a la lista
      NuevaLetra(visor, letra)
      //2. dibuja la letra y comprueba si acierto
      var acierto = DibujaLetra(visor, letra)
      //3. si no acierto, dibuja hombre
      if (!acierto)
         DibujaHombrePalo(visor, ++partesMuñeco)
        //4. comprueba si fin
      if (partesMuñeco == 6)
         laMacaste(false)
      else if (CompruebaPalabra(visor))
         laMacaste(true)
   } else
   {
      alertify.alert("ALERTAAAAA","Pulsa Juego nuevo para comenzar\nuna partida nueva.").set('label', 'Aceptar')
   }
}

function IniciandoJuegoAhorcado(visor)
{
   //inicializa visor y variables globales
   jugando = true
   partesMuñeco = 0
   colNueva = 0
   ObtienePalabra()
   DibujaHombrePalo(visor, partesMuñeco)
   visor.displayPalabra.value = ""
   for (var x = 0; x < palabra.length; x++)
   visor.displayPalabra.value += "_ "
   visor.displayLetras.value = ""
}

function CompruebaPalabra(visor)
{
   //comprueba si se completo toda la palabra
   var fin = true
   //obtiene cadena actual
   var cadena = new String(visor.displayPalabra.value)
   //la separa en sus espacios
   var letrasCadena = cadena.split(" ")
   for(var x = 0; x < letrasCadena.length; x++)
   if (letrasCadena[x] == "_")
   fin = false
   return fin
}

function laMacaste(resultado)//indica que si se ha perdido o ganado
{
   var solucion = ""
   jugando = false 
   if (resultado)
   {
      document.visor.ganadas.value++
      alertify.alert("Acertaste !").set('label', 'Aceptar')
   } 
   else 
   {
      document.visor.perdidas.value++
       //construye la palabra seleccionada 
      for (var x = 0; x < palabra.length; x++)
      solucion += palabra[x]
      alertify.alert("ALERTAAAAAA", "Buen intento, \n La palabra era: " + solucion).set('label', 'Aceptar')
   }
}