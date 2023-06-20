import PropTypes from 'prop-types'; // ES6
import css from './Statistics.module.css';
import { listShow } from './Utils/listShow';

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