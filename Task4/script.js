const users = {};

function register() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    if (username && password) {
        users[username] = password;
        alert("Registration successful. You can now log in.");
        clearInputFields();
    } else {
        alert("Please enter both a username and password.");
    }
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    if (users[username] === password) {
        showSecuredPage(username);
        clearInputFields();
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function showSecuredPage(username) {
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("secured-page").style.display = "block";
    document.getElementById("user-greeting").textContent = username;
}

function logout() {
    document.getElementById("registration-form").style.display = "block";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("secured-page").style.display = "none";
    clearInputFields();
}

function clearInputFields() {
    const inputFields = document.querySelectorAll("input");
    inputFields.forEach((input) => (input.value = ""));
}

// Clear user data (for demonstration purposes, don't use this in a real application)
function clearUserData() {
    Object.keys(users).forEach((key) => delete users[key]);
    clearInputFields();
    logout();
    alert("User data has been cleared.");
}
