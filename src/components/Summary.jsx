import { Card, Row, Col } from "react-bootstrap";

const Summary = ({ balance, income, expenses }) => (
  <Row className="mb-4">
    <Col sm={12} md={4} className="mb-3 mb-md-0">
      <Card className="summary-card bg-success text-white shadow-sm">
        <Card.Body>
          <Card.Title>Sof balans</Card.Title>
          <Card.Text>{balance} UZS</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col sm={12} md={4} className="mb-3 mb-md-0">
      <Card className="summary-card bg-info text-white shadow-sm">
        <Card.Body>
          <Card.Title>Daromad</Card.Title>
          <Card.Text>{income} UZS</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col sm={12} md={4}>
      <Card className="summary-card bg-warning text-white shadow-sm">
        <Card.Body>
          <Card.Title>Xarajat</Card.Title>
          <Card.Text>{expenses} UZS</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Summary;
