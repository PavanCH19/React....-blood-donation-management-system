import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav = ({ user, handleLogout }) => {
    const navigate = useNavigate();
    const location = useLocation(); // Get the current location (route)
    const isUserDashboard = location.pathname === "/blood-donation-management-system/user-dashboard";
    const isAdminDashboard = location.pathname === "/blood-donation-management-system/admin-dashboard";


    return (
        <>
            <style>
                {`
                #nav-container {
                    pointer-events: none;
                    z-index: 1;
                }

                #nav-container .bg {
                    position: absolute;
                    top: 133px;
                    left: 0;
                    width: 100%;
                    marign-right:10px;
                    height: calc(100% - 45px);
                    visibility: hidden;
                    opacity: 0;
                    transition: .3s;
                    background: rgba(0, 0, 0, 0.7);
                    z-index: 1;
                }

                #nav-container:focus-within .bg {
                    visibility: visible;
                    opacity: 0.6;
                }

                #nav-container * {
                    visibility: visible;
                }

                .nav-button {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    z-index: 1;
                    border: 0;
                    background: transparent;
                    height: 100px;
                    width: 35px;
                    cursor: pointer;
                    pointer-events: auto;
                    margin-left: 25px;
                    touch-action: manipulation;                    
                }

                .icon-bar {
                    display: block;
                    width: 100%;
                    height: 4px;
                    background: #fff;
                    transition: .3s;
                    border-radius: 2px;
                }

                .icon-bar + .icon-bar {
                    margin-top: 6px;
                }

                #nav-container:focus-within .button {
                    pointer-events: none;
                }

                #nav-container:focus-within .icon-bar:nth-of-type(1) {
                    transform: translate3d(0, 8px, 0) rotate(45deg);
                }

                #nav-container:focus-within .icon-bar:nth-of-type(2) {
                    opacity: 0;
                }

                #nav-container:focus-within .icon-bar:nth-of-type(3) {
                    transform: translate3d(0, -8px, 0) rotate(-45deg);
                }
                #nav-content {
                    margin-top: 130px;
                    margin-left: 10px;
                    padding: 20px;
                    width: 250px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: calc(100% - 40px);
                    background: #f9f9f9;
                    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
                    pointer-events: auto;
                    transform: translateX(-100%);
                    transition: transform .3s ease-out;
                    z-index: 3;
                    border-radius: 8px;
                    width : 300px;
                }
                                
                #nav-content ul {
                    display: flex;
                    flex-direction: column;
                    padding: 0;
                    margin: 0;
                }
                                
                #nav-content li {
                    list-style: none;
                }
                                
                #nav-content li a {
                    padding: 12px 20px;
                    display: block;
                    text-transform: uppercase;
                    font-weight: 600;
                    color: #333;
                    transition: color .3s ease, padding-left .3s ease;
                    border-radius: 6px;
                }
                                
                #nav-content li a.blood-donation {
                    color: #E60000; /* Blood Red */
                }
                                
                #nav-content li a.blood-donation:hover {
                    color: #fff;
                    background-color: #E60000; /* Blood Red on hover */
                    padding-left: 25px;
                }
                                
                #nav-content li a:hover {
                    color: #BF7497;
                    padding-left: 25px;
                    background-color: rgba(191, 116, 151, 0.1);
                }
                                
                #nav-container:focus-within #nav-content {
                    transform: none;
                }
                            
                .main-title-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    background-color: #B22222; /* Firebrick */
                    padding: 10px;
                    border-radius: 10px;
                    margin: 10px;
                    height: 7rem;
                    
                }

                .main-title {
                    padding-left: 20px;
                    margin-left: 1rem;
                    font-size: 2rem;
                    font-weight: 700;
                    color: #fff;
                    display: flex;
                    justify-content: space-between; /* Space elements evenly between */
                    align-items: center;
                }

                .main-title h1 {
                    margin: 0;
                    color: white;
                    padding-left: 1.5rem;
                    font-size: 2.5rem;
                }

            .main-title button {
                border-radius: 50%;
                height: 4rem;
                width: 4rem;
                padding: 0;
                pointer-events: auto; 
                cursor: pointer;
                margin-left : 20px;
            }

            .details{
                position: absolute;
                right: 2.5rem;
                display: flex;
                justify-content: space-between; 
                align-items: center;
            }

            .details h5 {
                    display :inline;
            }
                
            .details p {
                    text-align : end;
                    font-size : 1.1rem;
                    color : rgba(240, 240, 240, 1);
            }
                `}
            </style>

            <nav id="nav-container">
                <div className="bg"></div>
                <div className="main-title-container">
                    <span className="nav-button" tabIndex="0">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </span>
                    <div className="main-title">
                        <h1>Blood Bond Network</h1>
                        <div className="details">
                            {user ? (
                                <>
                                    <div className="nameType">
                                        <h5> {user.donarName || user.bloodBankName || user.adminName}</h5>
                                        <p> {user.userType}</p>
                                    </div>
                                    <button
                                        onClick={() =>
                                            navigate(
                                                user.userType === "admin"
                                                    ? "/blood-donation-management-system/admin-dashboard"
                                                    : "/blood-donation-management-system/user-dashboard"
                                            )
                                        }
                                        disabled={isUserDashboard || isAdminDashboard}
                                    >
                                        Dashboard
                                    </button>
                                </>
                            ) : (
                                <button onClick={() => { navigate("/blood-donation-management-system/login"); }}>login</button>
                            )}
                        </div>
                    </div>
                </div>

                <div id="nav-content" tabIndex="0">
                    <ul>
                        <li>
                            <Link to="/blood-donation-management-system">Go to Home</Link>
                        </li>

                        {user?.userType === "bloodbank" || user?.userType === "admin" ? (
                            <li>
                                <Link to="/blood-donation-management-system/blood-request">Request blood</Link>
                            </li>
                        ) : (
                            <li>
                                <span style={{ color: 'gray', cursor: 'not-allowed' }}>Request blood</span>
                            </li>
                        )}

                        <li>
                            <Link to="/blood-donation-management-system/donar-registration">Donor Registration</Link>
                        </li>

                        <li>
                            <Link to="/blood-donation-management-system/bloodbank-registration">Blood Bank Registration</Link>
                        </li>

                        {user ? (
                            <li>
                                <Link onClick={handleLogout}>Logout</Link>
                            </li>
                        ) : (
                            <li>
                                <Link to="/blood-donation-management-system/login">Login</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Nav;
