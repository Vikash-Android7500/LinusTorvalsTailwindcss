// Scroll Top btn
const scrollbtn = document.querySelector(".scroll-top");
window.addEventListener('scroll', () => {
     scrollbtn.classList.toggle('active', window.scrollY > 500);
     
});

// onclick function in html Element
function scrollToTop() {
     window.scrollTo( {
          top: 0,
          behavior: "smooth"
     });
}


// DropDownMenu
const NavMenu =  document.querySelector('.MenuBtn');
const hembergun = document.querySelector(".fa-bars");

hembergun.addEventListener('click', () => {
     hembergun.classList.toggle("fa-xmark");
     NavMenu.classList.toggle('active');
});