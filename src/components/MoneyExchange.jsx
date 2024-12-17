import { useEffect, useState } from "react";
import { Form, Container, Button, Card } from "react-bootstrap";

const url =
  "https://v6.exchangerate-api.com/v6/7cfdef9e906c2476a6e3178f/latest";

const MoneyExchange = () => {
  const [data, setData] = useState(null);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("UZS");
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    fetch(`${url}/usd`)
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleCurrencyChange = (e) => setCurrency(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data && amount) {
      const rate = data[currency];
      setConvertedAmount(amount * rate);
    }
  };

  return (
    <Container className="my-5">
      <Card className="shadow p-4">
        <h3 className="text-center mb-4">Valyuta Kursi</h3>
        {data && (
          <div className="text-center mb-4">
            <p>1 USD - {data.UZS} UZS</p>
            <p>1 USD - {data.EUR} EUR</p>
            <p>1 USD - {data.RUB} RUB</p>
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>USD miqdori</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="USD"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Valyuta</Form.Label>
            <Form.Control
              as="select"
              value={currency}
              onChange={handleCurrencyChange}
            >
              <option value="UZS">UZS</option>
              <option value="EUR">EUR</option>
              <option value="RUB">RUB</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" block>
            Kursga o'tish
          </Button>
        </Form>
        {convertedAmount !== null && (
          <div className="text-center mt-4">
            <h5>
              {amount} USD is {convertedAmount} {currency}
            </h5>
          </div>
        )}
      </Card>
    </Container>
  );
};

export default MoneyExchange;
