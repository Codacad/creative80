import getCookie from "./userCookie.js";
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(getCookie("user"));
  document.querySelector(".user").innerHTML = `Welcome ${user.username},`;
});
