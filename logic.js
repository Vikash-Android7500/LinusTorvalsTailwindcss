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
