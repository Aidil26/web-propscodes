



// ANIMATION SCROLLL NAVIGATION 
const scrollAnimation = (id) => {
  if (typeof window !== 'undefined') {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const maxScroll = document.body.clientHeight - window.innerHeight;
      let currentScrollPos = window.pageYOffset;
      if (
          (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
        || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
        || (prevScrollpos <= 0 && currentScrollPos <= 0)
      ) {
        document.getElementById(id).classList.add("fixed-top");
        document.getElementById(id).style.transitionDuration= '0.2s';
        document.getElementById(id).style.top = '0px';
      } else {
        document.getElementById(id).style.transitionDuration= '0.2s';
        document.getElementById(id).style.top = "-5.0rem"; // adjustable based your need
      }
      prevScrollpos = currentScrollPos;
    }
  }
}


export default scrollAnimation;