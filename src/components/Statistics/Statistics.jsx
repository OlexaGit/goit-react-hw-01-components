import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ title = '', stats }) {
  console.log(stats);
  return (
    <section className={css.statistics}>
      {title !== '' && <h2 class="title">Upload stats</h2>}
      <ul class="stat-list">
        {stats.map(item => (
          <li class="item" key={item.id}>
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}%</span>
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
