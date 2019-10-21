var listaMail= ["schianchi.filippo.93@gmail.com", "paperino@gmail.com", "pluto@gmail.com", "topolino@gmail.com", "pippo@gmail.com"];

// chiedo mail all'utente
var userMail = prompt("Inserisci la tua mail");

//controllo se esiste la mail
for (var i = 0; i < listaMail.length; i++) {
    if(listaMail[i] === userMail ) {
        document.getElementById("titolo").innerHTML = "Mail trovata, puoi accedere al gioco!"
        break;
    }
    else {
        document.getElementById("titolo").innerHTML = "Mail non trovata, mi dispiace non puoi accedere al gioco!"
    }
    
}
