
let dice = document.getElementById("dice");
let rollBtn = document.getElementById("rollBtn");
let rollSound = document.getElementById("rollSound");

let diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

rollBtn.addEventListener("click", () => {
  // 🎵 Play dice sound
  rollSound.pause();          // Stop if already playing
  rollSound.currentTime = 0;  // Restart from beginning
  rollSound.volume = 1.0;     // Full volume

  // Add a tiny delay so sound plays properly
  setTimeout(() => {
    rollSound.play().catch(error => {
      console.log("Sound play blocked:", error);
    });
  }, 100);

  // 🎲 Add roll animation
  dice.classList.add("roll");

  // 🎯 Generate random number (1–6)
  let randomIndex = Math.floor(Math.random() * 6);

  // 🕐 After animation ends, show new dice face
  setTimeout(() => {
    dice.textContent = diceFaces[randomIndex];
    dice.classList.remove("roll");
  }, 600);
});
