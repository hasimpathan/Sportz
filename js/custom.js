// show data on btn click of list and pitch
var listBtn = document.getElementById('list_btn');
var pitchBtn = document.getElementById('pitch_btn');
var playerDataSection = document.getElementById('player-data');
var pitchResultSection = document.getElementById('pitch-result');
var footerSection = document.getElementById('footer-btn');

listBtn.addEventListener('click', () => {
  pitchResultSection.style.display = 'none';
  playerDataSection.style.display = 'block';
  listBtn.classList.add("active");
  console.log("active");
  pitchBtn.classList.remove("active");
  footerSection.style.display="flex";
});

pitchBtn.addEventListener('click', () => {
  playerDataSection.style.display = 'none';
  pitchResultSection.style.display = 'block';
  pitchBtn.classList.add("active");
  listBtn.classList.remove("active");
  footerSection.style.display="none";
})
