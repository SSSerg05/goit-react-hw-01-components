import "../css/transactions.css";

// id — уникальный идентификатор транзакции
// type — тип транзакции
// amount - сумма транзакции
// currency - тип валюты
const transactionShow = (items) =>
  items.map(({ id, type, amount, currency }) =>
    (
      <tr id={id} >
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    )
  );

export const TransactionHistory = ({ items }) => {

  return (
    <section class="transactions">
      <table class="transaction-history">
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