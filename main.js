// Add JS here

const btn = document.getElementById('toggle-btn');

function applyMode(mode) {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(mode);
  btn.textContent = mode === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
  localStorage.setItem('theme', mode);
}

const saved = localStorage.getItem('theme') || 'light';
applyMode(saved);

btn.addEventListener('click', () => {
  const next = document.body.classList.contains('dark') ? 'light' : 'dark';
  applyMode(next);
});
