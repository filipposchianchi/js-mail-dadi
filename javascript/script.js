var listaMail= ["schianchi.filippo.93@gmail.com", "paperino@gmail.com", "pluto@gmail.com", "topolino@gmail.com", "pippo@gmail.com"];

// chiedo mail all'utente
var userMail = prompt("Inserisci la tua mail");

//controllo se esiste la mail
for (var i = 0; i < listaMail.length; i++) {
    if(listaMail[i] === userMail ) {
        document.getElementById("titolo").innerHTML = "Mail trovata, puoi accedere al gioco!"
        
        // salvo i valori dei due dadi
        var mioDado = Math.floor(Math.random() * 5) + 1;
        var dadoComp = Math.floor(Math.random() * 5) + 1;

        document.getElementById("hoverme").innerHTML = "Hover me per tirare il dado!"

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
        break;
    }
    else {
        document.getElementById("titolo").innerHTML = "Mail non trovata, mi dispiace non puoi accedere al gioco!"
        document.getElementById("hoverme").innerHTML = "Non puoi tirare il dado "
    }
    
}
