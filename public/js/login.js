document.addEventListener("DOMContentLoaded", () => {
  const login = async (e) => {
    e.preventDefault();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    try {
      const response = await fetch("http://localhost:3001/login", {
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
      if(message.login){
        window.location.href = "dashboard"
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const form = document.querySelector(".login");
  form.addEventListener("click", login);
});
