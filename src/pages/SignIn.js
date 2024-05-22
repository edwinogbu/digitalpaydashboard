import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './../AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
    rememberMe: false,
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome to your dashboard!',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/dashboard/home'); // Redirect to the dashboard
        }
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Please check your email/phone and password and try again.',
      });
      console.error('Login failed:', error);
    }
  };

  const backgroundImageStyle = {
    backgroundImage: 'url("assets/images/cryptocurrency.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  return (
    <div className="main-wrapper account-wrapper bg-wrapper " style={backgroundImageStyle}>
      <div className="account-page">
        <div className="account-center">
          <div className="account-logo">
            <Link to="/"><img src="assets/img/logo-icon.png" alt="Logo" /></Link>
          <h1 className='text-white'>Digital PayOut </h1>
          </div>
          <div className="account-box bg-white">
            <div className="login-header">
              <h3 className="text-secondary">Let's Get Started</h3>
              <p className="text-dark">Sign in to continue to Digital Payout </p>
            </div>
            <form onSubmit={handleSubmit} className="form-signin">
              <div className="form-group">
                <input
                  type="text"
                  name="emailOrPhone"
                  className="form-control "
                  placeholder="Email or Phone"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  autoFocus
                />
                <span className="profile-views"><img src="assets/img/icon/lock-icon-01.svg" alt="" /></span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control text-primary"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span className="profile-views"><img src="assets/img/icon/lock-icon-02.svg" alt="" /></span>
              </div>
              <div className="forgotpass">
                <div className="remember-me">
                  <label className="custom_check me-2 mb-0 d-inline-flex remember-me text-primary">
                    Remember me
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <Link to="/forgot-password"><img src="assets/img/icon/lock-icon.svg" className="me-1" alt="" />Forgot your password?</Link>
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary account-btn">
                  Sign In <i className="fas fa-arrow-right ms-1"></i>
                </button>
              </div>
              <div className="text-center register-link text-primary">
                Don't have an account? <Link to="/register">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="sidebar-overlay" data-reff=""></div>
    </div>
  );
};

export default SignIn;



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from './../AuthContext';
// import Swal from 'sweetalert2';

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     emailOrPhone: '',
//     password: '',
//     rememberMe: false,
//   });

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(formData);

//       navigate('/dashboard/home'); // Redirect to the dashboard
//       Swal.fire({
//         icon: 'success',
//         title: 'Login Successful',
//         text: 'Welcome to your dashboard!',
//       });
//     } catch (error) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Login Failed',
//         text: 'Please check your email/phone and password and try again.',
//       });
//       console.error('Login failed:', error);
//     }
//   };

//   const backgroundImageStyle = {
//     backgroundImage: 'url("assets/img/icon/wave-02.png")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     height: '100vh',
//   };

//   return (
//     <div className="main-wrapper account-wrapper bg-wrapper" style={backgroundImageStyle}>
//       <div className="account-page">
//         <div className="account-center">
//           <div className="account-logo">
//             <Link to="/"><img src="assets/img/logo-icon.png" alt="Logo" /></Link>
//           </div>
//           <div className="account-box">
//             <div className="login-header">
//               <h3>Let's Get Started</h3>
//               <p>Sign in to continue to Crypto</p>
//             </div>
//             <form onSubmit={handleSubmit} className="form-signin">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="emailOrPhone"
//                   className="form-control"
//                   placeholder="Email or Phone"
//                   value={formData.emailOrPhone}
//                   onChange={handleChange}
//                   autoFocus
//                 />
//                 <span className="profile-views"><img src="assets/img/icon/lock-icon-01.svg" alt="" /></span>
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   name="password"
//                   className="form-control"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 <span className="profile-views"><img src="assets/img/icon/lock-icon-02.svg" alt="" /></span>
//               </div>
//               <div className="forgotpass">
//                 <div className="remember-me">
//                   <label className="custom_check me-2 mb-0 d-inline-flex remember-me">
//                     Remember me
//                     <input
//                       type="checkbox"
//                       name="rememberMe"
//                       checked={formData.rememberMe}
//                       onChange={handleChange}
//                     />
//                     <span className="checkmark"></span>
//                   </label>
//                 </div>
//                 <Link to="/forgot-password"><img src="assets/img/icon/lock-icon.svg" className="me-1" alt="" />Forgot your password?</Link>
//               </div>
//               <div className="form-group text-center">
//                 <button type="submit" className="btn btn-primary account-btn">
//                   Sign In <i className="fas fa-arrow-right ms-1"></i>
//                 </button>
//               </div>
//               <div className="text-center register-link">
//                 Don't have an account? <Link to="/register">Sign Up</Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="sidebar-overlay" data-reff=""></div>
//     </div>
//   );
// };

// export default SignIn;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from './../AuthContext'; 

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     emailOrPhone: '',
//     password: '',
//     rememberMe: false,
//   });

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(formData);
//       navigate('/dashboard'); // Redirect to the dashboard or any other route
//     } catch (error) {
//       console.error('Login failed:', error);
//       // Handle error (e.g., display error message)
//     }
//   };

//   const backgroundImageStyle = {
//     backgroundImage: 'url("assets/img/icon/wave-02.png")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     height: '100vh',
//   };

//   return (
//     <div className="main-wrapper account-wrapper bg-wrapper" style={backgroundImageStyle}>
//       <div className="account-page">
//         <div className="account-center">
//           <div className="account-logo">
//             <Link to="/"><img src="assets/img/logo-icon.png" alt="Logo" /></Link>
//           </div>
//           <div className="account-box">
//             <div className="login-header">
//               <h3>Let's Get Started</h3>
//               <p>Sign in to continue to Crypto</p>
//             </div>
//             <form onSubmit={handleSubmit} className="form-signin">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="emailOrPhone"
//                   className="form-control"
//                   placeholder="Email or Phone"
//                   value={formData.emailOrPhone}
//                   onChange={handleChange}
//                   autoFocus
//                 />
//                 <span className="profile-views"><img src="assets/img/icon/lock-icon-01.svg" alt="" /></span>
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   name="password"
//                   className="form-control"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 <span className="profile-views"><img src="assets/img/icon/lock-icon-02.svg" alt="" /></span>
//               </div>
//               <div className="forgotpass">
//                 <div className="remember-me">
//                   <label className="custom_check me-2 mb-0 d-inline-flex remember-me">
//                     Remember me
//                     <input
//                       type="checkbox"
//                       name="rememberMe"
//                       checked={formData.rememberMe}
//                       onChange={handleChange}
//                     />
//                     <span className="checkmark"></span>
//                   </label>
//                 </div>
//                 <Link to="/forgot-password"><img src="assets/img/icon/lock-icon.svg" className="me-1" alt="" />Forgot your password?</Link>
//               </div>
//               <div className="form-group text-center">
//                 <button type="submit" className="btn btn-primary account-btn">
//                   Sign In <i className="fas fa-arrow-right ms-1"></i>
//                 </button>
//               </div>
//               <div className="text-center register-link">
//                 Don't have an account? <Link to="/register">Sign Up</Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="sidebar-overlay" data-reff=""></div>
//     </div>
//   );
// };

// export default SignIn;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from './../AuthContext'; 

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     rememberMe: false,
//   });

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(formData);
//       navigate('/dashboard'); // Redirect to the dashboard or any other route
//     } catch (error) {
//       console.error('Login failed:', error);
//       // Handle error (e.g., display error message)
//     }
//   };

//   const backgroundImageStyle = {
//     backgroundImage: 'url("assets/img/icon/wave-02.png")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     height: '100vh',
//   };

//   return (
//     <div className="main-wrapper account-wrapper bg-wrapper" style={backgroundImageStyle}>
//       <div className="account-page">
//         <div className="account-center">
//           <div className="account-logo">
//             <Link to="/"><img src="assets/img/logo-icon.png" alt="Logo" /></Link>
//           </div>
//           <div className="account-box">
//             <div className="login-header">
//               <h3>Let's Get Started</h3>
//               <p>Sign in to continue to Crypto</p>
//             </div>
//             <form onSubmit={handleSubmit} className="form-signin">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="username"
//                   className="form-control"
//                   placeholder="Username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   autoFocus
//                 />
//                 <span className="profile-views"><img src="assets/img/icon/lock-icon-01.svg" alt="" /></span>
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   name="password"
//                   className="form-control"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 <span className="profile-views"><img src="assets/img/icon/lock-icon-02.svg" alt="" /></span>
//               </div>
//               <div className="forgotpass">
//                 <div className="remember-me">
//                   <label className="custom_check me-2 mb-0 d-inline-flex remember-me">
//                     Remember me
//                     <input
//                       type="checkbox"
//                       name="rememberMe"
//                       checked={formData.rememberMe}
//                       onChange={handleChange}
//                     />
//                     <span className="checkmark"></span>
//                   </label>
//                 </div>
//                 <Link to="/forgot-password"><img src="assets/img/icon/lock-icon.svg" className="me-1" alt="" />Forgot your password?</Link>
//               </div>
//               <div className="form-group text-center">
//                 <button type="submit" className="btn btn-primary account-btn">
//                   Sign In <i className="fas fa-arrow-right ms-1"></i>
//                 </button>
//               </div>
//               <div className="text-center register-link">
//                 Don't have an account? <Link to="/register">Sign Up</Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="sidebar-overlay" data-reff=""></div>
//     </div>
//   );
// };

// export default SignIn;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from './../AuthContext'; 



// import lockIcon01 from 'assets/img/icon/lock-icon-01.svg';
// import lockIcon02 from 'assets/img/icon/lock-icon-02.svg';
// import lockIcon from 'assets/img/icon/lock-icon.svg';

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     rememberMe: false,
//   });

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(formData);
//       navigate('/dashboard'); // Redirect to the dashboard or any other route
//     } catch (error) {
//       console.error('Login failed:', error);
//       // Handle error (e.g., display error message)
//     }
//   };

//   const backgroundImageStyle = {
//     backgroundImage: 'url("assets/img/icon/dash-icon-02.svg")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     height: '100vh',
//   };

//   return (
//     <div className="main-wrapper account-wrapper bg-wrapper" style={backgroundImageStyle}>
//       <div className="account-page">
//         <div className="account-center">
//           <div className="account-logo">
//             <Link to="/"><img src="assets/img/logo-icon.png" alt="Logo" /></Link>
//           </div>
//           <div className="account-box">
//             <div className="login-header">
//               <h3>Let's Get Started</h3>
//               <p>Sign in to continue to Crypto</p>
//             </div>
//             <form onSubmit={handleSubmit} className="form-signin">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="username"
//                   className="form-control"
//                   placeholder="Username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   autoFocus
//                 />
//                 <span className="profile-views"><img src={lockIcon01} alt="" /></span>
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   name="password"
//                   className="form-control"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 <span className="profile-views"><img src={lockIcon02} alt="" /></span>
//               </div>
//               <div className="forgotpass">
//                 <div className="remember-me">
//                   <label className="custom_check me-2 mb-0 d-inline-flex remember-me">
//                     Remember me
//                     <input
//                       type="checkbox"
//                       name="rememberMe"
//                       checked={formData.rememberMe}
//                       onChange={handleChange}
//                     />
//                     <span className="checkmark"></span>
//                   </label>
//                 </div>
//                 <Link to="/forgot-password"><img src={lockIcon} className="me-1" alt="" />Forgot your password?</Link>
//               </div>
//               <div className="form-group text-center">
//                 <button type="submit" className="btn btn-primary account-btn">
//                   Sign In <i className="fas fa-arrow-right ms-1"></i>
//                 </button>
//               </div>
//               <div className="text-center register-link">
//                 Don't have an account? <Link to="/register">Sign Up</Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="sidebar-overlay" data-reff=""></div>
//     </div>
//   );
// };

// export default SignIn;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from 'assets/img/logo.png';
// import lockIcon01 from 'assets/img/icon/lock-icon-01.svg';
// import lockIcon02 from 'assets/img/icon/lock-icon-02.svg';
// import lockIcon from 'assets/img/icon/lock-icon.svg';

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     rememberMe: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };

//   const backgroundImageStyle = {
//     backgroundImage: 'url("assets/img/icon/dash-icon-02.svg")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     height: '100vh',
//   };

//   return (
//     <div className="main-wrapper account-wrapper bg-wrapper" style={backgroundImageStyle}>
//       <div className="account-page">
//         <div className="account-center">
//           <div className="account-logo">
//             <Link to="/"><img src={logo} alt="Logo" /></Link>
//           </div>
//           <div className="account-box">
//             <div className="login-header">
//               <h3>Let's Get Started</h3>
//               <p>Sign in to continue to Crypto</p>
//             </div>
//             <form onSubmit={handleSubmit} className="form-signin">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="username"
//                   className="form-control"
//                   placeholder="Username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   autoFocus
//                 />
//                 <span className="profile-views"><img src={lockIcon01} alt="" /></span>
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   name="password"
//                   className="form-control"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 <span className="profile-views"><img src={lockIcon02} alt="" /></span>
//               </div>
//               <div className="forgotpass">
//                 <div className="remember-me">
//                   <label className="custom_check me-2 mb-0 d-inline-flex remember-me">
//                     Remember me
//                     <input
//                       type="checkbox"
//                       name="rememberMe"
//                       checked={formData.rememberMe}
//                       onChange={handleChange}
//                     />
//                     <span className="checkmark"></span>
//                   </label>
//                 </div>
//                 <Link to="/forgot-password"><img src={lockIcon} className="me-1" alt="" />Forgot your password?</Link>
//               </div>
//               <div className="form-group text-center">
//                 <button type="submit" className="btn btn-primary account-btn">
//                   Sign In <i className="fas fa-arrow-right ms-1"></i>
//                 </button>
//               </div>
//               <div className="text-center register-link">
//                 Don't have an account? <Link to="/register">Sign Up</Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="sidebar-overlay" data-reff=""></div>
//     </div>
//   );
// };

// export default SignIn;
