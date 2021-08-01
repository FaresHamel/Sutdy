import { React, Component } from "react";
import { Button, Card } from "react-bootstrap";
import imgTest from "../../Assets/Class.jpg";
import imgIt from "../../Assets/Biblio.jpg";
import img1 from "../../Assets/It.jpg";
import "./Departments.css";
import imgSecusse from "../../Assets/sessus.jpg";
import imgProjects from "../../Assets/Projects.jpg";
import imgBourses from "../../Assets/EducationBourses.jpg";
class Departments extends Component{

    render() {
        return (
          <div className="container-all-spicialit">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Department of IT</Card.Title>
                <Card.Text>
                  You can finde big and Many resources for your projects and
                  Student.departement of Technologies..
                </Card.Text>
                <Button variant="outline-success">Read more</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={imgIt} />
              <Card.Body>
                <Card.Title>Department of Bibliotheque</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-success">Read more</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={imgTest} />
              <Card.Body>
                <Card.Title>Department of Sience of Humen</Card.Title>
                <Card.Text>
                  These and other professionals play vital parts in times like
                  these.
                </Card.Text>
                <Button variant="outline-success">visit this</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={imgProjects} />
              <Card.Body>
                <Card.Title>Department of Sience Economique</Card.Title>
                <Card.Text>
                  We’re setting the stage for spring graduates Congratulations,
                  Class of 2021.
                </Card.Text>
                <Button variant="outline-success">visit this</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={imgIt} />
              <Card.Body>
                <Card.Title>Department of Bisnise</Card.Title>
                <Card.Text>
                  Get details on how to celebrate safely with Drive-By Grad
                  Bash, in-person Grad Walk and Virtual Commencement..
                </Card.Text>
                <Button variant="outline-success">visit this</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={imgBourses} />
              <Card.Body>
                <Card.Title>Department of sociologies</Card.Title>
                <Card.Text>
                  These and other professionals play vital parts in times like
                  these.
                </Card.Text>
                <Button variant="outline-success">visit this </Button>
              </Card.Body>
            </Card>
          </div>
        );
    }
}

export default Departments;