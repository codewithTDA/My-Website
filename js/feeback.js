const ratingEls = document.querySelectorAll(".feedback_rating");
const btnEl = document.getElementById('feedback_btn');
const containerEl = document.getElementById('feedback_container');

let selectedRating = "";
ratingEls.forEach(ratingEl => {
   ratingEl.addEventListener('click',(e)=>{
       removeActive();
          selectedRating =  e.target.innerText || e.target.parentNode.innerText;
          event.target.classList.add("active");
          event.target.parentNode.classList.add("active");
   })
});
btnEl.addEventListener('click',(e)=>{
   if(selectedRating !==''){
       containerEl.innerHTML =  `
          <strong>Thank You!</strong>
          <br><br>
          <strong>Feedback: ${selectedRating}</strong>
          <br>
          <p>We'll use your feedback to improve our costomer support.</p>
       `;
   }
},false)
function removeActive(){
   ratingEls.forEach((ratingEl)=>{
       ratingEl.classList.remove("active")
   })
}
