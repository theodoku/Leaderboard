import { newGameUrl } from '../utils/url.js';

const newGame = async () => {
  const game = {
    name: 'game',
  };

  const response = await fetch(newGameUrl, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  });
  const data = await response.json();
  return data;
};

export default newGame;