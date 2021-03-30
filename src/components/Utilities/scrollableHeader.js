const stickyHeader = (className) => {
    const element = document.getElementsByClassName(className);
    console.log(element);
    window.onscroll = () => { 
      if (window.scrollY > 100) {
        element[0].classList.add('sticky');
      } else {
        element[0].classList.remove('sticky');
      }
    }
}

export default stickyHeader;