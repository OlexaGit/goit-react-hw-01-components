import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ title = '', stats }) {
  console.log(stats);
  return (
    <section className={css.statistics}>
      {title !== '' && <h2 className={css.title}>Upload stats</h2>}
      <ul className={css.statList}>
        {stats.map(item => (
          <li className={css.item} key={item.id}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
