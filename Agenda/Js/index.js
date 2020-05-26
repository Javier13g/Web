function addCon()
{
    var todo = document.getElementsByName("entrada");
    var contacto = todo.value;

    var InputtxtTipoContacto = document.getElementById("txtTipoContacto");
    var tipo = InputtxtTipoContacto.value;
    /*var InputtxtNombre = document.getElementById("txtNombre");
    var nombre = InputtxtNombre.value

    var InputtxtApellido = document.getElementById("txtApellido");
    var apellido = InputtxtApellido.value

    var InputtxtTelefono = document.getElementById("txtTelefono");
    var telefono = InputtxtTelefono.value*/

    console.log(contacto);
    console.log(tipo);
   
}
function agregarContacto() 
{
    document.getElementById("divFormulario").style.display='inline';
}
/*
//VARIABLE QUE ALMACENA LAS INSTANCIAS DE CONTACTOS
var contactos = new Array();
//ESTO DEFINE EL OBJETO CONTACTO CON SUS RESPECTIVAS PROPIEDADES
function contacto() 
{
    this.nombre = "";
    this.apellido = "";
    this.telefono = "";
}


//FUNCION QUE MUESTRA EL FORMULARIO PARA PODER AGREGAR
function agregarContacto() 
{
    document.getElementById("divFormulario").style.display='inline';
}
//FUNCION QUE OCULTA EL FORMULARIO
function ocultarForm() 
{
    document.getElementById('txtNombre').value = '';
    document.getElementById('txtApellido').value = '';
    document.getElementById('txtTelefono').value = '';
    document.getElementById("divFormulario").style.display='none';  
}
//FUNCION QUE GUARDA LOS DATOS Y AL TERMINAR OCULTA EL FORMULARIO
function guardar() 
{
    con = new contacto();
    con.nombre = document.getElementById('txtNombre').value;
    con.apellido = document.getElementById('txtApellido').value;
    con.telefono = document.getElementById('txtTelefono').value;
    contactos[contactos.length] = con;
    ocultarForm();
    mostrarContactos();
}

function mostrarContactos() 
{
    alert("contacto registrado")
    for(x=0; x<contactos.length; x++) 
    {
        con = contactos[x];
        div = document.createElement('div');
        div.setAttribute('class','contacto');
        div.innerHTML = 
        con.nombre+"<br/>"+
        con.apellido+"<br/>"+
        con.telefono+"<br/>";
        document.getElementById('todosLosContactos').appendChild(div);
    }    
} 
*/