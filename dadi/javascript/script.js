// chiedo all utente se vuole giocare
var giocare = prompt("Vuoi tirare il dado?")

// controllo se vuole giocare
if (giocare === "si") {
    // salvo i valori dei due dadi
    var mioDado = Math.floor(Math.random() * 5) + 1;
    var dadoComp = Math.floor(Math.random() * 5) + 1;

    document.getElementById("miodado").innerHTML = "Il tuo dado ha fatto: " + "<span>" + mioDado + "</span>";
    document.getElementById("dadocomp").innerHTML = "Il tuo avversario ha fatto: " + "<span>" + dadoComp + "</span>";

    // controllo il vincitore
    if(mioDado > dadoComp) {
        document.getElementById("vincitore").innerHTML = "Complimenti hai vinto!!!"
    }else if (mioDado === dadoComp) {
        document.getElementById("vincitore").innerHTML = "Pareggio!";
    } else {
        document.getElementById("vincitore").innerHTML = ":( Riprova sarai più fortunato...";
    }
    
}else if (giocare === "no") {
    document.getElementById("giocare").innerHTML = "Va bene, torna più tardi";
}else {
    document.getElementById("vincitore").innerHTML = "Errore. Scelta non valida";
}
