/* eslint-disable jsx-a11y/alt-text */
import { React, Component } from "react";
import "./Teacher.css";
import imgCours from "../../Assets/basic_spread_bookmark.svg";
import imgNewCours from "../../Assets/basic_elaboration_folder_pencil.svg";
import imgModul from "../../Assets/basic_elaboration_folder_document.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Allmodules from "./Modules/allModules";
import Allcourses from "./Courses/AllCourses";
import Cours from "./Cours/cours";
import AddnewModule from "./Module/Module";
class Teacher extends Component {
  render() {
    return (
      <Router>
        <div className="container-teacher">
          <nav className="container-left">
            <ul className="container-left-ul">
          
              <li>
                <img src={imgCours} className="img-icon-nav" />
                <Link to="/couses/all" className="nav-ul-li-a">
                  Cours
                </Link>
              </li>
              <li>
                <img src={imgModul} className="img-icon-nav" />
                <Link to="/Modules/all" className="nav-ul-li-a">
                  Modules
                </Link>
              </li>
              <li>
                <img src={imgNewCours} className="img-icon-nav" />
                <Link to="/courses/add" className="nav-ul-li-a">
                  Add new cours
                </Link>
              </li>
              <li>
                <img src={imgNewCours} className="img-icon-nav" />
                <Link to="/module/add" className="nav-ul-li-a">
                  Add new module
                </Link>
              </li>
            </ul>
          </nav>

          <div className="container-right">
            <Switch>
              <Route path="/couses/all" component={Allcourses} />
              <Route path="/Modules/all" component={Allmodules} />
              <Route path="/courses/add" component={Cours} />
              <Route path="/module/add" component={AddnewModule} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Teacher;
