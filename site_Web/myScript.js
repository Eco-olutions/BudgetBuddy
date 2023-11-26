
let stockage = []
let index = 0;
let listElement;


function montreFeedback() {
    //acceder a feebackzone pour recevoir le texte
    let reviewText = document.getElementById("feedbackZone").value;

    //ajouter le review a stockage
    stockage.push(reviewText);


    //cree un espace pour ajouter le feeback sur la page html
    let userFeedback = document.getElementById("userFeedback");
    showReviews(); //ajoute le review ecrit le plus courant a la liste
    index++; //augmenter l'index la prochaine fois que je clique sur le button l'index est 1 de +
    userFeedback.append(listElement);

    //alerte pour tester
    //alert("Review: " + reviewText);

}

function showReviews() {
//si on a pas de liste on cree avant sinon on ignore //permet d'avoir une seule liste
    if (!listElement) {
        listElement = document.createElement("ul");
    }

    //cree les elem de la liste pour les ajouter a la liste
    let listItem = document.createElement("li");
    listItem.textContent = stockage[index];
    listElement.append(listItem);

}//a