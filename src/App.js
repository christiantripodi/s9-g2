
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import CustomNavbar from './components/CustomNavbar'
import fantasy from "./data/fantasy.json"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Container>
        <Row>
          {
            fantasy.map(product => {
              return (
                <Col>
                <Card>
      <Card.Img variant="top" src="http://placedog.net/400" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
