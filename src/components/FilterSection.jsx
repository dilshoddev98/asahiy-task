import { Button, Form } from "react-bootstrap";
import { operations } from "../utils/operations";

const Filter = ({ setTransactions, transactions }) => {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("transactions"));

  const handleChange = (e) => {
    if (e.target.value === "Umumiy") {
      setTransactions(dataFromLocalStorage);
    } else {
      const filteredData = dataFromLocalStorage.filter((item) => {
        return item.category === e.target.value;
      });
      setTransactions(filteredData);
    }
  };

  const handleClick = () => {
    setTransactions([]);
    localStorage.clear();
  };

  return (
    <Form
      className="d-flex flex-column flex-sm-row align-items-center gap-3 mb-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <Form.Group className="w-100 w-sm-75">
        <Form.Control
          as="select"
          onChange={handleChange}
          className="custom-select"
        >
          <option>Umumiy</option>
          {operations.map((item) => {
            return <option key={item.id}>{item.title}</option>;
          })}
        </Form.Control>
      </Form.Group>
      <Button variant="danger" onClick={handleClick} className="custom-btn">
        Tozalash
      </Button>
    </Form>
  );
};

export default Filter;
