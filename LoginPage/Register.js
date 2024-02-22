let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let psw = document.getElementById("psw");
let btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
  redirection();
});
const setError = (ele, msg) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = msg;
  box.classList.add("error");
  box.classList.remove("success");
};
const setSuccess = (ele) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = "";
  box.classList.add("success");
  box.classList.remove("error");
};
const mailFormat = (e) => {
  const re = /\w+@\w+.\w+/;
  return re.test(String(e).toLowerCase());
};
const passFormat = (p) => {
    // const re = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
    const re = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gmu;
    return re.test(p);
}
const userFormat = (u) => {
    const re = /[^0-9]/;
    return re.test(u);
}
// btn.addEventListener("click", () => {
//   let localItems = JSON.parse(localStorage.getItem("localItem"));
//   if (localItems === null) {
//     itemsList = [];
//   } else {
//     itemsList = localItems;
//   }
//   itemsList.push(username.value);
//   itemsList.push(email.value);
//   itemsList.push(password.value);
//   itemsList.push(psw.value);
//   localStorage.setItem("localItem", JSON.stringify(itemsList));
// });
function validation() {
  let user = username.value.trim();
  let mail = email.value.trim();
  let pass1 = password.value.trim();
  let pass2 = psw.value.trim();


  
  


  if (user === "") {
    setError(username, "Username is required");
  } else if (!userFormat(user)) {
    setError(username, "Digitas are not allowed");
  } else {
    setSuccess(username);  localStorage.setItem("Username", user);
  }
  if (mail === "") {
    setError(email, "Email is required");
  } else if (!mailFormat(mail)) {
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);localStorage.setItem("Email", mail);
  }
  if (pass1 === "") {
    setError(password, "Password is required");
  } else if (!passFormat(pass1)) {
    setError(password, "Password must be a minimum of 8 characters including number, Upper, Lower And one special character");
  } else {
    setSuccess(password);localStorage.setItem("Password", pass1);
  }
  if (pass2 === "") {
    setError(psw, "Please confirm your password");
  } else if (pass2 != pass1) {
    setError(psw, "Passwords does't match");
  } else {
    setSuccess(psw);  localStorage.setItem("Cpassword", pass2);
  }
}
function redirection(){
    let uN = localStorage.getItem("Username")
    let email = localStorage.getItem("Email")
    let password = localStorage.getItem("Password")
    let Cpassword = localStorage.getItem("Cpassword")
    if(uN&&email&&password&&Cpassword){
        window.location.assign("./login.html")
    }
}