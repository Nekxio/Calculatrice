// On défini les variables
const touches = [...document.querySelectorAll('.bouton')];
const listeKeyCodes = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

// On écoute les événements clavier
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
});

// On récupère la valeur de la touche appuyée
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
});

// On crée une fonction pour calculer le résultat, afficher chaque touche appuyée ainsi que le résultat et vider l'écran

const calculer = (valeur) => {
    if (listeKeyCodes.includes(valeur)){
        switch (valeur) {
            case '67':
                ecran.textContent = '';
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeyCodes = listeKeyCodes.indexOf(valeur);
                const touche = touches[indexKeyCodes];
                ecran.textContent += touche.innerHTML;
                break;
        }
    }
}

window.addEventListener('error', () => {
    alert('Une erreur est survenue' + e.message);
});