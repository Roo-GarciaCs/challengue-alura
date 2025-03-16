const nombreAmigo = document.getElementById ("amigo");
const listaDeAmigos = [];
const ulListaDeAmigos = document.getElementById ("listaAmigos");
const listaDeResultados = document.getElementById("resultado");

function agregarAmigo(){
    if(!nombreAmigo.value){
        alert("Debes de ingresar un nombre")
    } else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/.test(nombreAmigo.value)) {
        alert("Valor no permitido, introduzca un nombre")
        .return
    }
 listaDeAmigos.push (nombreAmigo.value);
 ulListaDeAmigos.innerHTML += `<li>${nombreAmigo.value}</li>`;
 nombreAmigo.value = "";
}

function sortearAmigo(){
    const random = Math.floor(Math.random()*listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[random];
    listaDeResultados.innerHTML = `<li> El amigo Secreto es: ${amigoSorteado}</li>`;
    
}