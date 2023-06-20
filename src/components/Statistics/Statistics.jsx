import PropTypes from 'prop-types'; // ES6
import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const listShow = (stats) => stats.map(({ id, label, percentage }) => (
    <li className={css.item} key={id} style={{ backgroundColor: getRandomHexColor()}
}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage + '%'}</span>
    </li>
  ));

export const Statistics = (props) => {
  const { title, stats } = props;

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2> }
      <ul className={css.statList}>

        { listShow(stats) }
        
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
}