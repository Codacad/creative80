document.addEventListener("DOMContentLoaded", () => {
  const login = async (e) => {
    e.preventDefault();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let loginAPIUrl = "";
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      // local development server
      loginAPIUrl = "http://localhost:3001/login";
    } else {
      loginAPIUrl = "https://creative80.onrender.com/login";
    }
    try {
      const response = await fetch(loginAPIUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const message = await response.json();
      document.querySelector(".login-message").innerHTML = `${message.message}`;
      if (message.login) {
        window.location.href = "dashboard";
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const form = document.querySelector(".login");
  form.addEventListener("click", login);
});
