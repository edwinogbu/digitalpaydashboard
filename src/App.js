// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  const dashboardBasePath = "/dashboard";

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login/*" element={<SignIn />} />
          <Route
            path={`${dashboardBasePath}/*`}
            element={<PrivateRoute element={<Dashboard />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;



// import React from 'react';


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { AuthProvider } from './AuthContext';
// import PrivateRoute from './PrivateRoute';
// import Dashboard from './pages/Dashboard';
// import SignUp from './pages/SignUp';
// import SignIn from './pages/SignIn';
// import CryptoHome from './pages/homePage/CryptoHome';

// function App() {
//   const dashboardBasePath = "/dashboard";


//   return (

//     <AuthProvider>
//     <Router>
//       <Routes>
//         <Route path="/*" element={<SignIn />} />
//         {/* <Route path="/*" element={<CryptoHome />} /> */}
//         <Route path="/register" element={<SignUp />} />
//         <Route path="/login/*" element={<SignIn />} />
//         {/* <Route
//           path={`${dashboardBasePath}/*`}
//           element={<PrivateRoute element={<Dashboard />} />}
//         /> */}
//         <Route
//           path={`${dashboardBasePath}/home*`}
//           element={<PrivateRoute element={<Dashboard />} />}
//         />

//         </Routes>
//       </Router>
//       </AuthProvider>
//   );
// }

// export default App;
