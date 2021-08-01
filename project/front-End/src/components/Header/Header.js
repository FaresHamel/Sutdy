/* eslint-disable jsx-a11y/alt-text */
import { React, Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import imgUniCon from "../../Assets/img-univ-const.png";
import iconSearch from "../../Assets/icons8-search-64.png";
import { connect } from "react-redux";
import { signout } from "../../helper/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Header extends Component {
  handelLougOut = () => {
    setTimeout(() => {
      this.props.setLogin(false);
      toast.success("Log out");
      signout();
    }, 1500);
  };

  render() {
    const isLoggedIn = this.props.props.isLogin;
    const userRole = isLoggedIn.role;

    return (
      <header className="header">
        <ToastContainer />
        <nav className="nav">
          <div className="nav-div-container-logo-name-univ">
            <img
              src={imgUniCon}
              className="nav-div-container-logo-name-univ-logo"
            />
            <span className="span-container-name-uni">
              <span className="span-container-name-uni-university">
                University
              </span>
              <span className="span-container-name-uni-constantine">
                Constantine 2 Abde Elhamid Mehri
              </span>
            </span>
          </div>
          <ul className="nav-ul-links">
            <li className="nav-ul-li">
              <Link to="/Home" className="nav-ul-li-a">
                Home
              </Link>
            </li>

            {/* if the user is a Teacher */}
            {userRole === "Teacher" && (
              <li className="nav-ul-li">
                <Link to="/About" className="nav-ul-li-a">
                  Formation
                </Link>
              </li>
            )}

            {/* IF The User is a Student */}
            {userRole === "Student" && (
              <ul className="nav-ul-links">
                <li className="nav-ul-li">
                  <Link to="/student/Modules/all" className="nav-ul-li-a">
                    Modules
                  </Link>
                </li>
                <li className="nav-ul-li">
                  <Link to="/student/couses/all" className="nav-ul-li-a">
                    Courses
                  </Link>
                </li>
              </ul>
            )}
            <li className="nav-ul-li">
              <Link to="/Departments/all" className="nav-ul-li-a">
                About
              </Link>
            </li>
            <li className="nav-ul-li">
              <Link to="/Departments/all" className="nav-ul-li-a">
                Contact
              </Link>
            </li>
            <li className="nav-ul-li">
              <Link to="/Departments/all" className="nav-ul-li-a">
                Department
              </Link>
            </li>
          </ul>
          <div className="div-container-search-singIn-singUp">
            <form className="form">
              <input
                placeholder="Search"
                type="search"
                className="input-search"
              />

              <img src={iconSearch} className="icon-search" />
            </form>
            <div className="div-container-singIn-singUp">
              {!isLoggedIn && (
                <span>
                  <Link className="singIn" to="/Home/SingIn">
                    Sing In
                  </Link>
                  <Link className="singUp" to="/Home/SingUp">
                    Sing Up
                  </Link>
                </span>
              )}
              {isLoggedIn && (
                <div>
                  <Link className="singUp" to="/" onClick={this.handelLougOut}>
                    Log out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    props: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (value) => {
      dispatch({ type: "CHANGE_LOGIN", isLogin: value });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
