const cardContainer = document.querySelector(".card-container");
const card = document.querySelector(".card");

const hammer = new Hammer(cardContainer);

hammer.on("swipeleft swiperight", (event) => {
  if (event.type === "swipeleft") {
    card.style.transform = "translateX(-150%)";
    navigateToSet1();
  } else {
    card.style.transform = "translateX(150%)";
    navigateToSet2();
  }
  setTimeout(() => {
    resetCard();
  }, 1000);
});

function resetCard() {
  card.style.transition = "none";
  card.style.transform = "translateX(0)";
  setTimeout(() => {
    card.style.transition = "transform 0.5s";
  }, 100);
}

function navigateToSet1() {
  console.log("Navigating to set 1...");
  // Add logic to load cards from set 1
}

function navigateToSet2() {
  console.log("Navigating to set 2...");
  // Add logic to load cards from set 2
}
document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".card-container");
    const card = document.querySelector(".card");
    const hammer = new Hammer(cardContainer);
  
    hammer.on("swipeleft swiperight", (event) => {
      if (event.type === "swipeleft") {
        card.style.transform = "translateX(-150%)";
        navigateToSet1();
      } else {
        card.style.transform = "translateX(150%)";
        navigateToSet2();
      }
      setTimeout(() => {
        resetCard();
      }, 1000);
    });
  
    function resetCard() {
      card.style.transition = "none";
      card.style.transform = "translateX(0)";
      setTimeout(() => {
        card.style.transition = "transform 0.5s";
      }, 100);
    }
  
    function navigateToSet1() {
      console.log("Navigating to set 1...");
      // Add logic to load cards from set 1
    }
  
    function navigateToSet2() {
      console.log("Navigating to set 2...");
      // Add logic to load cards from set 2
    }
  });
  
