const arr = [
  { name: 100 },
  { name: 20 },
  { name: 50 },
  { name: 78 },
  { name: 125 },
  { name: 77 },
  { name: 42 },
];

const render = () => {
  const score = document.getElementById('score-record');
  arr.forEach(({ name }) => {
    score.innerHTML += '';
    score.innerHTML += `<li>Name: ${name}</li>
        `;
  });
};

export default render;