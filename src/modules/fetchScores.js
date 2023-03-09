import { url } from '../utils/url.js';
import  render from './displayScore.js';

const fetchScores = async () => {
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      const scores = data.result;
  
      const uniqueScores = scores.reduce((acc, curr) => {
        const existingScore = acc.find(score => score.user === curr.user);
        if (existingScore) {
          existingScore.score = Math.max(existingScore.score, curr.score);
        } else {
          acc.push(curr);
        }
        return acc;
      }, []);
      render(uniqueScores);
    } catch (error) {
      console.error(error);
    }
  };
  
  export default fetchScores;