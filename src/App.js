
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Container, Nav,Row, Col, NavDropdown, Form, Button, Carousel, Card, ListGroup} from "react-bootstrap"
function App() {
  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Book Review</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">My Books</Nav.Link>
        <Nav.Link href="#link">Reccomendations</Nav.Link>
        <Nav.Link href="#link">Lists</Nav.Link>
        <NavDropdown title="Genres" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Adventure</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
     <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.ingramcontent.com/blog-articles/METADATA%20BANNER%20BLOG.png?Action=thumbnail&Width=730&Height=240&algorithm=fill_proportional"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.ingramcontent.com/blog-articles/METADATA%20BANNER%20BLOG.png?Action=thumbnail&Width=730&Height=240&algorithm=fill_proportional"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.ingramcontent.com/blog-articles/METADATA%20BANNER%20BLOG.png?Action=thumbnail&Width=730&Height=240&algorithm=fill_proportional"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
  
    <Form>
      <h2>Sign up</h2>
      <h6>or <a href=''>Sign in</a></h6>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
<Container>
<Row style={{ margin: '5% 10%' }}>
    <Col sm>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://img1.od-cdn.com/ImageType-400/5054-1/3AD/B16/B9/%7B3ADB16B9-E0CE-48E7-9C94-F55571274428%7DImg400.jpg" />
        <Card.Body>
          <Card.Title>Book ofthe month</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Shelf it</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col sm>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://img1.od-cdn.com/ImageType-400/5054-1/3AD/B16/B9/%7B3ADB16B9-E0CE-48E7-9C94-F55571274428%7DImg400.jpg" />
        <Card.Body>
          <Card.Title>Book ofthe month</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Shelf it</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col sm><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://img1.od-cdn.com/ImageType-400/5054-1/3AD/B16/B9/%7B3ADB16B9-E0CE-48E7-9C94-F55571274428%7DImg400.jpg" />
        <Card.Body>
          <Card.Title>Book ofthe month</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Shelf it</Button>
        </Card.Body>
      </Card></Col>
  </Row>
  <Row style={{ backgroundColor: '#d1d1d1', margin: '0%' }}>
    <Col sm style={{ margin: '5%' }}>
      <img src='https://www.graphicsprings.com/filestorage/stencils/c4a7967fc5cc7de14bf88688831986fc.png?width=500&height=500' style={{ width: '175px' }}></img>
    </Col>
    <Col sm style={{ margin: '5%' }}>
    <ListGroup variant="flush">
      <ListGroup.Item>Home</ListGroup.Item>
      <ListGroup.Item>Authors</ListGroup.Item>
      <ListGroup.Item>Lists</ListGroup.Item>
      <ListGroup.Item>Contact</ListGroup.Item>
    </ListGroup>
    </Col>
    <Col sm style={{ margin: '5%' }}>
    <ListGroup variant="flush">
      <ListGroup.Item>Facebook</ListGroup.Item>
      <ListGroup.Item>Instagram</ListGroup.Item>
      <ListGroup.Item>Twiter</ListGroup.Item>
      <ListGroup.Item>Youtube</ListGroup.Item>
    </ListGroup>
    </Col>
  </Row>
</Container>
      
    
    </div>
  );
}

export default App;


