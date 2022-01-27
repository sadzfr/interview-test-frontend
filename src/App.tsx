import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import DashboardContainer from './Layouts/Dashboard/DashboardContainer';
import PrivateRoute from './utils/PrivateRoute';
import LoginContainer from './Layouts/Auth/Login/LoginContainer';
import RegisterContainer from './Layouts/Auth/Register/RegisterContainer';
import { setUserIdToken } from './config/axios';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    setUserIdToken()
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute component={DashboardContainer} />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
