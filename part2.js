// PART 2

// On target l'input utilisateur
let inputSouille2 = document.getElementById("bourreTonFichierTXTici");

// Ptit event listener des familles pour écouter l'event change sur l'input
inputSouille2.addEventListener("change", function (e) {
  // On récupère le fichier du démon
  let pourquoiCestFormateCommeCaBordel2 = inputSouille2.files[0];

  // On initialise le truc béni des dieux pour lire le bouzin
  let jesus2 = new FileReader();
  jesus2.onload = function (e) {
    // on récupère le résultat de l'opération du saint esprit dans une var
    let deguiDegueu2 = jesus2.result;

    // Le formatage est un chouille différent de l'exo 1 parce qu'il faut d'abord récupérer
    // les lignes et ensuite les shlass en deux pour avoir la paire de valeurs direction et distance parcourue
    let moinsDegueulasse2 = deguiDegueu2
      .trim()
      .split("\n")
      .map((line) => {
        let [direction2, distance2] = line.split(" ");

        // La distance c'est pour l'instant une string, hors on veut de l'int, donc parseInt dans gueule, gauche droite bim boum
        distance2 = parseInt(distance2);

        return {
          direction2,
          distance2,
        };
      });

    // On a nos paires de valeurs, lesssgo
    
    // On commence à 0 en horizontal et 0 en profondeur
    let ouCestQuonEst2 = 0;
    let profondeurXXX2 = 0;
    let counterStrikeGO = 0;
    
    // On parse le tableau pour check chaque paire
    // On vérifie la direction avec les conditions (if, else if et else)
    // On incrémente / décremente en fonction les valeurs qu'on a définit au dessus
    // La petite complexité par rapport à la part 1 c'est de transformer ce qu'on nous dit en math
    // Et globalement, on peut résumer à 'pour aller plus profond, faut avancer'
    // C'est pas moi qu'ai fait l'exercice et chacun y verra une métaphore différente..........
    for (let { direction2, distance2 } of moinsDegueulasse2) {
      if (direction2 === "down") {
        counterStrikeGO += distance2;
      } else if (direction2 === "up") {
        counterStrikeGO -= distance2;
      } else if (direction2 === "forward") {
        // Voila c'est ici que ça change
        // Imaginons on vise vers le bas avec notre panzer-aqua-420
        // Si on se met à avancer, forcément on va aller plus profond
        // Du coup quand l'ordre est forward, il faut aussi incrémenter la profondeur
        // Et la nouvelle profondeur se calcule en faisant (profondeur actuelle) + ((angle de visé) x (distance))
        ouCestQuonEst2 += distance2;
        profondeurXXX2 += counterStrikeGO * distance2;
      } else {
        // Si jamais Billy de la compta a entré une direction du genre forwERDMAGERD
        console.log(`C'est quoi cette merde là tu peux pas faire attention Billy ? ${direction2}`);
      }
    }

    // Et on finit par un ptit console log des familles
    // Sans oublier de multiplier les deux valeurs comme demandé dans l'exercice
    // Cette fois ci j'ai pas oublié bordel de zut
    console.log(profondeurXXX2 * ouCestQuonEst2);
  };

  jesus2.readAsText(pourquoiCestFormateCommeCaBordel2);
});
