//Création d'une variable rassemblant toutes les cases du morpion
var allCase = document.querySelectorAll('.case');

//Création de variables correspondantes aux cases du morpion (case0-case3 = première ligne etc...)
var case0 = document.querySelector("#case0");
var case1 = document.querySelector("#case1");
var case2 = document.querySelector("#case2");
var case3 = document.querySelector("#case3");
var case4 = document.querySelector("#case4");
var case5 = document.querySelector("#case5");
var case6 = document.querySelector("#case6");
var case7 = document.querySelector("#case7");
var case8 = document.querySelector("#case8");
var case9 = document.querySelector("#case9");
var case10 = document.querySelector("#case10");
var case11 = document.querySelector("#case11");
var case12 = document.querySelector("#case12");
var case13 = document.querySelector("#case13");
var case14 = document.querySelector("#case14");
var case15 = document.querySelector("#case15");

//Création de 2 variables qui serviront pour savoir si le joueur choisi de jouer les X ou les O
var XEnable = 0;
var OEnable = 0;

// Déclaration d'un objet allScore qui définit combien de fois un camps a gagné de manches
let allScore = {
    scoreX : 0,
    scoreO : 0
}

//création d'une fonction pour afficher le morpion, faire disparraitre la partie "tirage", ainsi qu'au titre servant
//aux instructions
function afficherTab(){
    //On affiche le morpion
    document.querySelector(".container").style.display = "flex";
    //On cache toute la partie pour faire le tirage
    document.getElementById('tirage').style.display = "none";
    document.getElementById('desc-tirage').style.display = "none";
    //On cache la partie du choix du X ou du O
    document.getElementById('choice').style.display = "none";
}

//Création d'une fonction pour le tirage au sort
function tirage(){

    //On cache le texte du choix
    document.getElementById('txt-choix').style.display = "none";

    //On cache le bouton "lancer"
    document.getElementById('show').style.display = "none";

    //Création de 2 variables pour avoir de nombres, qui, pour l'instant, sont 0
    var nbX = 0;
    var nbO = 0;

    //Tant que les nombres sont identiques ou l'un des deux est égale à 0, alors
    while(nbX == nbO || nbO == 0 || nbX == 0){

        //On tire un chiffre au hasard entre 0 et 10
        nbX = Math.floor(Math.random() * 10);
        nbO = Math.floor(Math.random() * 10);
    }

    //Si le nombre de X est supérieur à celui de O, alors
    if(nbX > nbO){

        //Le texte du titre "arbitre" aura comme texte le suivant
        document.getElementById('arbitre').innerHTML = "Le joueur commence !";

        //On remplace le texte de "tirageX" et de "tirageO" par le nombre de nos 2 variables
        document.getElementById('tirageX').innerHTML = nbX;
        document.getElementById('tirageO').innerHTML = nbO;

        //On lance la fonction afficherTab 2.5s après
        setTimeout(() => afficherTab(), 2500);
    }

    //Si le nombre de O est supérieur à celui de X, alors
    if(nbX < nbO){

        //Le texte du titre "arbitre" aura comme texte le suivant
        document.getElementById('arbitre').innerHTML = "L'ordinateur commence !";

        //On remplace le texte de "tirageX" et de "tirageO" par le nombre de nos 2 variables
        document.getElementById('tirageX').innerHTML = nbX;
        document.getElementById('tirageO').innerHTML = nbO;

        //On lance la fonction afficherTab 2.5s après
        setTimeout(() => afficherTab(), 2500);

        //On lance la fonction computerTurn
        computerTurn();
    }
}

//Création d'une fonction si on choisit de jouer les X
function choixX() {

    //On passe la variable XEnable à 1 pour dire que le joueur a choisi les X
    XEnable = 1;

    //On réinitialise OEnable en cas de changement de choix
    OEnable = 0;

    //Vérification des deux variables
    console.log("choixX = "+XEnable);
    console.log("choixO = "+OEnable);

    //Le bouton choixX devient incliquable
    document.getElementById('choixX').disabled = true;

    //Le bouton choiX devient opaque à 60%
    document.getElementById('choixX').style.opacity = "60%";

    //Le bouton choixO devient cliquable
    document.getElementById('choixO').disabled = false;

    //Le bouton choixO devient opaque à 100%
    document.getElementById('choixO').style.opacity = "100%";

    //On remet le fonctionnement inline du bouton "lancer"
    document.getElementById("show").style.display = "inline";

    //Le texte suivant est celui du paragraphe qui nous indique qui nous sommes 
    document.getElementById('desc').innerHTML = "Vous êtes les X et vous jouez contre les O !";

    //On affiche la partie "tirage" en flex
    document.getElementById('tirage').style.display = "flex";
}

//Création d'une fonction si on choisit de jouer les O
function choixO() {

    //On passe la variable OEnable à 1 pour dire que le joueur a choisi les O
    OEnable = 1;

    //On réinitialise XEnable en cas de changement de choix
    XEnable = 0;

    //Vérification des deux variables
    console.log("choixO = "+OEnable);
    console.log("choixX = "+XEnable);

    //Le bouton choixX devient cliquable
    document.getElementById('choixX').disabled = false;

    //Le bouton choixX devient opaque à 100%
    document.getElementById('choixX').style.opacity = "100%";

    //Le bouton choixO devient incliquable
    document.getElementById('choixO').disabled = true;

    //Le bouton choixO devient opaque à 60%
    document.getElementById('choixO').style.opacity = "60%";

    //On remet le fonctionnement inline du bouton "lancer"
    document.getElementById("show").style.display = "inline";

    //Le texte suivant est celui du paragraphe qui nous indique qui nous sommes
    document.getElementById('desc').innerHTML = "Vous êtes les O et vous jouez contre les X !";

    //On affiche la partie "tirage" en flex
    document.getElementById('tirage').style.display = "flex";
}

//Création d'une fonction pour le tour de l'ordinateur
function computerTurn() {

    //Soit une variable qui aura une valeur aléatoire comprise entre 0 et 15
    var valRandom = Math.floor(Math.random() * allCase.length); 

    //Sur toutes les cases du morpion :
    for(let i=0; i < allCase.length; i++){

        //Si le joueur a choisi les X
        if(XEnable == 1){

            //Si la case de la valeur aléatoire est vide, alors : 
            if(allCase[valRandom].value == ""){

                //On désactive la case jusqu'à la fin de la manche
                allCase[valRandom].disabled = true;

                //On mets une couleur de fond à la case
                allCase[valRandom].style.backgroundColor = "#780000";

                //On mets une couleur blanche à l'écriture de la case
                allCase[valRandom].style.color = "white";

                //On retourne la valeur de la case qui devient O
                return allCase[valRandom].value = "O";

            } else {
                //Tant que la valeur aléatoire de la case n'est pas vide :
                while(allCase[valRandom].value != ""){

                    //La valeur aléatoire change de valeur
                    valRandom = Math.floor(Math.random() * 16);
                }

                //On désactive la case jusqu'à la fin de la manche
                allCase[valRandom].disabled = true;

                //On mets une couleur de fond à la case
                allCase[valRandom].style.backgroundColor = "#780000";

                //On mets une couleur blanche à l'écriture de la case
                allCase[valRandom].style.color = "white";

                //On retourne la valeur de la case qui devient O 
                return allCase[valRandom].value = "O";
            }
        }

        //Si le joueur a choisi les O
        if(OEnable == 1){

            //Si la case de la valeur aléatoire est vide, alors : 
            if(allCase[valRandom].value == ""){

                //On désactive la case jusqu'à la fin de la manche
                allCase[valRandom].disabled = true;

                //On mets une couleur de fond à la case
                allCase[valRandom].style.backgroundColor = "#003049";

                //On mets une couleur blanche à l'écriture de la case
                allCase[valRandom].style.color = "white";

                //On retourne la valeur de la case qui devient X
                return allCase[valRandom].value = "X";

                //Si la case de la valeur aléatoire a une valeur autre que vide, alors :
            } else {

                //Tant que la valeur aléatoire de la case n'est pas vide :
                while(allCase[valRandom].value != ""){

                    //La valeur aléatoire change de valeur
                    valRandom = Math.floor(Math.random() * 16);
                }

                //On désactive la case jusqu'à la fin de la manche
                allCase[valRandom].disabled = true;

                //On mets une couleur de fond à la case
                allCase[valRandom].style.backgroundColor = "#003049";

                //On mets une couleur blanche à l'écriture de la case
                allCase[valRandom].style.color = "white";
                //On retourne la valeur de la case qui devient X

                return allCase[valRandom].value = "X";
            }
        }
    }
}

//Création d'une fonction en cas de 3 manches gagnées dans une équipe
function winnerOfGame() {

    //Si la variable scoreX arrive à 3, alors :
    if(allScore.scoreX == 3){

        //Si le joueur est X
        if(XEnable == 1){

            //On mets la variable à 2 pour bloquer la possibilité de jouer après
            XEnable = 2;
        }

        //Si le joueur est O
        if(OEnable == 1){

            //On mets la variable à 2 pour bloquer la possibilité de jouer après
            OEnable = 2;
        }

        //On affiche dans le h2 le texte suivant
        document.getElementById("arbitre").innerHTML = "Les X ont gagné la partie !";

        //On affiche le bouton "restart"
        document.getElementById('restart').style.display = "block";

        //Sinon si scoreO arrive à 3 alors, la même chose
    } else if(allScore.scoreO == 3) {

        if(XEnable == 1){
            XEnable = 2;
        }

        if(OEnable == 1){
            OEnable = 2;
        }

        document.getElementById("arbitre").innerHTML = "Les O ont gagné la partie !";

        document.getElementById('restart').style.display = "block"; 
    }
}

//Création d'une fonction pour recommencer le choix du symbole via un bouton
function restart() {

    //On réinitialise les variables, pour éviter d'avoir le tirage de la partie précédente
    nbX = "";
    nbO = "";

    //On les réaffiche dans les balises de tirage
    document.getElementById('tirageX').innerHTML = nbX;
    document.getElementById('tirageO').innerHTML = nbO;

    //Si la variable était à 2 pour éviter que le joueur jouait après la partie gagnée :
    if(XEnable == 2){

        //On la remets à 1
        XEnable = 1;

        //Vérification des deux variables
        console.log("choixX = "+XEnable);
        console.log("choixO = "+OEnable);

        //Le bouton choixX devient incliquable
        document.getElementById('choixX').disabled = true;

        //Le bouton choiX devient opaque à 60%
        document.getElementById('choixX').style.opacity = "60%";

        //Le bouton choixO devient cliquable
        document.getElementById('choixO').disabled = false;

        //Le bouton choixO devient opaque à 100%
        document.getElementById('choixO').style.opacity = "100%";

        //On remet le fonctionnement inline du bouton "lancer"
        document.getElementById("show").style.display = "inline";

        //Le texte suivant est celui du paragraphe qui nous indique qui nous sommes 
        document.getElementById('desc').innerHTML = "Vous êtes les X et vous jouez contre les O !";

        //On affiche la partie "tirage" en flex
        document.getElementById('tirage').style.display = "flex";
    }

    //Si la variable était à 2 pour éviter que le joueur jouait après la partie gagnée :
    if(OEnable == 2){

        //On la remets à 1
        OEnable = 1;

        //Vérification des deux variables
        console.log("choixO = "+OEnable);
        console.log("choixX = "+XEnable);

        //Le bouton choixX devient cliquable
        document.getElementById('choixX').disabled = false;

        //Le bouton choixX devient opaque à 100%
        document.getElementById('choixX').style.opacity = "100%";

        //Le bouton choixO devient incliquable
        document.getElementById('choixO').disabled = true;

        //Le bouton choixO devient opaque à 60%
        document.getElementById('choixO').style.opacity = "60%";

        //On remet le fonctionnement inline du bouton "lancer"
        document.getElementById("show").style.display = "inline";

        //Le texte suivant est celui du paragraphe qui nous indique qui nous sommes
        document.getElementById('desc').innerHTML = "Vous êtes les O et vous jouez contre les X !";

        //On affiche la partie "tirage" en flex
        document.getElementById('tirage').style.display = "flex";
    }

    //On réinitialise l'arbitre
    document.getElementById("arbitre").innerHTML = "";

    //On réinitialise le score de X
    allScore.scoreX = 0;

    //On réinitialise le compteur affiché pour X
    document.getElementById("scoreX").value = 0;

    //On réinitialise le score de O
    allScore.scoreO = 0;

    //On réinitialise le compteur affiché pour O
    document.getElementById("scoreO").value = 0;

    //On réactive les choix
    document.getElementById('choice').style.display = "flex";

    //On cache le morpion
    document.querySelector(".container").style.display = "none";

    //On cache le bouton "restart"
    document.getElementById('restart').style.display = 'none';

    //On réaffiche le bouton pour lancer
    document.getElementById("show").style.display = "inline";
}

//Création d'une fonction qui lorsque qu'on l'appelle, toutes les cases sont de nouveau vides
function reset() {

    //On réinitialise l'arbitre
    document.getElementById('arbitre').innerHTML = "";

    //Sur toutes les cases
    for (const currentCase of allCase) {

        //La value des cases deviennent vides
        currentCase.value = ""; 

        currentCase.style.backgroundColor = "";

        currentCase.style.color = "black"; 

        //Les cases sont de nouveau clickables
        currentCase.disabled = false;  
    }
}

function verifGagnant(){
    //Si X remplit une ligne :
    if((case0.value == "X" && case1.value == "X" && case2.value == "X" && case3.value == "X") || (case4.value == "X" && case5.value == "X" && case6.value == "X" && case7.value == "X") || (case8.value == "X" && case9.value == "X" && case10.value == "X" && case11.value == "X") || (case12.value == "X" && case13.value == "X" && case14.value == "X" && case15.value == "X")){
        
        //On augmente de 1 le score de X
        allScore.scoreX++;

        //Si il s'agissait de la première manche, alors :
        if(allScore.scoreX == 1){

            //Le h2 aura comme texte celui-ci :
            document.getElementById("arbitre").innerHTML = "Les X ont gagné la première manche !";

            //Si il s'agissait de la deuxième manche, alors :
        } else if(allScore.scoreX == 2) {
            //Le h2 aura comme texte celui-ci :
            document.getElementById("arbitre").innerHTML = "Les X ont gagné la deuxième manche !"; 
        }

        //Le compteur reprends la valeur du score de X
        document.getElementById("scoreX").value = allScore.scoreX;

        //On appelle la fonction winnerOfGame
        winnerOfGame();

        //On appelle la fonction reset 1.5s après
        setTimeout(() => reset(), 1500);
    }

    //Si X remplit une colonne :
    else if((case0.value == "X" && case4.value == "X" && case8.value == "X" && case12.value == "X") || (case1.value == "X" && case5.value == "X" && case9.value == "X" && case13.value == "X") || (case2.value == "X" && case6.value == "X" && case10.value == "X" && case14.value == "X") || (case3.value == "X" && case7.value == "X" && case11.value == "X" && case15.value == "X")){
        
        //On augmente de 1 le score de X
        allScore.scoreX++;

        //Si il s'agissait de la première manche, alors :
        if(allScore.scoreX == 1){

            //Le h2 aura comme texte celui-ci :
            document.getElementById("arbitre").innerHTML = "Les X ont gagné la première manche !";

            //Si il s'agissait de la deuxième manche, alors :
        } else if(allScore.scoreX == 2) {

            //Le h2 aura comme texte celui-ci :
            document.getElementById("arbitre").innerHTML = "Les X ont gagné la deuxième manche !";
        }

        //Le compteur reprends la valeur de la variable de scoreX
        document.getElementById("scoreX").value = allScore.scoreX;

        //On appelle la fonction winnerOfGame
        winnerOfGame();

        //On appelle la fonction reset 1.5s après
        setTimeout(() => reset(), 1500);
    }

    //Si X remplit une des 2 diagonales :
    else if((case0.value == "X" && case5.value == "X" && case10.value == "X" && case15.value == "X") || (case3.value == "X" && case6.value == "X" && case9.value == "X" && case12.value == "X")){
        
        //On augmente de 1 le score de X
        allScore.scoreX++;

        //Si il s'agissait de la première manche, alors :
        if(allScore.scoreX == 1){

            //Le h2 aura comme texte celui-ci :
            document.getElementById("arbitre").innerHTML = "Les X ont gagné la première manche !";

            //Si il s'agissait de la deuxième manche, alors :
        } else if(allScore.scoreX == 2) {

            //Le h2 aura comme texte celui-ci :
            document.getElementById("arbitre").innerHTML = "Les X ont gagné la deuxième manche !";
        }

        //Le compteur reprends la valeur de la variable de scoreX
        document.getElementById("scoreX").value = allScore.scoreX;

        //On appelle la fonction winnerOfGame
        winnerOfGame();

        //On appelle la fonction reset 1.5s après
        setTimeout(() => reset(), 1500);
    }
    
    //Si O remplit une ligne :
    else if((case0.value == "O" && case1.value == "O" && case2.value == "O" && case3.value == "O") || (case4.value == "O" && case5.value == "O" && case6.value == "O" && case7.value == "O") || (case8.value == "O" && case9.value == "O" && case10.value == "O" && case11.value == "O") || (case12.value == "O" && case13.value == "O" && case14.value == "O" && case15.value == "O")){
        
        //On augmente de 1 le score de O
        allScore.scoreO++;

        //Si il s'agissait de la première manche, alors :
        if(allScore.scoreO == 1){

            //Le h2 aura comme texte celui-ci :
            document.getElementById("arbitre").innerHTML = "Les O ont gagné la première manche !";

            //Si il s'agissait de la deuxième manche, alors :
        } else if(allScore.scoreO == 2) {
            //Le h2 aura comme texte celui-ci :
            document.getElementById("arbitre").innerHTML = "Les O ont gagné la deuxième manche !";
        }

        //Le compteur reprends la valeur de la variable de scoreO
        document.getElementById("scoreO").value = allScore.scoreO;

        //On appelle la fonction winnerOfGame
        winnerOfGame();

        //On appelle la fonction reset 1.5s après
        setTimeout(() => reset(), 1500);
    }

    //Si O remplit une colonne :
    else if((case0.value == "O" && case4.value == "O" && case8.value == "O" && case12.value == "O") || (case1.value == "O" && case5.value == "O" && case9.value == "O" && case13.value == "O") || (case2.value == "O" && case6.value == "O" && case10.value == "O" && case14.value == "O") || (case3.value == "O" && case7.value == "O" && case11.value == "O" && case15.value == "O")){
        
        //On augmente de 1 le score de O
        allScore.scoreO++;

        //Si il s'agissait de la première manche, alors :
        if(allScore.scoreO == 1){

            //Le h2 aura comme texte celui-ci :
            document.getElementById("arbitre").innerHTML = "Les O ont gagné la première manche !";

            //Si il s'agissait de la deuxième manche, alors :
        } else if(allScore.scoreO == 2) {

            //Le h2 aura comme texte celui-ci
            document.getElementById("arbitre").innerHTML = "Les O ont gagné la deuxième manche !";
        }

        //Le compteur reprends la valeur de la variable de scoreO
        document.getElementById("scoreO").value = allScore.scoreO;

        //On appelle la fonction winnerOfGame
        winnerOfGame();

        //On appelle la fonction reset 1.5s après
        setTimeout(() => reset(), 1500);
    }

    //Si X remplit une des 2 diagonales :
    else if((case0.value == "O" && case5.value == "O" && case10.value == "O" && case15.value == "O") || (case3.value == "O" && case6.value == "O" && case9.value == "O" && case12.value == "O")){
        
        //On augmente de 1 le score de O
        allScore.scoreO++;

        //Si il s'agissait de la première manche, alors :
        if(allScore.scoreO == 1){

            //Le h2 aura comme texte celui-ci :
            document.getElementById("arbitre").innerHTML = "Les O ont gagné la première manche !";

            //Si il s'agissait de la deuxième manche, alors :
        } else if(allScore.scoreO == 2) {

            //Le h2 aura comme texte celui-ci
            document.getElementById("arbitre").innerHTML = "Les O ont gagné la deuxième manche !";
        }

        //Le compteur reprends la valeur de la variable de scoreO
        document.getElementById("scoreO").value = allScore.scoreO;

        //On appelle la fonction winnerOfGame
        winnerOfGame();

        //On appelle la fonction reset 1.5s après
        setTimeout(() => reset(), 1500);

        //Si la manche est une égalité :
    } else if(case0.value != "" && case1.value != "" && case2.value != "" && case3.value != "" && case4.value!= "" && case5.value != "" && case6.value != "" && case7.value != "" && case8.value != "" && case9.value != "" && case10.value != "" && case11.value != "" && case12.value != "" && case13.value != "" && case14.value != "" && case15.value != ""){
        
        //Le h2 aura comme texte celui-ci        
        document.getElementById("arbitre").innerHTML = "Manche égalité";

        //On appelle la fonction reset 1.5s après
        setTimeout(() => reset(), 1500);
    }
}

for (const currentCase of allCase) {

    //Si l'utilisateur clique sur une des cases, alors un évènement click a lieu :
    currentCase.addEventListener('click', () => {

        //Si le joueur est X
        if(XEnable == 1){

            //La case cliqué aura comme valeur un X
            currentCase.value="X";

            //La case aura une couleur de fond
            currentCase.style.backgroundColor = "#003049";

            //La case aura une couleur de font
            currentCase.style.color = "white";

            //La case cliqué sera incliquable jusqu'à la fin de la manche
            currentCase.disabled = true;

            //On appelle la fonction computerTurn
            computerTurn();

            //On appelle la fonction verifGagnant
            verifGagnant();

        //Si le joueur est O
        } else if(OEnable == 1){

            //La case cliqué aura comme valeur un O
            currentCase.value="O";

            //La case aura une couleur de fond
            currentCase.style.backgroundColor = "#780000";

            //La case aura une couleur de font
            currentCase.style.color = "white";

            //La case cliqué sera incliquable jusqu'à la fin de la manche
            currentCase.disabled = true;

            //On appelle la fonction computerTurn
            computerTurn();

            //On appelle la fonction verifGagnant
            verifGagnant();
        }
    });
}

function darkMode() {
    //Si le mode nuit est activé
    if(document.querySelector("#btn").checked) {
        
        //Le fond change de couleur
        document.querySelector('.background').style.backgroundColor = "#03071e";

        //tout les textes seront de couleur blanche
        document.querySelector('#title').style.color = "white";

        document.querySelector('#desc').style.color = "white";

        document.querySelector('#arbitre').style.color = "white";

        document.getElementById('desc-tirage').style.color = "white";

        document.getElementById('descX').style.color = "white";

        document.getElementById('descO').style.color = "white";

        document.getElementById('tirageX').style.color = "white";

        document.getElementById('tirageO').style.color = "white";

        document.getElementById('txt-choix').style.color = "white";
        
        //On cache l'image de lune
        document.getElementById('moon').style.display = "none";

        //On affiche l'image de soleil
        document.getElementById('sun').style.display = "block";
        
    //Si le mode nuit n'est pas activé
    } else {

        //Le fond sera blanc
        document.querySelector('.background').style.backgroundColor = "white";

        //Tout les textes seront noirs
        document.querySelector('#title').style.color = "black";

        document.querySelector('#desc').style.color = "black";

        document.querySelector('#arbitre').style.color = "black";

        document.getElementById('desc-tirage').style.color = "black";

        document.getElementById('descX').style.color = "black";

        document.getElementById('descO').style.color = "black";

        document.getElementById('tirageX').style.color = "black";

        document.getElementById('tirageO').style.color = "black";

        document.getElementById('txt-choix').style.color = "black";

        //On affiche l'image de lune
        document.getElementById('moon').style.display = "block";

        //On cache l'image de soleil
        document.getElementById('sun').style.display = "none";
    }
}