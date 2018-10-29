var q1 = prompt("Quel est la couleur du cheval blanc d'Henri IV ?");
var cheval = "blanc";
var q1EnMinuscules = q1.toLowerCase();



while (q1EnMinuscules!==cheval)
{
	alert("Ce n'est pas la bonne réponse, recommencer");
	q1 = prompt("Quel est la couleur du cheval blanc d'Henri IV ?");
}

alert("Bonne réponse, appuyez sur OK pour la question suivante.");


var q2 = prompt("Combien y a-t-il de 7 nains ?");
var nainsChiffre = "7";
var nainsLettre = "sept";
var q2EnMinuscules = q2.toLowerCase();

while ((q2EnMinuscules!==nainsChiffre)&&(q2EnMinuscules!==nainsLettre))
{
	alert("Ce n'est pas la bonne réponse, recommencer");
	q2 = prompt("Combien y a-t-il de 7 nains ?");
}

alert("Bonne réponse, Vous avez répondu aux deux questions.");

