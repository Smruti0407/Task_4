// Typing effect for hero section
const line1 = "𝐻𝑒𝓁𝓁𝑜 𝐼'𝓂 𝒮𝓂𝓇𝓊𝓉𝒾";
const line2 = "A passionate Web Developer";
const el1 = document.getElementById("line1");
const el2 = document.getElementById("line2");
const photo = document.getElementById("photo-container");

let index1 = 0;
let index2 = 0;

function typeLine1() {
  if (index1 < line1.length) {
    el1.innerHTML += line1.charAt(index1);
    index1++;
    setTimeout(typeLine1, 100); // Add delay to type each character
  } else {
    setTimeout(typeLine2, 500); // Wait before starting second line
  }
}

function typeLine2() {
  if (index2 < line2.length) {
    el2.innerHTML += line2.charAt(index2);
    index2++;
    setTimeout(typeLine2, 100); // Add delay to type each character
  } else {
    // Show photo with slide-up animation
    photo.classList.add("show");
  }
}

window.addEventListener("load", typeLine1);
