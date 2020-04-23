let peaceful = new Audio("../../../media/audio/peaceful.mp3");
let battlefront = new Audio("../../../media/audio/battlefront.mp3");
let current;
let audio = true;
playMusic = (type) => {
  if (audio) {
    if (type === "peaceful" && current != "peaceful") {
      battlefront.pause();
      current = "peaceful";
      // peaceful.play();
    } else if (type === "battlefront" && current != "battlefront") {
      peaceful.pause();
      current = "battlefront";
      // battlefront.play();
    }
  } else {
    peaceful.pause();
    battlefront.pause();
  }
};
