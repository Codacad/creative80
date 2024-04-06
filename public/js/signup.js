document.addEventListener("DOMContentLoaded", () => {
  const signup = async (event) => {
    event.preventDefault();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const serverMessage = await response.json();
      console.log(serverMessage);
      document.querySelector(
        ".signup-message"
      ).innerHTML = `<p>${serverMessage.message}</p>`;
      setTimeout(() => {
        if (serverMessage.signup) {
          window.location.replace("/login");
        }
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
    username = "";
    password = "";
  };

  const form = document.querySelector("form");
  form.addEventListener("submit", signup);
});