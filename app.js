// recuperer toutes les bonnes reponses dans un tableau
const bonneReponse = ["a", "b", "a", "d", "c"]
const form = document.querySelector('.quizz-form')

// fonction pour determiner les bonnes reponses dans le formulaire

function formFormulaire(e){
    e.preventDefault();
    const  resultat = []
    const allInputButton = document.querySelectorAll("input[type='radio']:checked")
    
    allInputButton.forEach((choixUser, indexBonneReponse) => {
        if (choixUser.value === bonneReponse[indexBonneReponse]) {
            resultat.push(true)
        } else {
            resultat.push(false)
        }
    })

    console.log(resultat)
    result(resultat)
}

form.addEventListener('submit', formFormulaire)


const resultat = document.querySelector('.resultat');
const titreResultat = document.querySelector('.resultat h2');
const scoreResultat = document.querySelector('.resultat .score');
const infoResultat = document.querySelector('.resultat .info');

function result(reponses) {


    // On filtre les reponses
    const numberGutAnswer = reponses.filter(function(rep){
        return rep === false;
    }).length;
    
    console.log(numberGutAnswer);

    switch(numberGutAnswer){
        case 0:
        resultat.style.backgroundColor = "rgb(125, 241, 129)"
        titreResultat.innerText = `😎Félicitation, c'est un sans faute !😎`;
        infoResultat.innerText = `👏👏👏👏👏👏`;
        scoreResultat.innerHTML = "Score: <span> 5 / 5 </span>"
      ;
      break;
        case 1:
        resultat.style.backgroundColor = "rgb(241, 125, 125)"
        titreResultat.innerText = `😅Il y a ${numberGutAnswer} erreur 😅`;
        infoResultat.innerText = `Presque !!!`;
        scoreResultat.innerHTML = "Score: <span> 4 / 5 </span>"
      break;
        case 2:
        resultat.style.backgroundColor = "rgb(241, 125, 125)"
        titreResultat.innerText = `😅Il y a ${numberGutAnswer} erreurs 😅`;
        infoResultat.innerText = `Oups !!!`;
        scoreResultat.innerHTML = "Score: <span> 3 / 5 </span>"
      break;
        case 3:
        resultat.style.backgroundColor = "rgb(241, 125, 125)"
        titreResultat.innerText = `😅Il y a ${numberGutAnswer} erreurs 😅`;
        infoResultat.innerText = `Oups !!!`;
        scoreResultat.innerHTML = "Score: <span> 2 / 5 </span>"
      break;
        case 4:
        resultat.style.backgroundColor = "rgb(241, 125, 125)"
        titreResultat.innerText = `😅Il y a ${numberGutAnswer} erreurs 😅`;
        infoResultat.innerText = `Oups !!!`;
        scoreResultat.innerHTML = "Score: <span> 1 / 5 </span>"
      break;
        case 5:
        resultat.style.backgroundColor = "rgb(241, 125, 125)"
        titreResultat.innerText = `😅Il y a ${numberGutAnswer} erreurs 😅`;
        infoResultat.innerText = `Oups !!!`;
        scoreResultat.innerHTML = "Score: <span> 1 / 6 </span>"
      break;
      default:
          titreResultat.innerText = `Erreur innatendu !`;
      }
}


function funcrejouer (e){
    e.preventDefault();
    location.reload();
}

rejouer.addEventListener('click', funcrejouer)
