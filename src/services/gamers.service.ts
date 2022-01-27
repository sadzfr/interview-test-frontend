import axios from 'axios';

/**
 * 
 * @returns << returns >>
 */
const getGamers = () =>
  axios
    .get(
      `http://localhost:3000/`
    )
    .then((response) => response.data);

export { getGamers };
