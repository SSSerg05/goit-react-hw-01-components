import PropTypes from 'prop-types'; // ES6
import { ItemStatistics } from './ItemStatistics/ItemStatistics';
import css from './Statistics.module.css';

export const Statistics = (props) => {
  const { title, stats } = props;

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2> }
      <ul className={css.statList}>

        {
          stats.map( (element) => (
            <ItemStatistics
              key = { element.id } 
              id = { element.id }
              label = { element.label }
              percentage={element.percentage}>
            </ItemStatistics>
          ))
        }
        
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}