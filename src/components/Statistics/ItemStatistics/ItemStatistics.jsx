import PropTypes from 'prop-types'; // ES6
import { getRandomHexColor } from '../Utils/getRandomHexColor'
import css from '../Statistics.module.css'

export const ItemStatistics = ({ id, label, percentage }) => {
  
  return (
    <li className={css.item} key={ id } style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage + '%'}</span>
    </li>
  )
}

ItemStatistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}