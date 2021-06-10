let menu= document.querySelector( '#menu-bar');
let navbar =document.querySelector('.nav-bar');
let headerr= document.querySelector(' .header-2');

menu.addEventListener('click',()=>{

menu.classList.toggle('fa-times')
navbar.classList.toggle('active');


});

window.onscroll= () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active');
    //not-working
    if( window.scroll> 150 ){
    headerr.classList.add('active');}
    else {
    headerr.classList.remove('active');
}}