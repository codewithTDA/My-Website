const login = document.getElementById("login");
login.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation()
  const usernameAddress = document.getElementById("username").value;
  const passwordAddress = document.getElementById("password").value;
  const getUser = localStorage.getItem("Username");
  const getPass = localStorage.getItem("Password");

//   if (usernameAddress == "" && passwordAddress == "") {
//     swal("Input field has no value");
//   } else {
//     if (usernameAddress == getUser && passwordAddress == getPass) {
//       swal(`Login successfull, hi ${usernameAddress}`);
//     } else {
//       swal("Something is wrong");
//     }
//   }
  if (usernameAddress == "" && passwordAddress == "") {
    // swal("Input field has no value");
    console.log("somthing has no value");
  } else {
    if (usernameAddress == getUser && passwordAddress == getPass) {
     
        showAlert(`Login successfull, hi ${usernameAddress}`,'success');
        // window.location.assign('/My-Website/My-Website/')
        window.history.go(-2)
    } else {
      showAlert("Something is wrong",'danger');
    }
  }
}
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')
  alertPlaceholder.append(wrapper)
}
function showAlert(message,type){
    alertPlaceholder.innerHTML=""
    // const alertTrigger = document.getElementById('login')
    // console.log("in ShowAlert",alertTrigger);
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
    appendAlert(message,type)
//   })
// }
}
