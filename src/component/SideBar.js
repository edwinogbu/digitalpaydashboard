// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './SideBar.css';

// export default function SideBar({ skinColor, textColor }) {
//   const sidebarStyle = {
//     backgroundColor: skinColor,
//     color: textColor,
//   };

//   const linkStyle = {
//     color: textColor,
//   };

//   return (
//     <div className="sidebar" id="sidebar" style={sidebarStyle}>
//       <div className="sidebar-inner slimscroll">
//         <div id="sidebar-menu" className="sidebar-menu">
//           <ul>
//             <li>
//             <NavLink to="/dashboard" style={linkStyle} className={({ isActive }) => isActive ? 'active' : ''}>
//                 <img src="./../assets/img/icon/menu-icon-01.svg" alt="img" />
//                 <span className="text-white">Dashboard</span>
//               </NavLink>
//             </li>
//             <li>
//             <NavLink to="/dashboard/market-cap" className={({ isActive }) => isActive ? 'active' : ''}>
//                 <img src="./../assets/img/icon/menu-icon-04.svg" alt="img" />
//                 <span className="text-white"> Marketcap</span>
//               </NavLink>
//             </li>
//             <li className="submenu">
//               <NavLink 
//                 to="/transactions" 
//                 style={linkStyle} 
//                 activeClassName="active"
//               >
//                 <img src="./../assets/img/icon/menu-icon-13.svg" alt="img" />
//                 <span> Transactions</span>
//                 <span className="menu-arrow"></span>
//               </NavLink>
//               <ul style={{ display: 'none' }}>
//                 <li>
//                   <NavLink 
//                     to="/transactions" 
//                     style={linkStyle}
//                     activeClassName="active"
//                   >
//                     <i className="feather-more-horizontal"></i>
//                     <span> View Transactions</span>
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink 
//                     to="/transactions-search" 
//                     style={linkStyle}
//                     activeClassName="active"
//                   >
//                     <i className="feather-more-horizontal"></i>
//                     <span> Transaction Search</span>
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink 
//                     to="/transactions-single" 
//                     style={linkStyle}
//                     activeClassName="active"
//                   >
//                     <i className="feather-more-horizontal"></i>
//                     <span>Single Transaction</span>
//                   </NavLink>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <NavLink 
//                 to="/wallet" 
//                 style={linkStyle}
//                 activeClassName="active"
//               >
//                 <img src="./../assets/img/icon/menu-icon-05.svg" alt="img" />
//                 <span>Wallet</span>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 to="/activities" 
//                 style={linkStyle}
//                 activeClassName="active"
//               >
//                 <img src="./../assets/img/icon/menu-icon-10.svg" alt="img" />
//                 <span>Activities</span>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 to="/settings" 
//                 style={linkStyle}
//                 activeClassName="active"
//               >
//                 <img src="./../assets/img/icon/menu-icon-12.svg" alt="img" />
//                 <span>Settings</span>
//               </NavLink>
//             </li>
//             <li className="menu-title">Trusted By All</li>
//             <li className="submenu">
//               <NavLink 
//                 to="#" 
//                 style={linkStyle}
//                 activeClassName="active"
//               >
//                 <i className="fas fa-share-alt"></i>
//                 <span>Share With Friends</span>
//                 <span className="menu-arrow"></span>
//               </NavLink>
//             </li>
//           </ul>
//           <div className="track-portfolio">
//             <img src="./../assets/img/icon/track-icon.png" alt="" />
//             <h4>Track your Portfolio in Real-time</h4>
//             <p>Digital Payout got You Covered</p>
//             <NavLink 
//               to="#" 
//               className="btn btn-primary"
//               activeClassName="active"
//             >
//               Know More
//             </NavLink>
//           </div>
//           <div className="need-btn">
//             <NavLink 
//               to="#" 
//               className="btn btn-primary"
//               activeClassName="active"
//             >
//               Need help?
//             </NavLink>
//           </div>
//           <div className="logout-btn">
//             <NavLink 
//               to="/login" 
//               className="btn btn-primary"
//               activeClassName="active"
//             >
//               <img src="./../assets/img/icon/lock-out.svg" className="me-2" alt="" />
//               Logout
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './SideBar.css';

// const SideBar = ({ skinColor, textColor }) => {
//     const sidebarStyle = {
//         backgroundColor: skinColor,
//         color: textColor,
//     };

//     const linkStyle = {
//         color: textColor,
//     };

//     return (
//         <div className="sidebar" style={sidebarStyle}>
//             <div className="sidebar-inner">
//                 <div className="sidebar-menu">
//                     <ul>
//                         <li>
//                             <NavLink to="/dashboard" style={linkStyle} className={({ isActive }) => isActive ? 'active' : ''}>
//                                 <i className="fas fa-home"></i> <span>Dashboard Home</span>
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/dashboard/market-cap" style={linkStyle} className={({ isActive }) => isActive ? 'active' : ''}>
//                                 <i className="fas fa-chart-line"></i> <span>Market Cap</span>
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/dashboard/transactions" style={linkStyle} className={({ isActive }) => isActive ? 'active' : ''}>
//                                 <i className="fas fa-exchange-alt"></i> <span>Transactions</span>
//                             </NavLink>
//                         </li>
//                         {/* Add more navigation links as needed */}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SideBar;



// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const SideBar = () => {
//     return (
//         <div className="sidebar">
//             <div className="sidebar-inner">
//                 <div className="sidebar-menu">
//                     <ul>
//                         <li>
//                             <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
//                                 <i className="fas fa-home"></i> <span>Dashboard Home</span>
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/dashboard/market-cap" className={({ isActive }) => isActive ? 'active' : ''}>
//                                 <i className="fas fa-chart-line"></i> <span>Market Cap</span>
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/dashboard/transactions" className={({ isActive }) => isActive ? 'active' : ''}>
//                                 <i className="fas fa-exchange-alt"></i> <span>Transactions</span>
//                             </NavLink>
//                         </li>
//                         {/* Add more navigation links as needed */}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SideBar;


import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SideBar.css';

export default function SideBar({ skinColor, textColor }) {
  const sidebarStyle = {
    backgroundColor: skinColor,
    color: textColor,
  };

  const linkStyle = {
    color: textColor,
  };

  return (
    <div className="sidebar bg-primary text-white" id="sidebar">
    <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
            <ul>
                <li className="active">
                <NavLink to="/dashboard/home" style={linkStyle} className={({ isActive }) => isActive ? 'active' : ''}>                        
                        <img src="./../assets/img/icon/menu-icon-01.svg" alt="img" />
                        <span className='text-white'>Dashboard</span></NavLink>
                </li>
                
                <li>
                <NavLink to="/dashboard/market-cap" className={({ isActive }) => isActive ? 'active' : ''}>
                        <img src="./../assets/img/icon/menu-icon-04.svg" alt="img" />
                        <span className='text-white'> Marketcap</span></NavLink>
                </li>
                <li className="submenu">
                    
                    <NavLink to="/dashboard/transactions" className={({ isActive }) => isActive ? 'active' : ''}>
                        <img src="./../assets/img/icon/menu-icon-13.svg" alt="img" /> <span> Transactions
                        </span> <span className="menu-arrow"></span>
                        </NavLink>
                    <ul style={{ display: 'none' }}>
                        <li><Link to=" /dashboard/transactions"><i className="feather-more-horizontal"></i><span> View
                                    Transactions</span></Link></li>
                        <li><Link to="/dashboard/transactions-search"><i className="feather-more-horizontal"></i><span>
                                    Transaction Search</span></Link></li>
                        <li><Link to="/dashboard/transactions-single"><i className="feather-more-horizontal"></i>
                                <span>Single Transaction</span></Link></li>
                    </ul>
                </li>
                <li>
                    <NavLink href="wallet.html">
                        <img src="./../assets/img/icon/menu-icon-05.svg" alt="img" />
                        <span>Wallet</span>
                        </NavLink>
                </li>
               
              
                <li>
                    <NavLink href="activities.html"><img src="./../assets/img/icon/menu-icon-10.svg" alt="img" />
                        <span>Activities</span></NavLink>
                </li>
               
                <li>
                    <NavLink href="settings.html"><img src="./../assets/img/icon/menu-icon-12.svg" alt="img" />
                        <span>Settings</span></NavLink>
                </li>
                <li className="menu-title">Trusted By All</li>
                
                
             
                <li className="submenu">
                    <Link to="javascript:void(0);"><i className="fas fa-share-alt"></i> <span>Share With Friends</span>
                        <span className="menu-arrow"></span></Link>
                   
                </li>
            </ul>
            <div className="track-portfolio">
            <img src="./../assets/img/icon/track-icon.png" alt="" />
            <h4>Track your Portfolio in Real-time</h4>
            <p>Digital Payout got You Covered</p>
            <NavLink 
              to="#" 
              className="btn btn-primary"
              activeClassName="active"
            >
              Know More
            </NavLink>
          </div>
            <div className="need-btn">
                <Link to="javascript:;" className="btn btn-primary">Need help?</Link>
            </div>
            <div className="logout-btn">
                <Link to="login.html" className="btn btn-primary"><img src="./../assets/img/icon/lock-out.svg"
                        className="me-2" alt="" />Logout</Link>
            </div>
        </div>
    </div>
</div>
  )
}
