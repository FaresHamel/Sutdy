import { Component } from "react";
import "./allModules.css";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import imgTest from "../../../Assets/bibliothequeOne.jpg";
class AllModules extends Component {
  state = {
    ListModules: [],
  };

  handlerAllModules = async () => {
    try {
      const modules = await axios.get(
        "http://localhost:8080/modules/getModules"
      );

      const ListModules = modules.data.reslt;
      this.setState({ ListModules: ListModules });

      console.log(this.state.ListModules);
    } catch (error) {
      return error.response;
    }
  };

  componentDidMount() {
    this.handlerAllModules();
  }

  render() {
    const ListModules = this.state.ListModules.map((mod) => {
      
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
              src={mod.filename}
              style={{ height: "150px" }}
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "14px", textAlign: "start" }}>
                Name of module : {mod.name}
              </Card.Title>

              <Card.Text>
                <Card.Text className="container-text">
                  <Card.Text className="text">Cridit :{mod.cridit} </Card.Text>
                  <Card.Text className="text">TD : {mod.Td} </Card.Text>
                  <Card.Text className="text">TP : {mod.Tp}</Card.Text>
                  <Card.Text className="text">COUR : {mod.cours}</Card.Text>
                </Card.Text>
                <Card.Text className="module-description">
                  {mod.description}
                </Card.Text>
              </Card.Text>
              <Button variant="outline-success">show Content</Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
    return <div className="container-all-modules">{ListModules}</div>;
  }
}
export default AllModules;
