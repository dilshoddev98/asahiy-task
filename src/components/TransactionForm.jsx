import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { operations } from "../utils/operations";

const TransactionForm = ({ addTransaction }) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const [date, setDate] = useState(formattedDate);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [operation, setOperation] = useState(operations[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      date,
      title,
      amount,
      category: operation.title,
      type: operation.type,
    });
    setTitle("");
    setAmount("");
    setOperation(operations[0]);
  };

  return (
    <Card className="transaction-form-card shadow-sm mb-4 p-4">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Sana</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Izoh</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Miqdor</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Kategoriya</Form.Label>
            <Form.Control
              as="select"
              defaultValue={operation.title}
              onChange={(e) => {
                setOperation(JSON.parse(e.target.value));
              }}
            >
              {operations.map((item) => {
                return (
                  <option key={item.id} value={JSON.stringify(item)}>
                    {item.title}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tranzaksiya tipi</Form.Label>
            <Form.Control disabled value={operation.type} />
          </Form.Group>

          <Button className="mt-3 w-100" type="submit" variant="primary">
            Qo&apos;shish
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TransactionForm;
