import axios from "axios";

type TCreds = {
  email: string,
  password: string
}

const register = ({ email, password }: TCreds) => {
  return new Promise((resolve, reject) => {
    axios.post(`${process.env.REACT_APP_API_URL}/user/register`, {
      email, password
    }).then(response => {
      resolve(response.data)
    }).catch((err) => {
      reject(err)
    })
  });
}
const login = ({ email, password }: TCreds) => {
  return new Promise((resolve, reject) => {
    axios.post(`${process.env.REACT_APP_API_URL}/user/register`, {
      email, password
    }).then(response => {
      resolve(response.data)
    }).catch((err) => {
      reject(err)
    })
  });

}

const isAuthenticated = () => !!localStorage.getItem('idtk')

export { register, login, isAuthenticated }