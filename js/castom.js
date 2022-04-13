"use stricn";

let homeScreen = document.getElementById("homeScreen");
let inputNumber = document.getElementById('PoientInput');
let ponentSubmit = document.getElementById('ponentSubmit');

let gameScreen = document.getElementById("gameScreen");
let wpSet = document.getElementById("wpSet");

let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");

let comShow = document.getElementById("comShow");
let youShow = document.getElementById("youShow");

let winSection = document.getElementById("winSection");
let winIMG = document.getElementById("winIMG");
let result = document.getElementById("result");

let rePlay = document.getElementById("rePlay");

let comSelect = document.getElementById("comSelect");
let youSelect = document.getElementById("youSelect");


ponentSubmit.addEventListener("click", function() {
	let inputVlu = inputNumber.value;	

	if (inputVlu == "" || inputVlu == 0) {
		inputNumber.style.borderColor = "red";
	} else {
		homeScreen.classList.add("disNone");
		gameScreen.classList.remove("disNone");

		gamePart(inputVlu);
	}

})

	let youVLu = 0;
	let comVlu = 0;

rePlay.addEventListener("click", function() {
	gamePart(wpSet.innerText);
	homeScreen.classList.add("disNone");
	gameScreen.classList.remove("disNone");
	winSection.classList.add("disNone");
	comVlu = 0;
	youVLu = 0;
	youShow.innerText = comVlu;
	comShow.innerText = youVLu;

	comSelect.innerText = "";
	youSelect.innerText = "";
})


function randomVlu(rendomNumber) {

	if (rendomNumber == 0) {
		comSelect.innerText = "Rock";
	} else if (rendomNumber == 1) {
		comSelect.innerText = "Paper";
	} else if (rendomNumber == 2) {
		comSelect.innerText = "Seissor";
	}

	console.log(rendomNumber);
}


function gamePart(wpvlu) {

	wpSet.innerText = wpvlu;

	icon1.addEventListener("click", ()=>{
		let rendomNumber  = Math.floor(Math.random() * 3);
		youSelect.innerText = "Rock";

		if (rendomNumber == 2) {
			youVLu = youVLu + 1;
			iconClickVlu(youVLu, comVlu);
			randomVlu(rendomNumber);
		} else if (rendomNumber == 1) {
			comVlu = comVlu + 1;
			iconClickVlu(youVLu, comVlu);
			randomVlu(rendomNumber);
		}
	})

	icon2.addEventListener("click", ()=>{
		let rendomNumber  = Math.floor(Math.random() * 3);
		randomVlu(rendomNumber);
		youSelect.innerText = "Paper";

		if (rendomNumber == 3) {
			comVlu = comVLu + 1;
			iconClickVlu(youVLu, comVlu);
			randomVlu(rendomNumber);
		} else if (rendomNumber == 0) {
			youVLu = youVLu + 1;
			iconClickVlu(youVLu, comVlu);
			randomVlu(rendomNumber);
		}
	})

	icon3.addEventListener("click", ()=>{
		let rendomNumber  = Math.floor(Math.random() * 3);
		randomVlu(rendomNumber);
		youSelect.innerText = "Seissor";

		if (rendomNumber == 0) {
			comVlu = comVlu + 1;
			iconClickVlu(youVLu, comVlu);
			randomVlu(rendomNumber);
		} else if (rendomNumber == 1) {
			youVLu = youVLu + 1;
			iconClickVlu(youVLu, comVlu);
			randomVlu(rendomNumber);
		}
	})
}

function iconClickVlu(you, com) {
	youShow.innerText = you;
	comShow.innerText = com;

	if (you == wpSet.innerText || com == wpSet.innerText) {
		gameScreen.classList.add("disNone");
		winSection.classList.remove("disNone");
	}

	if (you == wpSet.innerText) {
		winIMG.src = "images/wine.png";
		result.innerText = "You Wine!";
	} else if (com == wpSet.innerText) {
		winIMG.src = "images/fell.png";
		result.innerText = "You Fall!";
	}
}

let homeBack = document.getElementById("homeBack");
homeBack.addEventListener("click", function() {
	homeScreen.classList.remove("disNone");
	gameScreen.classList.add("disNone");
	winSection.classList.add("disNone");
	inputNumber.value = "";
	comVlu = 0;
	youVLu = 0;
	youShow.innerText = comVlu;
	comShow.innerText = youVLu;
	comSelect.innerText = "";
	youSelect.innerText = "";

})