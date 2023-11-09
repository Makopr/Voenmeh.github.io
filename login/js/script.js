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
	const regText = document.getElementById("signText");

	var EnUp = /[A-Z]/.test(password);
    var nums = /\d/.test(password);
    var RuUp = /[А-Я]/.test(password);

    if (email.trim() === "" && password.trim() === "") {
		regText.setAttribute("class", "show");
		regText.textContent = "Напишите почту и пароль.";
    } else if (email.trim() === "" || !email.includes("@") || email.length < 6) {
		regText.setAttribute("class", "show");
		regText.textContent = "Напишите почту.";
    } else if (password.trim() === "") {
		regText.setAttribute("class", "show");
		regText.textContent = "Напишите пароль.";
    } else if (password.length < 7 || password.length > 20) {
		regText.setAttribute("class", "show");
		regText.textContent = "Напишите пароль из >7 символов";
    } else if (!(EnUp || RuUp)) {
		regText.setAttribute("class", "show");
		regText.textContent = "Пароль без заглавных букв";
    } else if (!nums) {
		regText.setAttribute("class", "show");
		regText.textContent = "Напишите пароль с цифрами";
    } else {
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        const userExists = registeredUsers.some(user => user.email === email && user.password === password);

        if (userExists) {
            location.href = "html/main.html";
        } else {
			regText.setAttribute("class", "show");
			regText.textContent = "Пользователя нет.";
        }
	}
});

document.getElementById("register-button").addEventListener("click", function () {
	const username = document.getElementById("RegUsername").value;
	const email = document.getElementById("RegEmail").value;
    const password = document.getElementById("RegPassword").value;
	const regText = document.getElementById("regText");
	
	var EnUp = /[A-Z]/.test(password);
    var nums = /\d/.test(password);
    var RuUp = /[А-Я]/.test(password);

    if (username.trim() === "" && (email.trim() === "" || !email.includes("@")) && password.trim() === "") {
		regText.setAttribute("class", "show");
		regText.textContent = "Нет логина, почты и пароля.";
    } else if (username.trim() === "" && (email.trim() === "" || !email.includes("@") || email.length < 6)){
		regText.setAttribute("class", "show");
		regText.textContent = "Напишите логин и пароль.";
	} else if ((email.trim()  === "" || !email.includes("@") || email.length < 6) && password.trim() === ""){
		regText.setAttribute("class", "show");
		regText.textContent = "Напишите почту и пароль.";
	} else if (username.trim() === "" && password.trim() === ""){
		regText.setAttribute("class", "show");
		regText.textContent = "Напишите логин и пароль.";
	} else if(email.trim() === "" || !email.includes("@") || email.length < 6){
		regText.setAttribute("class", "show");
		regText.textContent = "Напишите почту.";
	} else if (username.trim() === "") {
		regText.setAttribute("class", "show");
		regText.textContent = "Напишите логин.";
    } else if (password.trim() === "") {
		regText.setAttribute("class", "show");
		regText.textContent = "Напишите пароль.";
    } else if (password.length < 7 || password.length > 20) {
		regText.setAttribute("class", "show");
		regText.textContent = "Пароль из <7 символов";
    } else if (!(EnUp || RuUp)) {
		regText.setAttribute("class", "show");
		regText.textContent = "Пароль без заглавных букв";
    } else if (!nums) {
		regText.setAttribute("class", "show");
		regText.textContent = "Пароль без цифр";
    } else {
			const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
			const userExists = registeredUsers.some(user => user.email === email);
			
			if (userExists) {
				regText.setAttribute("class", "show");
				regText.textContent = "Пользователь уже есть.";
			} else {
				registeredUsers.push({ username, email, password });
				localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
	
				localStorage.setItem("loggedIn", "true");
				localStorage.setItem("username", username);
				localStorage.setItem("email", email);
				localStorage.setItem("password", password);
				
				regText.setAttribute("class", "show");
			}
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



 