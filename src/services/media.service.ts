import axios from '../config/axios'
/**
 *
 * @returns << returns >>
 */
const getMedia = (body: any) =>
  axios.post(`${process.env.REACT_APP_API_URL}/media/`, body)
    .then(response => response?.data)
    .catch((err) => {
      console.log(err)
    })

export { getMedia };
