import React, { useState } from 'react';
import { register } from '../../../services/auth';
import Register from './Register';

const RegisterContainer = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const handleRegister = async (e: any) => {
    e.preventDefault();
    const userData = await register(values)
    console.log({userData});
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
