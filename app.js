// On créér un tableau uniquement composé de bonnes reponses

const bonneReponse = ["a", "b", "a", "d", "c"]
const form = document.querySelector('.quizz-form')
let rejouer = document.getElementById('rejouer')

form.addEventListener('submit', funcForm)

function funcForm(e){
    // etant donné que c'est une form on doit annuler son comportement de base
    e.preventDefault();
    const resultat = []
    const tousLesBoutonsRadios = document.querySelectorAll("input[type='radio']:checked")

    tousLesBoutonsRadios.forEach((radioButtons, index)=> {
        if (radioButtons.value === bonneReponse[index]) {
            resultat.push(true)
        } else {
            resultat.push(false)
        }
    })

    funcResultat(resultat)
}

const resultat = document.querySelector('.resultat')
const titreResultat = document.querySelector('.resultat h2')
const scoreResultat = document.querySelector('.resultat , score')
const infoResultat = document.querySelector('.resultat, .info')

function funcResultat(res){
    // nombre d'erreurs
    const nombrebonnereponses = res.filter(el => el === true).length;
    console.log(nombrebonnereponses)
    resultat.style.textAalign = 'center'
    resultat.style.display = 'flex'
    resultat.style.alignItems = 'center'
    scoreResultat.textContent = `Score : ${nombrebonnereponses} / ${bonneReponse.length}`;

}

function funcrejouer(e) {
    e.preventDefault(); // Empêche l'action par défaut du bouton

    // Rafraîchir la page
    location.reload(); // Cela recharge la page
}

rejouer.addEventListener('click', funcrejouer); // Ajoute l'événement au bouton "Rejouer"




rejouer.addEventListener('click', funcrejouer)