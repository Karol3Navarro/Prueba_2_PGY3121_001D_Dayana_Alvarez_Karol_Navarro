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
});