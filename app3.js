document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('love-animation');
  const numHearts = 50; // Adjust number of hearts

  for (let i = 0; i < numHearts; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    container.appendChild(heart);

    // You can modify these for more variation
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
  }
});
