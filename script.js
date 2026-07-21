// Add new work here — each entry becomes a card in the grid automatically.
const videos = [
  { id: 'RdVNmd8q7yU', title: 'Microsoft Re-Score' },
  { id: 'Rx9yYFhYUnk', title: 'Nudnix App Sounds' },
];

const grid = document.getElementById('video-grid');

for (const video of videos) {
  const card = document.createElement('div');
  card.className = 'video-card';

  const frame = document.createElement('div');
  frame.className = 'video-frame';
  frame.innerHTML = `
    <img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" alt="${video.title} thumbnail" loading="lazy">
    <span class="play-button">
      <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
    </span>
  `;
  frame.addEventListener('click', () => {
    frame.innerHTML = `<iframe src="https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1" title="${video.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }, { once: true });

  const title = document.createElement('div');
  title.className = 'video-title';
  title.textContent = video.title;

  card.appendChild(frame);
  card.appendChild(title);
  grid.appendChild(card);
}

document.getElementById('year').textContent = new Date().getFullYear();
