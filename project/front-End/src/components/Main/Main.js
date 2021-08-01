import { React, Component } from "react";
import imgBibliotheque from "../../Assets/bibliothequeOne.jpg";
import imgSecusse from "../../Assets/sessus.jpg";
import imgProjects from "../../Assets/Projects.jpg";
import imgBibli from "../../Assets/Class.jpg";
import imgBourses from "../../Assets/EducationBourses.jpg";
import imgVisWeb from "../../Assets/EducationOnline.jpg";
import imgIt from "../../Assets/It.jpg";
import "./Main.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Card} from "react-bootstrap";
import imgSec from "../../Assets/Biblio.jpg";
class Main extends Component {
   
  render() {
    return (
      <div className="div-test-one">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgBibliotheque}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Many Resources</h3>
              <p>
                You can finde big and Many resources for your projects and
                Student.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgSecusse}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Education</h3>
              <p>
                We’re setting the stage for spring graduates Congratulations,
                Class of 2021. Get details on how to celebrate safely with
                Drive-By Grad Bash, in-person Grad Walk and Virtual
                Commencement...
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgBourses}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Scholar Ship and Bourses </h3>
              <p>
                You can get Bourses to Best Country for Students of University
                Constantine 2 .
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgProjects}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Projects and The University</h3>
              <p>
                Univ-Constantine 2 on the frontlines Nurses, teachers,
                counselors, social workers. These and other professionals play
                vital parts in times like these. Help us empower them. .
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imgVisWeb} alt="Third slide" />

            <Carousel.Caption>
              <h3>E-Learning</h3>
              <p>
                Visite the web site of the University to get new news of
                university.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* Start Actialise */}
        <div className="div-container-education-news">
          {/* Card one */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgIt} />
            <Card.Body>
              <Card.Title>Department of IT</Card.Title>
              <Card.Text>
                You can finde big and Many resources for your projects and
                Student.departement of Technologies.
              </Card.Text>
              <Button variant="outline-success">Read more</Button>
            </Card.Body>
          </Card>
          {/* Card Two */}
          <Card style={{ width: "18rem", height: "25rem" }}>
            <Card.Img
              variant="top"
              src={imgBibliotheque}
              style={{ height: "50%" }}
            />
            <Card.Body>
              <Card.Title>Department of Sience of Humen</Card.Title>
              <Card.Text>
                These and other professionals play vital parts in times like
                these.
              </Card.Text>
              <Button variant="outline-success">Read more</Button>
            </Card.Body>
          </Card>
          {/* Card Three */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgProjects} />
            <Card.Body>
              <Card.Title>Department of Sience Economique</Card.Title>
              <Card.Text>
                We’re setting the stage for spring graduates Congratulations,
                Class of 2021.
              </Card.Text>
              <Button variant="outline-success">Read more</Button>
            </Card.Body>
          </Card>
          {/* Card For */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgBourses} />
            <Card.Body>
              <Card.Title>Department of Bisnise</Card.Title>
              <Card.Text>
                Get details on how to celebrate safely with Drive-By Grad Bash,
                in-person Grad Walk and Virtual Commencement..
              </Card.Text>
              <Button variant="outline-success">Read more</Button>
            </Card.Body>
          </Card>
        </div>
        {/* End Actualise */}
        {/* Start Actialise */}
        <div className="div-container-education-breaken">
          {/* Card one */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgBibli} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-secondary">Read more</Button>
            </Card.Body>
          </Card>
          {/* Card Two */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgBibli} />
            <Card.Body>
              <Card.Title>read Books</Card.Title>
              <Card.Text>to get books for free from the university.</Card.Text>
              <Button variant="outline-secondary">Read more</Button>
            </Card.Body>
          </Card>
          {/* Card Three */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgSecusse} />
            <Card.Body>
              <Card.Title>Student Education</Card.Title>
              <Card.Text>
                for the major student and get good scholler ship in other
                country
              </Card.Text>
              <Button variant="outline-secondary">Read more</Button>
            </Card.Body>
          </Card>
          {/* Card For */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgSec} />
            <Card.Body>
              <Card.Title>Project</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-secondary">Read more</Button>
            </Card.Body>
          </Card>
        </div>
        {/* End Actualise */}
        {/* starting section Elerning Platform */}
        <div className="div-container-elerning-platform">
          Elearning platform - Online courses and learning content
          <Button variant="outline-success">Visite Web Site</Button>
        </div>
        {/* End section Elerning Platform */}
        <div className="div-container-journy-university">
          <span className="span-container-title-university-journls">
            University Journals
          </span>
          <div className="div-container-univerity-journals">
            <div className="div-cont">
              <img className="img" src={imgBourses} alt="this is alter text" />
              <div className="con-tit">
                <span className="con-tit-title-h3">DIRASSAT IQTISSADIYA</span>
                <span className="con-tit-title-span">
                  Economics and managment faculty .
                </span>
              </div>
            </div>
            <div className="div-cont">
              <img className="img" src={imgSecusse} alt="this is alter text" />
              <div className="con-tit">
                <h3 className="con-tit-title-h3">DIRASSAT</h3>
                <span className="con-tit-title-span">
                  Human and social sciences .
                </span>
              </div>
            </div>
          </div>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default Main;
