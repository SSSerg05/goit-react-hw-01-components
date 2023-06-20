import { getRandomHexColor } from './getRandomHexColor'
import css from '../Statistics.module.css'


export const listShow = (stats) => stats.map(({ id, label, percentage }) => (
    <li className={css.item} key={id} style={{ backgroundColor: getRandomHexColor()}
}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage + '%'}</span>
    </li>
  ));