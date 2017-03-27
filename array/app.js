	var fruits = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];


	var mois = ['Janvier','Février','Mars','Avril', 'Mai','Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

	//Exercice 1//
	console.log(mois);

	//Exercice 2//
	console.log(mois[2]);

	//Exercice 3//
	console.log(mois[4]);

	//Exercice 4//
	console.log(mois[10]);

	//Exercice 5//
	mois.splice(7, 1, "Août");
	console.log(mois);

	//Exercice 6//
	for(var i = 0; i<=mois.length; i++){
	console.log(mois);
	}
	//Exercice 8//

	fruits.push("Courgette");
	console.log(fruits);

	//Exercice 9//
	fruits[4].push('Citron');
	console.log(fruits);

	//Exercice 10//
	fruits.splice(1, 1);
	console.log(fruits);

	//Exercice 11//
	fruits.splice(2, 0, "Poire");
	console.log(fruits);
