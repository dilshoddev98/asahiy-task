import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Chart from "./components/Chart";
import "./index.css";
import Filter from "./components/FilterSection";
import MoneyExchange from "./components/MoneyExchange";
function App() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );
  const addTransaction = (transaction) => {
    localStorage.setItem(
      "transactions",
      JSON.stringify([...transactions, transaction])
    );
    setTransactions([...transactions, transaction]);
  };

  const calculateTotal = (type) => {
    return transactions
      .filter((transaction) => transaction.type === type)
      .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);
  };

  const totalIncome = calculateTotal("Daromad");
  const totalExpense = calculateTotal("Xarajat");
  const balance = totalIncome - totalExpense;

  return (
    <Container>
      <Header />
      <Summary balance={balance} income={totalIncome} expenses={totalExpense} />
      <Row>
        <Col md={6}>
          <TransactionForm addTransaction={addTransaction} />
        </Col>
        <Col md={6}>
          <Filter
            transaction={transactions}
            setTransactions={setTransactions}
          />
          <TransactionList transactions={transactions} />
        </Col>
      </Row>
      <Row>
        <Col>
          <MoneyExchange />
        </Col>
        <Col>
          <Chart transactions={transactions} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
