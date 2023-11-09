const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
const userExists = registeredUsers.some(user => user.email === email && user.password === password);

if (!userExists) {
    location.href = "../index.html";
} 