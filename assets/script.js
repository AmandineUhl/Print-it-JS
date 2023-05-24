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

//déclaration des constantes

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector("arrow_right");
let slideInit = 0;

//fonction clic gauche

arrowLeft.addEventListener("click", function () {
	slideInit--;  
	if (slideInit < 0) {
		slideInit = slides.length - 1;
	} 
});

//fonction clic droit

arrowRight.addEventListener("click",function() {
	slideInit++; 
	if (slideInit >= slides.length) {
		slideInit = 0;
	}
})

console.log(arrowLeft);

