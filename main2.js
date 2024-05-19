$(document).ready(function(){
    $("#registroForm").submit(function(event){
        // Evitar que el formulario se envíe automáticamente
        event.preventDefault();
        
        // Realizar las validaciones
        var rut = $("#rut").val();
        var nombre = $("#nombre").val();
        var apellidoPaterno = $("#apellidoPaterno").val();
        var celular = $("#celular").val();
        var password = $("#password1").val();
        var region = $("#region").val();

        // Rut: largo entre 9 y 10 caracteres
        if(rut.length < 9 || rut.length > 10){
            alert("El Rut debe tener entre 9 y 10 caracteres.");
            return;
        }

        // Nombre, Apellidos: largo entre 3 y 20 caracteres
        if(nombre.length < 3 || nombre.length > 20 ||
            apellidoPaterno.length < 3 || apellidoPaterno.length > 20){
            alert("El Nombre y Apellido deben tener entre 3 y 20 caracteres.");
            return;
        }

        // Celular: largo entre 9 y 12 caracteres
        if(celular.length < 9 || celular.length > 12){
            alert("El Celular debe tener entre 9 y 12 caracteres.");
            return;
        }

        if(password.length < 5 || password.length > 12){
            alert("La contraseña debe tener entre 5 y 12 caracteres.");
            return;
        }
        if(region === ""){
            alert("Por favor, seleccione un motivo.");
            return;
        }
        // Si todas las validaciones pasan, se puede enviar el formulario
        alert("¡Registro exitoso!");
        // Aquí podrías enviar el formulario utilizando AJAX o cualquier otro método
    });
    
    //Validacion Carrito
    $("#registroCarrito").submit(function(event){
        // Evitar que el formulario se envíe automáticamente
        event.preventDefault();
        var nombre = $("#inputnombre").val();
        var apellidos = $("#inputApellidos").val();
        var rut = $("#inputRut").val();
        var celular = $("#inputtelefono").val();
        var direccion = $("#inputDireccion").val(); 
        var region = $("#region").val();
        var comuna = $("#comuna").val();
        // Rut: largo entre 9 y 10 caracteres
        if(rut.length < 9 || rut.length > 10){
            alert("El Rut debe tener entre 9 y 10 caracteres.");
            return;
        }   

        // Nombre, Apellidos: largo entre 3 y 20 caracteres
        if(nombre.length < 3 || nombre.length > 20 ||
            apellidos.length < 3 || apellidos.length > 20){
            alert("El Nombre y Apellido deben tener entre 3 y 20 caracteres.");
            return;
        }   
        
        if(region === ""){
            alert("Por favor, seleccione un archivo.");
            return;
        }

        // Celular: largo entre 9 y 12 caracteres
        if(celular.length < 9 || celular.length > 12){
            alert("El Celular debe tener entre 9 y 12 caracteres.");
            return;
        }   
        if(direccion.length < 9 || direccion.length > 10){
            alert("La direccion debe tener entre 9 y 10 caracteres.");
            return;
        }
        if(region === ""){
            alert("Seleccione una region");
            return;
        }
        if(comuna === ""){
            alert("Seleccione una comuna");
            return;
        }
        alert("Compra exitosa");
      
    });
    //Validacion contacto
    $("#registrocontacto").submit(function(event){
        // Evitar que el formulario se envíe automáticamente
        event.preventDefault();
        
        // Realizar las validaciones
        var nombrecom = $("#Nombrecom").val();
        var correo = $("#correo").val();
        var archivo = $("#Archivo").val();
        var motivo = $("#Motivo").val();
        var descripcion= $("#Descripcion").val();
    
        if(nombrecom.length < 3 || nombrecom.length > 100 ){
            alert("El nombre debe tener entre 3 y 100 caracteres.");
            return;
        }
        if(correo.length < 3 || correo.length > 100){
            alert("El Email debe tener entre 3 y 100 caracteres.");
            return;
        }
        if(archivo === ""){
            alert("Por favor, seleccione un archivo.");
            return;
        }
        if(motivo === ""){
            alert("Por favor, seleccione un motivo.");
            return;
        }
        if(descripcion.length < 3 || descripcion.length > 100){
            alert("El Descripción debe tener entre 3 y 100 caracteres.");
            return;
        }

        // Si todas las validaciones pasan, se puede enviar el formulario
        alert("¡Registro exitoso!");
        // Aquí podrías enviar el formulario utilizando AJAX o cualquier otro método
    });
    //Validacion Socio
    $("#registroSocio").submit(function(event){
        // Evitar que el formulario se envíe automáticamente
        event.preventDefault();
        
        // Realizar las validaciones
        var nombre = $("#nombre").val();
        var donacion = $("#donacion").val();
        var contacto = $("#contacto").val();
        var correo = $("#correo").val();
        var fecha_ini= $("#fecha_ini").val();
        var opcion= $("#opcion").val();
        var mascota= $("#mascota").val();


        if(nombre.length < 3 || nombre.length > 100 ){
            alert("El nombre debe tener entre 3 y 100 caracteres.");
            return;
        }
        if(donacion.length < 3 || donacion.length > 100){
            alert("El donacion debe tener entre 3 y 100 caracteres.");
            return;
        }
        if(contacto.length < 3 || contacto.length > 100 ){
            alert("El Telefono debe tener entre 9 y 10 caracteres.");
            return;
        }
        if(correo.length < 3 || correo.length > 100 ){
            alert("El contacto debe tener entre 3 y 100 caracteres.");
            return;
        }
        if(fecha_ini === ""){
            alert("Por favor, Poner la fecha.");
            return;
        }
        if(opcion === ""){
            alert("Por favor, una opcion.");
            return;
        }
        if(mascota.length < 3 || mascota.length > 100){
            alert("Poner el nombre de la mascota");
            return;
        }

        // Si todas las validaciones pasan, se puede enviar el formulario
        alert("Felicidades, Ya eres socio");
        // Aquí podrías enviar el formulario utilizando AJAX o cualquier otro método
    });
});



