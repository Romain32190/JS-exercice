	//Exercice 1//
	function essai(){

		return true;
	}

	console.log( essai() );

	//Exercice 2//

	function string(a){
		return a;
	}

	console.log(string("Hello world!"));

	//Exercice 3//

	function Romain(a,b){
		return a+b;
	}

	console.log(Romain("Hello world!","Salut!"));

	//Exercice 4//

	function nombres (chiffre1, chiffre2){

		if (chiffre1 > chiffre2){
			return "le premier nombre est plus grand";
		}

		else if (chiffre1 < chiffre2){
            return "le nombre est plus petit";
		}

		else{
            return "Ils sont égaux";
		}
}

	console.log(nombres(10,8));

function Nombrechaine(nombre, chaine){
	return nombre+ " " + chaine;

}

console.log(Nombrechaine(19, "Romain"))
