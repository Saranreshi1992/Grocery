if (window.location.pathname.includes("groceryhub.html") || window.location.pathname === "/") {
  const button = document.getElementById("authButton");

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  button.textContent = isLoggedIn ? "Logout" : "Login";

  button.addEventListener("click", () => {
    if (isLoggedIn) {
      // Logout
      alert("Log out Successfully");
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.setItem("isLoggedIn", "false");
      location.reload();
    } else {
      window.location.href = "login.html";
    }
  });
}

if (window.location.pathname.includes("login.html")) {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (!users[username]) {
      alert("User not found. Please create an account.");
      window.location.href = "create.html";
      return;
    }

    if (users[username].password !== password) {
      alert("Incorrect password.");
      return;
    }

    users[username].activated = true;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", "true");

    alert("Login successful!");
    window.location.href = "groceryhub.html";
  });
}

function checkLoginAndRedirect() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (!isLoggedIn) {
    alert("Please login to perform this action.");
    window.location.href = "login.html";
    return false;
  }
  return true;
}