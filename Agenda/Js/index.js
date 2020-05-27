
/* function addCon()
{
 
    var InputtxtTipoContacto = document.getElementById("txtTipoContacto");
    var tipo = InputtxtTipoContacto.value;
    
    var InputtxtNombre = document.getElementById("txtNombre");
    var nombre = InputtxtNombre.value

    var InputtxtApellido = document.getElementById("txtApellido");
    var apellido = InputtxtApellido.value

    var InputtxtTelefono = document.getElementById("txtTelefono");
    var telefono = InputtxtTelefono.value

    document.getElementById("divFormulario").style.display='none';
    console.log(nombre);
    console.log(apellido);
    console.log(telefono);
    console.log(tipo);   
} */

//VARIABLE QUE ALMACENA LAS INSTANCIAS DE CONTACTOS
var contactos = new Array();
//ESTO DEFINE EL OBJETO CONTACTO CON SUS RESPECTIVAS PROPIEDADES
function contacto() 
{
    this.nombre = "";
    this.apellido = "";
    this.telefono = "";
    this.tipoTelefono = "";
}

//FUNCION QUE MUESTRA EL FORMULARIO PARA PODER AGREGAR
function agregarContacto() 
{
    document.getElementById("divFormulario").style.display='inline';
    document.getElementById('txtNombre').focus();
}
//FUNCION QUE OCULTA EL FORMULARIO
function ocultarForm() 
{
    document.getElementById('txtNombre').value = '';
    document.getElementById('txtApellido').value = '';
    document.getElementById('txtTelefono').value = '';
    document.getElementById('txtTipoContacto')
    document.getElementById("divFormulario").style.display='none';  
}
//FUNCION QUE GUARDA LOS DATOS Y AL TERMINAR OCULTA EL FORMULARIO
function guardar() 
{
    con = new contacto();
    con.nombre = document.getElementById('txtNombre').value;
    con.apellido = document.getElementById('txtApellido').value;
    con.telefono = document.getElementById('txtTelefono').value;
    con.tipoTelefono = document.getElementById('txtTipoContacto').value;
    contactos[contactos.length] = con; 
    ocultarForm();
    mostrarContactos();
}

function eliminarContacto(id_contacto)
{
    if(confirm("Quiere eliminar el contacto?"))
    {
        newCon = new Array();
        for(x=0; x<contactos.length; x++)
        {
            if(x != id_contacto)
            {
                newCon[newCon.length] = contactos[x];
            }
        }
        contactos = newCon;
        mostrarContactos();
    }
}
//FUNCION QUE MUESTRA LOS CONTACTOS
function mostrarContactos() 
{
    for(x=0; x<contactos.length; x++);
    {
        div = document.createElement('div');
        div.setAttribute('class','contacto'); 
        div.innerHTML =
        "Nombre: "+ con.nombre + "<br/>"+
        "Apellido: "+ con.apellido + "<br/>"+
        "Tipo de contacto: "+ con.tipoTelefono + "<br/>"+
        "Telefono: "+ con.telefono + "<br/>"+
        "<button onclick='editarContacto("+x+")' class='btn btn-primary' id='botones'>Editar</button><button onclick='eliminarContacto("+x+")' class='btn btn-warning' id='botones'>Eliminar</button>";
        document.getElementById('todosLosContactos').appendChild(div);
    }
} 
