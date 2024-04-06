document.addEventListener("DOMContentLoaded", () => {
  const signup = async (event) => {
    event.preventDefault();
    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let signupAPIUrl = "";
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      // local development server
      signupAPIUrl = "http://localhost:3001/signup";
    } else {
      signupAPIUrl = "https://creative80.onrender.com/signup";
    }
    try {
      const response = await fetch(signupAPIUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          username,
          password,
        }),
      });
      const serverMessage = await response.json();
      console.log(serverMessage);
      document.querySelector(
        ".signup-message"
      ).innerHTML = `<span class="show-message">${serverMessage.message}</span>`;
      setTimeout(() => {
        if (serverMessage.signup) {
          window.location.replace("/login");
        }
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }

    setTimeout(() => {
      document
        .querySelector(".signup-message span")
        .classList.add("hide-message");
    }, 5000);
    username = "";
    password = "";
  };

  const form = document.querySelector("form");
  form.addEventListener("submit", signup);
});
