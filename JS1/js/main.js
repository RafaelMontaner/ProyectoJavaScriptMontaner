function login(){
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("Contraseña").value;


    if( user == "ZonaMMO" && password == "MMORPG"){
        alert("¡Bienvenido, acabas de iniciar sesion!")
        window.location = "inicio.html"
    } else{
        alert("¡Datos incorrectos, vuelva a intentarlo!")
    }
}
