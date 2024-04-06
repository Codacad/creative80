document.addEventListener("DOMContentLoaded", () => {
  function getCookie(cookieName) {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
    return null;
  }

  const user = JSON.parse(getCookie("user"));
 document.querySelector('.user').innerHTML = `Welcom ${user.username}, `
});
