import { useAuth } from './../AuthContext';

export default function Header() {
  const { state } = useAuth();
  const user = state.user.user;

  return (
    <div className="header">
    <div className="header-left">
        <a href="index.html" className="logo">
           
            <h4> <span>Digital Payout</span></h4>
            <br></br>
            <img src="./../assets/img/logo-icon.png" width="40" height="40" alt="" /> 
        </a>
    </div>
    <div className="left-right-menu">
        <a id="toggle_btn" className="left-chev" href="javascript:void(0);"><i className="fas fa-chevron-left"></i></a>
    </div>
    <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar"><i className="fas fa-bars"></i></a>
    <div className="header-nav-blk">
        <h4>Dashboard</h4>
        <span>My Activity</span>
    </div>
    <ul className="nav user-menu user-menu-group float-end">
        <li className="live-grp">
            <h5>Live <span className="live-dark"></span></h5>
        </li>
        <li className="top-liv-search">
            <form>
                <input type="text" className="form-control" placeholder="Search here" />
                <button className="btn" type="submit"><img src="assets/img/icon/search-icon.svg" alt="" /></button>
            </form>
        </li>
        <li className="exchange-btn">
            <a href="javascript:;" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#currency"><img src="assets/img/icon/exchange-icon.svg" alt="" className="me-1" />Currency Exchange</a>
        </li>
        <li className="currency-list">
            <div className="form-group mb-0">
                <select className="form-control select">
                    <option selected="">USD</option>
                    <option>USE</option>
                    <option>USD</option>
                </select>
            </div>
        </li>
        <li className="nav-item dropdown d-none d-sm-block ">
            <a href="javascript:void(0);" id="open_msg_box" className="hasnotifications nav-link bg-box"><img src="assets/img/icon/message-icon.svg" alt="" /></a>
        </li>
        <li className="nav-item dropdown d-none d-sm-block ">
            <a href="#" className="dropdown-toggle nav-link bg-box " data-bs-toggle="dropdown"><img src="assets/img/icon/note-icon.svg" alt="" /> </a>
            <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                    <span>Notifications</span>
                </div>
                <div className="drop-scroll">
                    <ul className="notification-list">
                        <li className="notification-message">
                            <a href="activities.html">
                                <div className="media d-flex ">
                                    <span className="avatar flex-shrink-0">
                                        <img alt="John Doe" src="assets/img/user.jpg" className="img-fluid rounded-circle" />
                                    </span>
                                    <div className="media-body flex-grow-1">
                                        <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title"></span></p>
                                        <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        {/* Other list items */}
                    </ul>
                </div>
                <div className="topnav-dropdown-footer">
                    <a href="activities.html">View all Notifications</a>
                </div>
            </div>
        </li>
        <li className="nav-item dropdown has-arrow user-profile-list">
            <a href="#" className="dropdown-toggle nav-link user-link" data-bs-toggle="dropdown">
                <span className="user-img"><img className="rounded-circle" src="./../assets/img/profile/user-03.jpg" width="40" alt="Admin" />
                    <span className="status online"></span>
                </span>
                <div className="user-names">
                <h5>{user ? `${user.firstName} ${user.lastName}` : ''}</h5>
                {/* <span>{user ? user.email : ''}</span> */}
                    <span>Administrator</span>
                </div>
            </a>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="profile.html">My Profile</a>
                <a className="dropdown-item" href="edit-profile.html">Edit Profile</a>
                <a className="dropdown-item" href="settings.html">Settings</a>
                <a className="dropdown-item" href="login.html">Logout</a>
            </div>
        </li>
    </ul>
    <div className="dropdown mobile-user-menu float-end">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
        <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="profile.html">My Profile</a>
            <a className="dropdown-item" href="edit-profile.html">Edit Profile</a>
            <a className="dropdown-item" href="settings.html">Settings</a>
            <a className="dropdown-item" href="login.html">Logout</a>
        </div>
    </div>
</div>
  )
}
