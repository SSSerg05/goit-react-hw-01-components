// id — уникальный идентификатор транзакции
// type — тип транзакции
// amount - сумма транзакции
// currency - тип валюты
export const transactionShow = (items) =>
  items.map(({ id, type, amount, currency }) =>
    (
      <tr key={id} >
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    )
  );