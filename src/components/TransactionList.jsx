import { Table } from "react-bootstrap";

const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list-container">
      <Table className="transaction-table" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sana</th>
            <th>Izoh</th>
            <th>Miqdor</th>
            <th>Kategoriya</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.title}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionList;
