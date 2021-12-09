// PART 1

// On target l'input utilisateur
let inputSouille = document.getElementById("bourreTonFichierTXTici");

// Ptit event listener des familles pour écouter l'event change sur l'input
inputSouille.addEventListener("change", function (e) {
  // On récupère le fichier du démon
  let pourquoiCestFormateCommeCaBordel = inputSouille.files[0];

  // On initialise le truc béni des dieux pour lire le bouzin
  let jesus = new FileReader();
  jesus.onload = function (e) {
    // on récupère le résultat de l'opération du saint esprit dans une var
    let deguiDegueu = jesus.result;

    // Le formatage est un chouille différent de l'exo 1 parce qu'il faut d'abord récupérer
    // les lignes et ensuite les shlass en deux pour avoir la paire de valeurs direction et distance parcourue
    let moinsDegueulasse = deguiDegueu
      .trim()
      .split("\n")
      .map((line) => {
        let [direction, distance] = line.split(" ");

        // La distance c'est pour l'instant une string, hors on veut de l'int, donc parseInt dans gueule, gauche droite bim boum
        distance = parseInt(distance);

        return {
          direction,
          distance,
        };
      });

    // On a nos paires de valeurs, lesssgo
    
    // On commence à 0 en horizontal et 0 en profondeur
    let ouCestQuonEst = 0;
    let profondeurXXX = 0;
    
    // On parse le tableau pour check chaque paire
    // On vérifie la direction avec les conditions (if, else if et else)
    // On incrémente / décremente en fonction les valeurs qu'on a définit au dessus
    for (let { direction, distance } of moinsDegueulasse) {
      if (direction === "down") {
        profondeurXXX += distance;
      } else if (direction === "up") {
        profondeurXXX -= distance;
      } else if (direction === "forward") {
        ouCestQuonEst += distance;
      } else {
        // Si jamais Billy de la compta a entré une direction du genre forwERDMAGERD
        console.log(`C'est quoi cette merde là tu peux pas faire attention Billy ? ${direction}`);
      }
    }

    // Et on finit par un ptit console log des familles
    // Sans oublier de multiplier les deux valeurs comme demandé dans l'exercice
    // C'est faux j'ai pas perdu 20 minutes parce que j'ai pas lu...
    console.log(profondeurXXX * ouCestQuonEst);
  };

  jesus.readAsText(pourquoiCestFormateCommeCaBordel);
});
