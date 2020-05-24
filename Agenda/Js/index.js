//VARIABLE QUE ALMACENA LAS INSTANCIAS DE CONTACTOS
var contactos = new Array();
//ESTO DEFINE EL OBJETO CONTACTO CON SUS RESPECTIVAS PROPIEDADES
function contacto() 
{
    this.nombre ="";
    this.apellido = "";
    this.telefono = "";
}

con = new contacto();
con.nombre

//FUNCION PARA ABREVIAR document.getElementByID
function gi(id) 
{
    return document.getElementById(id);
}
//FUNCION QUE MUESTRA EL FORMULARIO PARA PODER AGREGAR
function agregarContacto() 
{
    gi("divFormulario").style.display='inline';
}
//FUNCION QUE OCULTA EL FORMULARIO
function ocultarForm() 
{
    gi('txtNombre').value = '';
    gi('txtApellido').value = '';
    gi('txtTelefono').value = '';
    gi("divFormulario").style.display='none';  
}
//FUNCION QUE GUARDA LOS DATOS Y AL TERMINAR OCULTA EL FORMULARIO
function guardar() 
{
    con = new contacto();
    con.nombre = gi('txtNombre').value;
    con.apellido = gi('txtApellido').value;
    con.telefono = gi('txtTelefono').value;
    contactos[contactos.length] = con;
    ocultarForm();
    mostrarContactos();
}

function mostrarContactos() 
{
    for(x=0; x<contactos.length; x++) 
    {
        con = contactos[x];
        div = document.createElement('div');
        div.setAttribute('class','contacto');
        div.innerHTML = 
        con.nombre+"<br/>"+
        con.apellido+"<br/>"+
        con.telefono+"<br/>";
        gi('todosLosContactos').appendChild(div);
    }    
}
