// Product-demo state: only the interactive task cards are stored here.
const tasks = [...document.querySelectorAll('.task')];
const fill = document.querySelector('#progress-fill');
const percent = document.querySelector('#progress-percent');
const label = document.querySelector('#progress-label');
const suggestion = document.querySelector('#suggestion');
const toast = document.querySelector('#toast');
let toastTimer;

// Reusable, short-lived feedback for every meaningful button action.
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2400);
}

// Derive all dashboard progress from the task completion state.
function updatePlan() {
  const complete = tasks.filter(task => task.classList.contains('task-complete')).length;
  const total = tasks.length;
  const value = Math.round((complete / total) * 100);
  fill.style.width = `${value}%`;
  percent.textContent = `${value}%`;
  label.textContent = `${complete} of ${total} complete`;
  
  const progressBar = document.querySelector('.progress-bar');
  if (progressBar) {
    progressBar.setAttribute('aria-valuenow', value);
  }

  const next = tasks.find(task => !task.classList.contains('task-complete'));
  suggestion.textContent = next ? `Next: ${next.dataset.task}` : 'You completed your focus plan.';
}

// Meaningful micro-interaction: complete/reopen a task, then refresh the plan.
tasks.forEach(task => task.addEventListener('click', () => {
  task.classList.toggle('task-complete');
  task.setAttribute('aria-pressed', task.classList.contains('task-complete') ? 'true' : 'false');
  task.querySelector('.check').textContent = task.classList.contains('task-complete') ? '✓' : '';
  const badge = task.querySelector('.priority');
  badge.textContent = task.classList.contains('task-complete') ? 'DONE' : (task.dataset.task.includes('dashboard') ? 'NOW' : 'NEXT');
  badge.className = `priority ${task.classList.contains('task-complete') ? 'muted' : task.dataset.task.includes('dashboard') ? '' : 'soft'}`;
  updatePlan();
  showToast(task.classList.contains('task-complete') ? 'Nice work — your plan has updated.' : 'Task returned to your plan.');
}));

// Demo focus button: confirms intent without claiming to start a real timer.
const focusBtn = document.querySelector('#focus-button');
focusBtn.addEventListener('click', () => {
  const isFocusing = focusBtn.classList.toggle('focusing');
  if (isFocusing) {
    focusBtn.innerHTML = 'Focusing... <span>✦</span>';
    showToast('Focus session started — 90 minutes protected.');
  } else {
    focusBtn.innerHTML = 'Start focus <span>→</span>';
    showToast('Focus session ended.');
  }
});
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); navToggle.setAttribute('aria-expanded', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); }));

// Optional Easter egg: accessible via the footer star or the Konami code.
const egg = document.querySelector('#easter-egg');
function openEgg() { egg.classList.add('active'); egg.setAttribute('aria-hidden', 'false'); }
function closeEgg() { egg.classList.remove('active'); egg.setAttribute('aria-hidden', 'true'); }
document.querySelector('.secret-trigger').addEventListener('click', openEgg);
document.querySelector('#close-egg').addEventListener('click', closeEgg);
const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let entered = [];
window.addEventListener('keydown', event => { entered.push(event.key); entered = entered.slice(-konami.length); if (entered.join('|').toLowerCase() === konami.join('|').toLowerCase()) { openEgg(); entered = []; } });
