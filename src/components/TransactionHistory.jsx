import PropTypes from 'prop-types'; // ES6
import "../css/transactions.css";

// id — уникальный идентификатор транзакции
// type — тип транзакции
// amount - сумма транзакции
// currency - тип валюты
const transactionShow = (items) =>
  items.map(({ id, type, amount, currency }) =>
    (
      <tr key={id} >
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    )
  );

export const TransactionHistory = ({ items }) => {

  return (
    <section className="transactions">
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          { transactionShow(items) }
        </tbody>
      </table>
    </section>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })),
}
