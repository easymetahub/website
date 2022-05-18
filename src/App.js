import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container} from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
                alt=""
                src="./logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            EasyMetaHub
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
