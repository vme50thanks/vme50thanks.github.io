/* ===== Sakura Canvas Animation ===== */
(function() {
  const canvas = document.getElementById('sakura-canvas');
  const ctx = canvas.getContext('2d');

  let petals = [];
  const PETAL_COUNT = 45;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function random(min, max) { return Math.random() * (max - min) + min; }

  function createPetal() {
    return {
      x: random(-100, canvas.width + 100),
      y: random(-80, -10),
      size: random(8, 18),
      speedX: random(-0.3, 0.5),
      speedY: random(0.5, 1.8),
      rotation: random(0, Math.PI * 2),
      rotationSpeed: random(-0.02, 0.02),
      opacity: random(0.4, 0.8),
      hue: random(0, 15),
      saturation: random(40, 70),
      lightness: random(72, 88),
      sway: random(0.3, 1.2),
      swayPhase: random(0, Math.PI * 2),
    };
  }

  for (let i = 0; i < PETAL_COUNT; i++) {
    petals.push(createPetal());
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.globalAlpha = p.opacity;

    const s = p.size;
    const color = `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${p.opacity})`;

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(0, s * 0.15, s * 0.25, s * 0.45, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(0, -s * 0.05, s * 0.12, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];

      p.x += p.speedX + Math.sin(p.swayPhase) * 0.25;
      p.y += p.speedY;
      p.swayPhase += 0.015;
      p.rotation += p.rotationSpeed;

      drawPetal(p);

      if (p.y > canvas.height + 30) {
        petals[i] = createPetal();
        petals[i].y = random(-80, -10);
      }
      if (p.x > canvas.width + 100) p.x = -100;
      if (p.x < -100) p.x = canvas.width + 100;
    }

    requestAnimationFrame(animate);
  }

  animate();
})();
