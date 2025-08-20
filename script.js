function matiinLilin() {
  document.querySelector('.flame').style.display = 'none';
  alert('Lilin sudah ditiup 🎉');
}

// Confetti animasi sederhana
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
for (let i = 0; i < 150; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 150 + 50,
    color: 'hsl(' + Math.random() * 360 + ', 100%, 50%)',
    tilt: Math.floor(Math.random() * 10) - 10
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c, i) => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.fillRect(c.x, c.y, c.r, c.r);
  });
  updateConfetti();
  requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
  confetti.forEach((c, i) => {
    c.y += Math.cos(c.d) + 1 + c.r / 2;
    c.x += Math.sin(0) * 2;
    if (c.y > canvas.height) {
      confetti[i] = {
        x: Math.random() * canvas.width,
        y: -10,
        r: c.r,
        d: c.d,
        color: c.color,
        tilt: c.tilt
      };
    }
  });
}

drawConfetti();