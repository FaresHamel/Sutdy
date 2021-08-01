import { Button, Card } from "react-bootstrap";
import imgTest from "../../../Assets/Biblio.jpg";
import imgIt from "../../../Assets/It.jpg"
import "./spiciality.css";
const AllSpiciality = () => {
  return (
    <div className="container-all-spiciality">
      <Card style={{ width: "17rem", marginTop: "20px" }}>
        <Card.Img variant="top" src={imgTest} />
        <Card.Body>
          <Card.Title>Department of IT</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="outline-success">Read more</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "17rem", marginTop: "20px" }}>
        <Card.Img variant="top" src={imgIt} />
        <Card.Body>
          <Card.Title>Department of IT</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="outline-success">Read more</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "17rem", marginTop: "20px" }}>
        <Card.Img variant="top" src={imgTest} />
        <Card.Body>
          <Card.Title>Department of IT</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="outline-success">Read more</Button>
        </Card.Body>
      </Card>{" "}
      <Card style={{ width: "17rem", marginTop: "20px" }}>
        <Card.Img variant="top" src={imgTest} />
        <Card.Body>
          <Card.Title>Department of IT</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="outline-success">Read more</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "17rem", marginTop: "20px" }}>
        <Card.Img variant="top" src={imgTest} />
        <Card.Body>
          <Card.Title>Department of IT</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="outline-success">Read more</Button>
        </Card.Body>
      </Card>{" "}
      <Card style={{ width: "17rem", marginTop: "20px" }}>
        <Card.Img variant="top" src={imgTest} />
        <Card.Body>
          <Card.Title>Department of IT</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="outline-success">Read more</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default AllSpiciality;
