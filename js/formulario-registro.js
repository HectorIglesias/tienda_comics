document.getElementById("form-registro").addEventListener("submit", function(event){
    let nombre = document.getElementById("nombre_registro").value.trim();
    let email = document.getElementById("email_registro").value.trim();
    let contrasenia = document.getElementById("contrasenia_registro").value.trim();
    let errorMessages = [];

    if(!soloLetras(nombre)){
        alert("El nombre debe contener solo letras")
    }
    nombre = nombre.toUpperCase();

    let emailRegex = /^[^\s@]+@[^\s@]+\.[\s@]$/;
    if(!emailRegex.text(email)){
        errorMessages.push("Correo electrónico inválido");
    }

    if(errorMessages.length > 0){
        event.preventDefault();
        alert(errorMessages.join("\n"));
    }
    else{
        alert("Formulario enviado");
    }
});

document.getElementById("form-contacto").addEventListener("submit", function(event){
    let nombre = document.getElementById("nombre_contacto").value.trim();
    let email = document.getElementById("email_contacto").value.trim();
    let mensaje = document.getElementById("mensaje_contacto").value.trim();
    let errorMessages = [];

    if(!soloLetras(nombre)){
        alert("El nombre debe contener solo letras")
    }
    nombre = nombre.toUpperCase();

    let emailRegex = /^[^\s@]+@[^\s@]+\.[\s@]$/;
    if(!emailRegex.text(email)){
        errorMessages.push("Correo electrónico inválido");
    }

    if(errorMessages.length > 0){
        event.preventDefault();
        alert(errorMessages.join("\n"));
    }
    else{
        alert("Formulario enviado");
    }
});

function soloLetras(cadena){
    return /^[a-zA-Z]+$/.test(cadena);
}
