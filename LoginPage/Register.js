let form = document.getElementById("form");
// let username = document.getElementById("username");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let psw = document.getElementById("psw");
// let btn = document.getElementById("btn");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   validation();
//   redirection();
// });
// const setError = (ele, msg) => {
//   let box = ele.parentElement;
//   let error = box.querySelector(".error");

//   error.innerText = msg;
//   box.classList.add("error");
//   box.classList.remove("success");
// };
// const setSuccess = (ele) => {
//   let box = ele.parentElement;
//   let error = box.querySelector(".error");

//   error.innerText = "";
//   box.classList.add("success");
//   box.classList.remove("error");
// };
// const mailFormat = (e) => {
//   const re = /\w+@\w+.\w+/;
//   return re.test(String(e).toLowerCase());
// };
// const passFormat = (p) => {
//     // const re = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
//     const re = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gmu;
//     return re.test(p);
// }
// const userFormat = (u) => {
//     const re = /[^0-9]/;
//     return re.test(u);
// }
// // btn.addEventListener("click", () => {
// //   let localItems = JSON.parse(localStorage.getItem("localItem"));
// //   if (localItems === null) {
// //     itemsList = [];
// //   } else {
// //     itemsList = localItems;
// //   }
// //   itemsList.push(username.value);
// //   itemsList.push(email.value);
// //   itemsList.push(password.value);
// //   itemsList.push(psw.value);
// //   localStorage.setItem("localItem", JSON.stringify(itemsList));
// // });
// function validation() {
//   let user = username.value.trim();
//   let mail = email.value.trim();
//   let pass1 = password.value.trim();
//   let pass2 = psw.value.trim();


  
  

console.log('s');
//   if (user === "") {
//     setError(username, "Username is required");
//   } else if (!userFormat(user)) {
//     setError(username, "Digitas are not allowed");
//   } else {
//     setSuccess(username);  localStorage.setItem("Username", user);
//   }
//   if (mail === "") {
//     setError(email, "Email is required");
//   } else if (!mailFormat(mail)) {
//     setError(email, "Please enter a valid email");
//   } else {
//     setSuccess(email);localStorage.setItem("Email", mail);
//   }
//   if (pass1 === "") {
//     setError(password, "Password is required");
//   } else if (!passFormat(pass1)) {
//     setError(password, "Password must be a minimum of 8 characters including number, Upper, Lower And one special character");
//   } else {
//     setSuccess(password);localStorage.setItem("Password", pass1);
//   }
//   if (pass2 === "") {
//     setError(psw, "Please confirm your password");
//   } else if (pass2 != pass1) {
//     setError(psw, "Passwords does't match");
//   } else {
//     setSuccess(psw);  localStorage.setItem("Cpassword", pass2);
//   }
// }
// function redirection(){
//     let uN = localStorage.getItem("Username")
//     let email = localStorage.getItem("Email")
//     let password = localStorage.getItem("Password")
//     let Cpassword = localStorage.getItem("Cpassword")
//     if(uN&&email&&password&&Cpassword){
//         window.location.assign("./login.html")
//     }
// }

console.log("This is project 4");
const user = document.getElementById('user');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const pass = document.getElementById('pass');
const cpass = document.getElementById('cpass');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();
let done = "false";
localStorage.setItem('Done',done)
// console.log(name, email, phone);
user.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,20}$/;
    let str = user.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        user.classList.remove('is-invalid');
        validUser = true;
        localStorage.setItem("Name", str);
    }
    else{
        console.log('Your name is not valid');
        user.classList.add('is-invalid');
        validUser = false;
        
        
    }
})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;localStorage.setItem("Email", str);
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})
pass.addEventListener('blur', ()=>{
    console.log("pass is blurred");
    // Validate email here
    let regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gmu;;
    let str = pass.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your pass is valid');
        pass.classList.remove('is-invalid');
        validPass = true;
        localStorage.setItem("Password", str);
    }
    else{
        console.log('Your pass is not valid');
        pass.classList.add('is-invalid');
        validPass = false;
    }
})
cpass.addEventListener('blur', ()=>{
    console.log("pass is blurred");
    // Validate email here
    // let regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gmu;;
    let str = pass.value;
    let cstr = cpass.value;
    // console.log(regex, str,cstr);
    if(str === cstr){
        console.log('Your pass is matched');
        cpass.classList.remove('is-invalid');
        validcPass = true;
        // localStorage.setItem("Password", str);
    }
    else{
        console.log('Your pass is not Match');
       cpass.classList.add('is-invalid');
        validcPass = false;
    }
})
phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
        localStorage.setItem("Phone", str);
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
        
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);
    
    // Submit your form here
    if(validEmail && validUser && validPhone &&validPass){
        let failure = document.getElementById('failure');
        let done = "True";
        localStorage.setItem("Done",done);
        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
       setTimeout(()=>{
        redirection();
       },3000)
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        let done = "false";
        localStorage.setItem("Done",done);

        failure.classList.add('show');
        success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }

      

})


// let btn = document.getElementById('submit')
// btn.addEventListener("click", () => {
//     let localItems = JSON.parse(localStorage.getItem("localItem"));
//     if (localItems === null) {
//       itemsList = [];
//     } else {
//         localItems==[];
//       itemsList = localItems;
//     }
//     itemsList.push(name.value);
//     itemsList.push(email.value);
//     itemsList.push(phone.value);
//     itemsList.push(pass.value);
//     // itemsList.push(psw.value);
//     localStorage.setItem("localItem", JSON.stringify(itemsList));
//   });


 function redirection(){
        // let uN = localStorage.getItem("Username")
        // let email = localStorage.getItem("Email")
        // let password = localStorage.getItem("Password")
        // let Cpassword = localStorage.getItem("Cpassword")
        // if(uN&&email&&password&&Cpassword){
            window.location.assign("./login.html")
        // }
    }