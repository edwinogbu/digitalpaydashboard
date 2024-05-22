import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './../AuthContext'; // Update the import path if needed

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    mobile: '',
    termsAccepted: false,
  });

  const { register } = useAuth();
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
      await register(formData);
      navigate('/dashboard'); // Redirect to the dashboard or any other route
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., display error message)
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
    <div className="main-wrapper account-wrapper bg-wrapper" style={backgroundImageStyle}>
      <div className="account-page">
        <div className="account-center">
          <div className="account-logo">
            <Link to="/"><img src="assets/img/logo-icon.png" alt="Logo" /></Link>
          </div>
          <div className="account-box">
            <div className="login-header">
              <h3>Let's Get Started</h3>
              <p>Sign up to continue to Crypto</p>
            </div>
            <form onSubmit={handleSubmit} className="form-signin">
              <div className="form-group">
                <input
                  type="text"
                  name="fullname"
                  className="form-control"
                  placeholder="Fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                />
                <span className="profile-views"><img src="assets/img/icon/lock-icon-01.svg" alt="" /></span>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <span className="profile-views"><img src="assets/img/icon/lock-icon-03.svg" alt="" /></span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span className="profile-views"><img src="assets/img/icon/lock-icon-02.svg" alt="" /></span>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="mobile"
                  className="form-control"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                <span className="profile-views"><img src="assets/img/icon/lock-icon-04.svg" alt="" /></span>
              </div>
              <div className="forgotpass term-register">
                <div className="remember-me">
                  <label className="custom_check me-2 mb-0 d-inline-flex remember-me">
                    I have read and agree to the <a href="#">Terms & Conditions</a>
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="form-group text-center">
                <button className="btn btn-primary account-btn" type="submit">
                  Sign up<i className="fas fa-arrow-right ms-1"></i>
                </button>
              </div>
              <div className="text-center login-link">
                Already have an account? <Link to="/login">Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from './../AuthContext'; // Update the import path if needed
// // import logo from 'assets/img/icon/lock-icon-01.svg';
// import lockIcon01 from 'assets/img/icon/lock-icon-01.svg';
// import lockIcon02 from 'assets/img/icon/lock-icon-02.svg';
// import lockIcon03 from 'assets/img/icon/lock-icon-03.svg';
// import lockIcon04 from 'assets/img/icon/lock-icon-04.svg';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     fullname: '',
//     email: '',
//     password: '',
//     mobile: '',
//     termsAccepted: false,
//   });

//   const { register } = useAuth();
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
//       await register(formData);
//       navigate('/dashboard'); // Redirect to the dashboard or any other route
//     } catch (error) {
//       console.error('Registration failed:', error);
//       // Handle error (e.g., display error message)
//     }
//   };

//   const backgroundImageStyle = {
//     backgroundImage: 'url("assets/img/icon/calendar-icon.svg")',
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
//               <p>Sign up to continue to Crypto</p>
//             </div>
//             <form onSubmit={handleSubmit} className="form-signin">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="fullname"
//                   className="form-control"
//                   placeholder="Fullname"
//                   value={formData.fullname}
//                   onChange={handleChange}
//                 />
//                 <span className="profile-views"><img src={lockIcon01} alt="" /></span>
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 <span className="profile-views"><img src={lockIcon03} alt="" /></span>
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
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="mobile"
//                   className="form-control"
//                   placeholder="Mobile Number"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                 />
//                 <span className="profile-views"><img src={lockIcon04} alt="" /></span>
//               </div>
//               <div className="forgotpass term-register">
//                 <div className="remember-me">
//                   <label className="custom_check me-2 mb-0 d-inline-flex remember-me">
//                     I have read and agree to the <a href="#">Terms & Conditions</a>
//                     <input
//                       type="checkbox"
//                       name="termsAccepted"
//                       checked={formData.termsAccepted}
//                       onChange={handleChange}
//                     />
//                     <span className="checkmark"></span>
//                   </label>
//                 </div>
//               </div>
//               <div className="form-group text-center">
//                 <button className="btn btn-primary account-btn" type="submit">
//                   Sign up<i className="fas fa-arrow-right ms-1"></i>
//                 </button>
//               </div>
//               <div className="text-center login-link">
//                 Already have an account? <Link to="/login">Sign in</Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from 'assets/img/logo.png';
// import lockIcon01 from 'assets/img/icon/lock-icon-01.svg';
// import lockIcon02 from 'assets/img/icon/lock-icon-02.svg';
// import lockIcon03 from 'assets/img/icon/lock-icon-03.svg';
// import lockIcon04 from 'assets/img/icon/lock-icon-04.svg';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     fullname: '',
//     email: '',
//     password: '',
//     mobile: '',
//     termsAccepted: false,
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
//     backgroundImage: 'url("assets/img/icon/calendar-icon.svg")',
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
//               <p>Sign up to continue to Crypto</p>
//             </div>
//             <form onSubmit={handleSubmit} className="form-signin">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="fullname"
//                   className="form-control"
//                   placeholder="Fullname"
//                   value={formData.fullname}
//                   onChange={handleChange}
//                 />
//                 <span className="profile-views"><img src={lockIcon01} alt="" /></span>
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 <span className="profile-views"><img src={lockIcon03} alt="" /></span>
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
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="mobile"
//                   className="form-control"
//                   placeholder="Mobile Number"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                 />
//                 <span className="profile-views"><img src={lockIcon04} alt="" /></span>
//               </div>
//               <div className="forgotpass term-register">
//                 <div className="remember-me">
//                   <label className="custom_check me-2 mb-0 d-inline-flex remember-me">
//                     I have read and agree to the <a href="#">Terms & Conditions</a>
//                     <input
//                       type="checkbox"
//                       name="termsAccepted"
//                       checked={formData.termsAccepted}
//                       onChange={handleChange}
//                     />
//                     <span className="checkmark"></span>
//                   </label>
//                 </div>
//               </div>
//               <div className="form-group text-center">
//                 <button className="btn btn-primary account-btn" type="submit">
//                   Sign up<i className="fas fa-arrow-right ms-1"></i>
//                 </button>
//               </div>
//               <div className="text-center login-link">
//                 Already have an account? <Link to="/login">Sign in</Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
