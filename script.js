//For scrolling effect:
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  
  const scrollItems = document.querySelectorAll(".hidden");
  scrollItems.forEach((element) => observer.observe(element))
  
  //better experience in landscape, so:
  if (window.matchMedia("(orientation: portrait)").matches) {
     alert("You seem to be in portrait mode. Please switch to landscape for the best experience")
  }