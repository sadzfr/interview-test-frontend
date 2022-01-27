import axios, { setUserIdToken } from '../config/axios'
/**
 * Get media from API
 * @param body 
 * @returns 
 */
const getMedia = (body: any) => {
  setUserIdToken()
  return axios.post(`${process.env.REACT_APP_API_URL}/media/`, body)
    .then(response => response?.data)
    .catch((err) => {
      console.log(err)
    })
}
export { getMedia };
