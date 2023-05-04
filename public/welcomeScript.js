const welcomeText = document.getElementById("welcome");

// Fade out the welcome text after 5 seconds
setTimeout(function(){
  gsap.to(welcomeText, { duration: 1, opacity: 0, onComplete: function(){
    welcomeText.textContent = "EcoCollective";
    gsap.to(welcomeText, { duration: 1, opacity: 1 });
  }});
}, 5000);
