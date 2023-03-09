import './style.css';
import { url } from './utils/url.js';
import fetchScores from './modules/fetchScores.js';

async function setData() {
  try {
    const response = await fetch(url);
    const updatedData = await response.json();

    return updatedData;
  } catch (error) {
    return error;
  }
}

const notification = document.getElementById('notification');
const refresh = document.getElementById('refresh-btn');
refresh.addEventListener('click', fetchScores);

const form = document.getElementById('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('name').value;
  const scoreInput = document.getElementById('score').value;
  const scores = {
    user: nameInput,
    score: scoreInput,
  };
  await fetch(url, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(scores),
  });
  await setData(scores);
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
  form.reset();
});
fetchScores();
