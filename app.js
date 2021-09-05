function save() {
  let userName = document.getElementById("name");
  let password = document.getElementById("password");
  userName = userName.value;
  password = password.value;
  localStorage.setItem("ID", userName);
  localStorage.setItem("Password", password);
  let message = document.getElementById("messageEL");
  message.textContent = "Your ID and Password has been saved !";
}
