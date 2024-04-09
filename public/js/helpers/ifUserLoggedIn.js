import userCookie from '../userCookie.js'

document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(userCookie('user'))
  if(user !== null){
    document.querySelector('.search-button-side').style.display = "none"
    document.querySelector('.logged-user').innerHTML = `<div class="user">
      <span>${user.username}</span>
      <a href="/logout" class="logout">Logout</a>
    </div>`
  } else {
    document.querySelector('.search-button-side').style.display = "flex"
  }
})
