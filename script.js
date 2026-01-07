// Balloon pop effect
document.querySelectorAll('.balloon').forEach(balloon => {
  balloon.addEventListener('click', () => {
    balloon.style.transform = 'scale(0)';
  });
});

// Blow candle
const candleFlame = document.querySelector('.flame');
document.getElementById('blowCandle').addEventListener('click', () => {
  candleFlame.style.display = 'none';
});

// Confetti
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiCount = 100;
const confetti = [];

for(let i = 0; i < confettiCount; i++){
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * confettiCount
  });
}

function drawConfetti(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(f => {
    ctx.beginPath();
    ctx.fillStyle = `hsl(${Math.random()*360}, 100%, 50%)`;
    ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
    ctx.fill();
  });
  moveConfetti();
}

function moveConfetti(){
  confetti.forEach(f => {
    f.y += Math.cos(f.d) + 1 + f.r/2;
    f.x += Math.sin(f.d);
    if(f.y > canvas.height) f.y = -10;
  });
}

setInterval(drawConfetti, 30);
