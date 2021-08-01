import "./App.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Contact from "../components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Departments from "../components/Departments/Departments";
import Apply from "../components/Apply/Apply";
import SingUp from "../components/Form/singup/FormSingUp";
import SingIn from "../components/Form/singIn/FormSingIn";
import { Component} from "react";
import Teacher from "../components/Teacher/Teacher";
import Allmodules from "../components/Teacher/Modules/allModules";
import Allcourses from "../components/Teacher/Courses/AllCourses";
class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="main-container">
            <Header />
            {/* param={ this.state.isLoggedIn} */}
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Departments/all" component={Departments} />
              <Route path="/Apply" component={Apply} />
              {/* <Route path="/About" component={About} /> */}
              <Route path="/Home/SingUp" component={SingUp} />
              {/* <Route path="/Home/SingIn" component={SingIn} /> */}
              <Route path="/Home/SingIn">
                <SingIn />
                {/* {...this.setState.isLoggedIn} */}
              </Route>
              <Route path="/About" component={Teacher} />
                 <Route path="/student/couses/all" component={Allcourses} />
              <Route path="/student/Modules/all" component={Allmodules} />
              <Main />
              <Footer />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}



export default App;

