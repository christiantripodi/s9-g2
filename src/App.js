
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
                <Col xs={12} md={3} key={product.asin}>
                <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.price}€
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
