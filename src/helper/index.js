
const showToggle = (id) => {
  window.onscroll = () => {
    if (typeof window !== 'undefined') {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById(id).style.display="block";
      } else {
        document.getElementById(id).style.display='none';
      }
    }
  }
}





// ANIMATION SCROLLL NAVIGATION 
const scrollAnimation = (id, typeLayout) => {
  if (typeof window !== 'undefined') {
    let prevScrollpos = window.pageYOffset;
    document.onscroll = function () {
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
        if (typeLayout != 'general') {
          document.getElementById('blogs_list').style.marginTop = '70px';
        }
      } else {
        document.getElementById(id).style.transitionDuration= '0.2s';
        document.getElementById(id).style.top = "-5.0rem"; // adjustable based your need
      }
      prevScrollpos = currentScrollPos;
    }
  }
}


export { scrollAnimation, showToggle };