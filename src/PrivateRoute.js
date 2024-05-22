// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext'; // Update the import path if needed

// const PrivateRoute = ({ element }) => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? element : <Navigate to="/login" />;
// };

// export default PrivateRoute;


import React, {  } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Update the import path if needed


const PrivateRoute = ({ element }) => {
  const { state, isAuthenticated } = useAuth();
  // const isAuthenticated = true;
    console.log("auth state:", state.isAuthenticated);
 
  return state.isAuthenticated || isAuthenticated ? element : <Navigate to="/login" />;
  // return isAuthenticated || isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

// PrivateRoute.js
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext'; // Import your AuthContext

// const PrivateRoute = ({ element: Element, redirectTo = '/login', ...rest }) => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Element /> : <Navigate to={redirectTo} />}
//     />
//   );
// };

// export default PrivateRoute;


// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext, useAuth } from './AuthContext';

// const PrivateRoute = ({ element }) => {
// //   const isAuthenticated  = useContext(AuthContext);
//   const { isAuthenticated} = useAuth();

//     console.log("auth state:", isAuthenticated);
//   return isAuthenticated ? element : <Navigate to="/login" />;
// };

// export default PrivateRoute;

// import React, { useContext } from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { AuthContext } from './AuthContext';

// const PrivateRoute = ({ element, ...rest }) => {
//   const { isAuthenticated } = useContext(AuthContext);

//   return isAuthenticated ? (
//     <Route {...rest} element={element} />
//   ) : (
//     <Navigate to="/authenticate" replace />
//   );
// };

// export default PrivateRoute;




// import React, { useContext } from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { AuthContext } from './AuthContext';

// const PrivateRoute = ({ element, ...rest }) => {
//   const { isAuthenticated } = useContext(AuthContext);

//   return isAuthenticated ? (
//     <Route {...rest} element={element} />
//   ) : (
//     <Navigate to="/login" />
//   );
// };

// export default PrivateRoute;


// import React, { useContext } from 'react';
// import { Route, Navigate } from 'react-router-dom'; // Change Redirect to Navigate
// import { AuthContext } from './AuthContext';

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const { isAuthenticated } = useContext(AuthContext);

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />}
//     />
//   );
// };

// export default PrivateRoute;


// // PrivateRoute.js

// import React, { useContext } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { AuthContext, useAuth } from './AuthContext';

// const PrivateRoute = ({ component: Component, ...rest }) => {
// //   const { isAuthenticated } = useAuth();
//   const {  isAuthenticated,  } = useContext(AuthContext);


//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

// export default PrivateRoute;
