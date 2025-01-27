document.addEventListener("DOMContentLoaded", function () {

  //menu parameters
  const toggleGlobe = document.getElementById("toggleGlobe");
  const toggleBurger = document.getElementById("toggleBurger");
  
  const closeBurger = document.getElementById("closeBurger");
  const closeGlobe = document.getElementById("closeGlobe");
  
  const menuBurger = document.getElementById("menuBurger");
  const menuGlobe = document.getElementById("menuGlobe");
  
  const menuLinks = document.querySelectorAll("#menu li button"); 
  
  //carousel parameters
  //const track = document.getElementById("carousel-track");
  //const logos = [...track.children];

//menu logic
//list for the toggle button getting pressed
//turn on the css med:menu
  toggleBurger.addEventListener("click", function () {
      menuBurger.classList.toggle("med:menu");
    });
  
  toggleGlobe.addEventListener("click", function () {
      menuGlobe.classList.toggle("med:menu");
    });

  closeBurger.addEventListener("click", function () {
      menuBurger.classList.toggle("med:menu");
    });
  
    closeGlobe.addEventListener("click", function () {
      menuGlobe.classList.toggle("med:menu");
    });

  menuLinks.forEach(link => {
      link.addEventListener("click", () => {
          menu.classList.remove("med:menu");
      });
    });    

  //carousel logic
  // Clone the logos for infinite scrolling effect
  logos.forEach((logo) => {
    const clone = logo.cloneNode(true);
    track.appendChild(clone);
  });


  });

  function toggleBio(divId) {
    const div = document.getElementById(divId);
    //const button = document.getElementById('toggleBioCarmen');

    // Toggle the display property
    if (div.style.display === 'none' || div.style.display === '') {
      div.style.display = 'block';
      //button.textContent = '-'; // Change button to "-" when div is visible
    } else {
      div.style.display = 'none';
      //button.textContent = '+'; // Change button back to "+" when div is hidden
    }
  }
