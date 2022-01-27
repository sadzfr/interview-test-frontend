// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});
instance.interceptors.response.use(
	(response) => response,
	(error) => {
		// whatever you want to do with the error
		if (error?.response?.data) {
			throw error?.response?.data;
		} else {
			throw new Error(
				'Network connection error. Please check you internet connection or try to log in again.'
			);
		}
	}
);

instance.defaults.headers.post['Content-Type'] = 'application/json';
/**
 * attaches the logged in user's `idToken` to the authentication header
 */
export const setUserIdToken = async () => {
	let idToken = localStorage.getItem('idtk');
	instance.defaults.headers.common['Authorization'] = `Bearer ${idToken}`;
};
export default instance;
