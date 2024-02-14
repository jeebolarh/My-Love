document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('love-animation');
    const numParticles = 50;

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'love-particle';
        container.appendChild(particle);

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = Math.random() * 3 + 1;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.animationDuration = `${duration}s`;
    }
});
