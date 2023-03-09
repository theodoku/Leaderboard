const render = async (scores) => {
  const record = document.getElementById('score-record');
  record.innerHTML = '';
  scores.forEach(({ user, score }) => {
    record.innerHTML += `
      <li>${user}: ${score}</li>
    `;
  });
};

export default render;
