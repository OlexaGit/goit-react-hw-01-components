import PropTypes from 'prop-types';
import css from './Transaction.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.titleTable}>
          <th className={css.titleTableItem}>Type</th>
          <th className={css.titleTableItem}>Amount</th>
          <th className={css.titleTableItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.listTable}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.itemTable}>
            <td className={css.itemTableItem}>{type}</td>
            <td className={css.itemTableItem}>{amount}</td>
            <td className={css.itemTableItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
