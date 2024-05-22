import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { authReducer } from './authReducer'; // Update the import path if needed

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
  });

  // useEffect(() => {
  //   getProfile(); // Fetch profile data when the component mounts
  // }, []);


  // Create a custom axios instance with default headers
  const api = axios.create({
    baseURL: 'http://localhost:3005/api',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include your authorization token here
    },
  });

  const login = async (formData) => {
    try {
      const response = await api.post('/auth/login', formData);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const register = async (formData) => {
    try {
      const response = await api.post('/auth/register', formData);
      dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  const getProfile = async () => {
    try {
      const response = await api.get('auth/profile');
      dispatch({ type: 'GET_PROFILE_SUCCESS', payload: response.data });
    } catch (error) {
      throw new Error('Failed to get profile');
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
  };


  return (
    <AuthContext.Provider value={{ state, login, register, logout, getProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };


// import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { authReducer } from './authReducer'; // Update the import path if needed

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, {
//     user: null,
//     isAuthenticated: false,
//   });

//   // Create a custom axios instance with default headers
//   const api = axios.create({
//     baseURL: 'http://localhost:3005/api',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include your authorization token here
//     },
//   });

//   const login = async (formData) => {
//     try {
//       const response = await api.post('/auth/login', formData);
//       dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
//       localStorage.setItem('user', JSON.stringify(response.data));
//     } catch (error) {
//       throw new Error('Login failed');
//     }
//   };

//   const register = async (formData) => {
//     try {
//       const response = await api.post('/auth/register', formData);
//       dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
//       localStorage.setItem('user', JSON.stringify(response.data));
//     } catch (error) {
//       throw new Error('Registration failed');
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ state, login, register }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => useContext(AuthContext);

// export { AuthProvider, useAuth };


// import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { authReducer } from './authReducer'; 

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, {
//     user: JSON.parse(localStorage.getItem('user')) || null,
//     isAuthenticated: !!localStorage.getItem('user'),
//   });
  
//   const [users, setUsers] = useState({});

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       dispatch({ type: 'LOGIN_SUCCESS', payload: storedUser });
//     }
//   }, []);

//   const login = async (credentials) => {
//     try {
//       const { data } = await axios.post('http://localhost:3005/api/auth/login', credentials);
//       localStorage.setItem('user', JSON.stringify(data.user));
//       dispatch({ type: 'LOGIN_SUCCESS', payload: data.user });
//     } catch (error) {
//       console.error('Login failed', error);
//     }
//   };

//   const register = async (userInfo) => {
//     try {
//       const { data } = await axios.post('http://localhost:3005/api/auth/register', userInfo);
//       localStorage.setItem('user', JSON.stringify(data.user));
//       dispatch({ type: 'LOGIN_SUCCESS', payload: data.user });
//     } catch (error) {
//       console.error('Registration failed', error);
//     }
//   };

//   const logout = async () => {
//     try {
//       await axios.post('http://localhost:3005/api/auth/logout'); // Assuming you have a logout endpoint
//       localStorage.removeItem('user');
//       dispatch({ type: 'LOGOUT' });
//     } catch (error) {
//       console.error('Logout failed', error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ state, dispatch, login, register, logout, users, setUsers }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => useContext(AuthContext);

// export { AuthProvider, useAuth };
