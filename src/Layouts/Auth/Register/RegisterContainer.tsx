import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { register } from '../../../services/auth';
import Register from './Register';

const RegisterContainer = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      const userData = await register(values)
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

  return <Register values={values} handleRegister={handleRegister} handleInputChange={handleInputChange} />;
};

export default RegisterContainer;
