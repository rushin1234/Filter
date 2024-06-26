import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header({ query, setQuery }) {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
            style={{marginLeft: '10px', width: '600px', maxWidth: '60vw'}}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default Header;