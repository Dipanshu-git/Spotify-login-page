document.addEventListener("DOMContentLoaded", () => {
  const login = document.getElementById("login_button");

  login.addEventListener("click", (e) => {
    const email = document.getElementById("email_input").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
      alert("Please enter both email and password!");
    } else {
      // ✅ Redirect manually using JS
      window.location.href = "spotify.html";
    }
  });
});
