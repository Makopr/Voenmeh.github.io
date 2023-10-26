const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

document.getElementById("sign-button").addEventListener("click", function () {
	const email = document.getElementById("SignEmail").value;
    const password = document.getElementById("SignPassword").value;

	var EnUp = /[A-Z]/.test(password);
    var nums = /\d/.test(password);
    var RuUp = /[А-Я]/.test(password);

    if (email.trim() === "" && password.trim() === "") {
		alert("Напишите почту и пароль.");
    } else if (email.trim() === "" || !email.includes("@") || email.length < 6) {
        alert("Напишите почту.");
    } else if (password.trim() === "") {
        alert("Напишите пароль.");
    } else if (!(EnUp || RuUp) || !nums || password.length < 7 || password.length > 20) {
        alert("Напиишите пароль, где больше 7 символов, с заглавными буквами и цифрами.");
    } else {
		location.href = "html/main.html";
	}
});

document.getElementById("register-button").addEventListener("click", function () {
	const username = document.getElementById("RegUsername").value;
	const email = document.getElementById("RegEmail").value;
    const password = document.getElementById("RegPassword").value;
	
	var EnUp = /[A-Z]/.test(password);
    var nums = /\d/.test(password);
    var RuUp = /[А-Я]/.test(password);

    if (username.trim() === "" && (email.trim() === "" || !email.includes("@")) && password.trim() === "") {
		alert("Напишите логин, почту и пароль.");
    } else if (username.trim() === "" && (email.trim() === "" || !email.includes("@") || email.length < 6)){
		alert("Напишите логин и почту.");
	} else if ((email.trim()  === "" || !email.includes("@") || email.length < 6) && password.trim() === ""){
		alert("Напишите почту и пароль.");
	} else if (username.trim() === "" && password.trim() === ""){
		alert("Напишите логин и пароль.");
	} else if(email.trim() === "" || !email.includes("@") || email.length < 6){
		alert("Напишите почту.");
	} else if (username.trim() === "") {
        alert("Напишите логин.");
    } else if (password.trim() === "") {
        alert("Напишите пароль.");
    } else if (!(EnUp || RuUp) || !nums || password.length < 7 || password.length > 20) {
        alert("Напишите пароль, где больше 7 символов, с заглавными буквами и цифрами.");
    } else {
		location.href = "html/main.html";
    }
});

document.getElementById("regIcon").addEventListener("click", () => {
	const regInputPass = document.getElementById("RegPassword");
	const regIconPass = document.getElementById("regIcon");

	if (regInputPass.getAttribute("type") === "password"){
		regInputPass.setAttribute("type", "text");
		regIconPass.setAttribute("src", "img/no-view.svg");
	}else {
		regInputPass.setAttribute("type", "password");
		regIconPass.setAttribute("src", "img/view.svg");
	}
});

document.getElementById("signIcon").addEventListener("click", () => {
	const signInputPass = document.getElementById("SignPassword");
	const signIconPass = document.getElementById("signIcon");
	
	if (signInputPass.getAttribute("type") === "password"){
		signInputPass.setAttribute("type", "text");
		signIconPass.setAttribute("src", "img/no-view.svg");
	}else {
		signInputPass.setAttribute("type", "password");
		signIconPass.setAttribute("src", "img/view.svg");
	}
});



 