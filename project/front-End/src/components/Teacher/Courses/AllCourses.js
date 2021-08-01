import { React, Component } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
class AllCours extends Component {
  state = {
    ListCourses: [],
  };

  handlerAllModules = async () => {
    try {
      const courses = await axios.get(
        "http://localhost:8080/modules/cours/get/all"
      );

      const ListCourses = courses.data.reslt;
      this.setState({ ListCourses: ListCourses });

      console.log(this.state.ListCourses);
    } catch (error) {
      return error.response;
    }
  };

  componentDidMount() {
    this.handlerAllModules();
  }

  render() {
   const ListCourses = this.state.ListCourses.map((cours) => {
     return (
       <div className="modules">
         <Card
           style={{
             width: "18rem",
             marginTop: "10px",
             backgroundColor: "inherit",
           }}
         >
           <Card.Img
             variant="top"
             src={cours.filename}
             style={{ height: "150px" }}
           />
           <Card.Body>
             <Card.Title style={{ fontSize: "14px", textAlign: "start" }}>
               Name of module : {cours.description}
             </Card.Title>

             <Card.Text>
               <Card.Text className="container-text">
                 <Card.Text className="text">Module :{cours.module} </Card.Text>
               </Card.Text>
               
             </Card.Text>
             <Button variant="outline-success">Telécharge le cours</Button>
           </Card.Body>
         </Card>
       </div>
     );
   });
    return <div className="container-all-modules">{ListCourses}</div>;
  }
};
export default AllCours;
