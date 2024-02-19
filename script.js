const header =  document.querySelector('header');
const menu = document.querySelector('.fa-bars');
const navlist = document.querySelector('.navlist');
window.onscroll = ()=>{
    if(window.scrollY  > 100){
        header.classList.add('scroll');
    }
    else{
        header.classList.remove('scroll')
    }
}

menu.addEventListener('click',()=>{
    navlist.classList.toggle('active');
    menu.classList.toggle('fa-xmark')
})


// const fP = document.getElementsByClassName('p-content');
// fP[0].addEventListener('click',(e)=>{
//     e.stopPropagation();
//     window.location.assign('https://codewithtda.github.io/greenade/')
// })
var links = [
    'https://codewithtda.github.io/greenade/',
    'https://google.com',
    'https://facebook.com',
    'https://google.com',
    'https://google.com',
    'https://google.com'
]

Array.from(document.getElementsByClassName('p-content')).forEach((ele ,i)=>{
       ele.addEventListener('click',()=>{location.assign(links[i])})
})