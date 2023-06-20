import PropTypes from 'prop-types'; // ES6
import css from "./TransactionHistory.module.css";
import { transactionShow } from './Utils/transactionShow'

export const TransactionHistory = ({ items }) => {

  return (
    <section className={css.transactions}>
      <table className={css.transactionHistory}>
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
