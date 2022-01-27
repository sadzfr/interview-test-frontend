import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { login } from '../../../services/auth';
import Login from './Login';

const LoginContainer = () => {

  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const userData = await login(values)
      console.log({ userData });
      navigate('/')
    } catch (error: any) {
      alert(error.message)
    }
  }

  const handleInputChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return <Login values={values} handleLogin={handleLogin} handleInputChange={handleInputChange} />;
};

export default LoginContainer;
