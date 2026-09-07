// Add new work here — each entry becomes a card in the grid automatically.
// Use { comingSoon: true, title: '...' } for a placeholder card with no video yet.
const videos = [
  { id: 'wXNNYoymvV4', title: 'Microsoft Re-Score' },
  { comingSoon: true, title: 'Coming Soon' },
  { comingSoon: true, title: 'Coming Soon' },
  { id: 'h7qu1eSXSsc', title: 'Nudnix App Sounds' },
  { id: 'Ky0uchQ1W3o', title: 'Mingle Stinger' },
  { comingSoon: true, title: 'Coming Soon' },
];

const grid = document.getElementById('video-grid');

for (const video of videos) {
  const card = document.createElement('div');
  card.className = 'video-card';

  const frame = document.createElement('div');
  frame.className = 'video-frame';

  if (video.comingSoon) {
    frame.classList.add('video-frame--placeholder');
    frame.innerHTML = `<span class="coming-soon-label">Coming Soon</span>`;
  } else {
    frame.innerHTML = `
      <img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" alt="${video.title} thumbnail" loading="lazy">
      <span class="play-button">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </span>
    `;
    frame.addEventListener('click', () => {
      frame.innerHTML = `<iframe src="https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1" title="${video.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      // The iframe loads directly under the cursor, so it never gets a real
      // "mouse entered" event and YouTube's control auto-hide timer never starts.
      // Toggling pointer-events forces the browser to redo hit-testing, which
      // triggers that event and lets the controls hide normally.
      const iframe = frame.querySelector('iframe');
      iframe.style.pointerEvents = 'none';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          iframe.style.pointerEvents = 'auto';
        });
      });
    }, { once: true });
  }

  const title = document.createElement('div');
  title.className = 'video-title';
  title.textContent = video.title;

  card.appendChild(frame);
  card.appendChild(title);
  grid.appendChild(card);
}

document.getElementById('year').textContent = new Date().getFullYear();
