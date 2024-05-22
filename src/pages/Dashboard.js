// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import Header from '../component/Header';
// import SideBar from '../component/SideBar';
// import WelcomeDashboard from './WelcomeDashboard';
// import DasboardHome from './DasboardHome';
// import MarketCap from './MarketCap';
// import Transactions from './Transactions';

// const Dashboard = () => {
//     const skinColor = "#924aaa"; // Customize the sidebar skin color
//     const textColor = "#ecf0f1"; // Customize the text color

//     return (
//         <>
//             <div className="main-wrapper">
//                 <Header />
//                 <SideBar skinColor={skinColor} textColor={textColor} />
//                 <div className="page-wrapper bg-wrapper">
//                     <Routes>
//                         <Route path="/" element={<DasboardHome />} />
//                         <Route path="/market-cap" element={<MarketCap />} />
//                         <Route path="/transactions" element={<Transactions />} />
//                     </Routes>
//                 </div>
//             </div>
//             <div className="sidebar-overlay" data-reff="" />
//             <div className="modal fade exchange-currency-bg" id="currency">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <a className="btn-closes" data-bs-dismiss="modal">
//                                 <i className="feather-x" />
//                             </a>
//                         </div>
//                         <div className="modal-body">
//                             <div className="crypto-exchange">
//                                 <div className="card-title">
//                                     <h4 className="page-title">Exchange Cryptocurrency </h4>
//                                 </div>
//                                 <p className="ms-2 ps-2 pe-4">
//                                     Transfer from one wallet to another within seconds. It's that
//                                     simple.
//                                 </p>
//                                 <div className="row">
//                                     <div className="col-lg-12">
//                                         <div className="exchange-form">
//                                             <form>
//                                                 <div className="form-row ">
//                                                     <div className="form-group col-md-12">
//                                                         <input
//                                                             type="text"
//                                                             className="form-control"
//                                                             placeholder="1.432"
//                                                         />
//                                                     </div>
//                                                     <div className="form-group bg-hover col-md-12">
//                                                         <select className="form-control select">
//                                                             <option selected="">BTC</option>
//                                                             <option>Ethereum</option>
//                                                             <option>Ripple</option>
//                                                             <option>Bitcoin</option>
//                                                             <option>Cardano</option>
//                                                             <option>Litecoin</option>
//                                                             <option>NEO</option>
//                                                             <option>Stellar</option>
//                                                             <option>EOS</option>
//                                                             <option>NEM</option>
//                                                         </select>
//                                                     </div>
//                                                     <div className="col-md-12">
//                                                         <button
//                                                             type="button"
//                                                             className="btn btn-primary represh-btn mb-4"
//                                                         >
//                                                             <i
//                                                                 className="fas fa-exchange-alt"
//                                                                 aria-hidden="true"
//                                                             />
//                                                         </button>
//                                                     </div>
//                                                     <div className="form-group col-md-12 ">
//                                                         <input
//                                                             type="text"
//                                                             className="form-control "
//                                                             placeholder={338}
//                                                         />
//                                                     </div>
//                                                     <div className="form-group bg-hover col-md-12">
//                                                         <select className="form-control select">
//                                                             <option selected="">BTC</option>
//                                                             <option>Ethereum</option>
//                                                             <option>Ripple</option>
//                                                             <option>Bitcoin</option>
//                                                             <option>Cardano</option>
//                                                             <option>Litecoin</option>
//                                                             <option>NEO</option>
//                                                             <option>Stellar</option>
//                                                             <option>EOS</option>
//                                                             <option>NEM</option>
//                                                         </select>
//                                                     </div>
//                                                     <div className="text-center">
//                                                         <button className="btn btn-primary submit-btn mt-2">
//                                                             Exchange Now
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="modal fade exchange-currency-bg" id="incoming">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <div className="crypto-income-blk text-center">
//                                 <div className="voice-call-user">
//                                     <img src="assets/img/profile/avatar-01.jpg" alt="img" />
//                                     <h3>Bernardo James</h3>
//                                     <p>Senior Developer</p>
//                                 </div>
//                                 <div className="calling-income">
//                                     <h4>Calling...</h4>
//                                 </div>
//                                 <div className="voice-menu-income comman-flex">
//                                     <a
//                                         href="javascript:;"
//                                         className="btn btn-primary call-remove comman-flex me-2"
//                                         data-bs-dismiss="modal"
//                                     >
//                                         <img src="assets/img/icon/call-remove.svg" alt="img" />
//                                     </a>
//                                     <a
//                                         href="javascript:;"
//                                         className="btn btn-primary call-received comman-flex"
//                                     >
//                                         <img src="assets/img/icon/call-received.svg" alt="img" />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Dashboard;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from '../component/Header';
import SideBar from '../component/SideBar';
import WelcomeDashboard from './WelcomeDashboard';
import DasboardHome from './DasboardHome';
import MarketCap from './MarketCap';
import Transactions from './Transactions';

const Dashboard = () => {

    const skinColor = "#924aaa"; // Customize the sidebar skin color
    const textColor = "#ecf0f1"; // Customize the text color

    return (
        <>
            <div className="main-wrapper">
                <Header />
                <SideBar skinColor={skinColor} textColor={textColor} />
                <div className="page-wrapper bg-wrapper">
                    <Routes>
                        <Route path="/*" element={<DasboardHome />} />
                        <Route path="/market-cap" element={<MarketCap />} />
                        <Route path="/transactions" element={<Transactions />} />
                    </Routes>
                </div>
            <div className="notification-box">
      <div className="msg-sidebar notifications msg-noti">
        <div className="topnav-dropdown-header">
          <span>Messages</span>
        </div>
        <div className="drop-scroll msg-list-scroll" id="msg_list">
          <ul className="list-box">
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">R</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Richard Miles </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item new-message">
                  <div className="list-left">
                    <span className="avatar">J</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">John Doe</span>
                    <span className="message-time">1 Aug</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">T</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Tarah Shropshire </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">M</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Mike Litorus</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">C</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Catherine Manseau </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">D</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Domenic Houston </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">B</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Buster Wigton </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">R</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Rolland Webber </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">C</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author"> Claire Mapes </span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">M</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Melita Faucher</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">J</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Jeffery Lalor</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">L</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Loren Gatlin</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <div className="list-item">
                  <div className="list-left">
                    <span className="avatar">T</span>
                  </div>
                  <div className="list-body">
                    <span className="message-author">Tarah Shropshire</span>
                    <span className="message-time">12:28 AM</span>
                    <div className="clearfix" />
                    <span className="message-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="topnav-dropdown-footer">
          <a href="chat.html">See all messages</a>
        </div>
      </div>
            </div>
            </div>
            <div className="sidebar-overlay" data-reff="" />
            <div className="modal fade exchange-currency-bg" id="currency">
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <a className="btn-closes" data-bs-dismiss="modal">
                        <i className="feather-x" />
                    </a>
                    </div>
                    <div className="modal-body">
                    <div className="crypto-exchange">
                        <div className="card-title">
                        <h4 className="page-title">Exchange Cryptocurrency </h4>
                        </div>
                        <p className="ms-2 ps-2 pe-4">
                        Transfer from one wallet to another within seconds. It's that
                        simple.
                        </p>
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="exchange-form">
                            <form>
                                <div className="form-row ">
                                <div className="form-group col-md-12">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="1.432"
                                    />
                                </div>
                                <div className="form-group bg-hover col-md-12">
                                    <select className="form-control select">
                                    <option selected="">BTC</option>
                                    <option>Ethereum</option>
                                    <option>Ripple</option>
                                    <option>Bitcoin</option>
                                    <option>Cardano</option>
                                    <option>Litecoin</option>
                                    <option>NEO</option>
                                    <option>Stellar</option>
                                    <option>EOS</option>
                                    <option>NEM</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <button
                                    type="button"
                                    className="btn btn-primary represh-btn mb-4"
                                    >
                                    <i
                                        className="fas fa-exchange-alt"
                                        aria-hidden="true"
                                    />
                                    </button>
                                </div>
                                <div className="form-group col-md-12 ">
                                    <input
                                    type="text"
                                    className="form-control "
                                    placeholder={338}
                                    />
                                </div>
                                <div className="form-group bg-hover col-md-12">
                                    <select className="form-control select">
                                    <option selected="">BTC</option>
                                    <option>Ethereum</option>
                                    <option>Ripple</option>
                                    <option>Bitcoin</option>
                                    <option>Cardano</option>
                                    <option>Litecoin</option>
                                    <option>NEO</option>
                                    <option>Stellar</option>
                                    <option>EOS</option>
                                    <option>NEM</option>
                                    </select>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary submit-btn mt-2">
                                    Exchange Now
                                    </button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="modal fade exchange-currency-bg" id="incoming">
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                    <div className="crypto-income-blk text-center">
                        <div className="voice-call-user">
                        <img src="assets/img/profile/avatar-01.jpg" alt="img" />
                        <h3>Bernardo James</h3>
                        <p>Senior Developer</p>
                        </div>
                        <div className="calling-income">
                        <h4>Calling...</h4>
                        </div>
                        <div className="voice-menu-income comman-flex">
                        <a
                            href="javascript:;"
                            className="btn btn-primary call-remove comman-flex me-2"
                            data-bs-dismiss="modal"
                        >
                            <img src="assets/img/icon/call-remove.svg" alt="img" />
                        </a>
                        <a
                            href="javascript:;"
                            className="btn btn-primary call-received comman-flex"
                        >
                            <img src="assets/img/icon/call-received.svg" alt="img" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>

    );
}

export default Dashboard;
