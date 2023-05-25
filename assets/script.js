const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//déclaration des constantes et variables

const arrowLeft = document.querySelector(".arrow_left"); // chemin vers l'img flèche gauche
const arrowRight = document.querySelector(".arrow_right"); //chemin vers l'img flèche droite
let slideInit = 0; //variable début de carousel
const containDot = document.querySelector(".dots"); //chemin vers la class dots
const dots = containDot.children; //chemin vers les enfants de la class dots
const banner = document.querySelector("#banner"); //chemin vers l'id 
const bannerImage = document.querySelector(".banner-img"); //chemin vers les images
const bannerTagLine = document.querySelector("p"); // chemin vers le texte


//fonction clic gauche

arrowLeft.addEventListener("click", function () {
	slideInit--; //image précedente
	if (slideInit <= 0) { //si on est a la première img on affiche la dernièer
		slideInit = slides.length - 1; //appel de la dernière du tableau
	}
	bannerImage.src = "./assets/images/slideshow/" + slides[slideInit].image; // chemin img avec concaténation dossier+tableau
	bannerTagLine.innerHTML = slides[slideInit].tagLine; //insertion texte
	dotSelected(); //fonction points
});

//fonction clic droit

arrowRight.addEventListener("click",function() {
	slideInit++; //image suivante
	if (slideInit >= slides.length) { //si l'on est à la dernière img on revient à la première
		slideInit = 0;
	}
	bannerImage.src = "./assets/images/slideshow/" + slides[slideInit].image; // changement image
	bannerTagLine.innerHTML = slides[slideInit].tagLine; //changement texte
	dotSelected(); //fonction points
});

console.log(arrowLeft);
console.log(arrowRight);

// bullet points

console.log(slides.length); //calcul nombre de bullets points

for (let i = 1; i < slides.length; i++) {
	const dot = document.createElement('div'); //ajout div
	dot.classList.add('dot'); //création class
	containDot.appendChild(dot); // ajour de l'élément créé à la div dots
}

// fonction points

function dotSelected() {
	for (let i = 0; i < dots.length; i++) {
		if (i === slideInit) {
			dots[i].classList.add("dot_selected"); //ajout de class sur l'élément
		} else {
			dots[i].classList.remove("dot_selected");//retrait de la class sur l'élément
		}
	}
}

