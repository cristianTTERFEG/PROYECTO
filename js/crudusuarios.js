function insertar() {
    var nombre1 = document.getElementById("nombre1");
    var nombre2 = document.getElementById("nombre2");
    var apellido1 = document.getElementById("apellido1");
    var apellido2 = document.getElementById("apellido2");
    var tipoID = document.getElementById("tipoID");
    var numeroID = document.getElementById("numeroID");
    var direccion = document.getElementById("direccion");
    var fechaN = document.getElementById("fechaN");
    var estudios = document.getElementById("estudios");
    var correo = document.getElementById("correo");
    var usuario = document.getElementById("usuario");
    var password = document.getElementById("password");
    var tipo = document.getElementById("tipo");


    usuarioObjeto = new Usuario(nombre1.value,nombre2.value,apellido1.value,apellido2.value,
        tipoID.value,numeroID.value,direccion.value,fechaN.value,estudios.value,correo.value,usuario.value,
        password.value, tipo.value)

    var usuarios = JSON.parse(
        localStorage.getItem("usuarios") || "[]");
    usuarios.push(usuarioObjeto);

    localStorage.setItem("usuarios",
        JSON.stringify(usuarios))
    
    nombre1.value = ""   
    nombre2.value = ""
    apellido1.value = ""
    apellido2.value = ""   
    tipoID.value = ""
    numeroID.value = ""
    direccion.value = ""
    fechaN.value = ""
    estudios.value = ""
    correo.value = ""
    usuario.value = ""
    password.value = ""

    console.log(usuarios)
}
function modificar() { }
function eliminar() { }
function consultar() { }
function loguear() {

    var usuario = document.getElementById("usuario");
    var password = document.getElementById("password");

    var usuarios = JSON.parse(
        localStorage.getItem("usuarios") || "[]");

    var encontrado = false

    for (let i = 0; i < usuarios.length && !encontrado;
        i++) {

        if (usuarios[i].usuario == usuario.value &&
            usuarios[i].password == password.value) {

            if (usuarios[i].tipo == "admin")
                location.href = "menuadministrador.html"
            else if (usuarios[i].tipo == "instructor")
                location.href = "menuinstructor.html"
            else if (usuarios[i].tipo == "estudiante")
                location.href = "menuestudiante.html"
            
                encontrado = true   

        }
    }

    if (!encontrado)
        alert('Usuario y/o password errado')
}