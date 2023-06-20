import PropTypes from 'prop-types'; // ES6
import "../css/statistics.css";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const listShow = (stats) => stats.map(({ id, label, percentage }) => (
    <li className="item" key={id} style={{ backgroundColor: getRandomHexColor()}
}>
      <span className="label-stat">{label}</span>
      <span className="percentage">{percentage + '%'}</span>
    </li>
  ));

const titleShow = (title) => { 
  if (!title) {
    return
  }
  return (<h2 className="title">{title}</h2>)
}


export const Statistics = (props) => {
  const { title, stats } = props;

  return (
    <section className="statistics">
      
      { titleShow(title) }

     <ul className="stat-list">
        { listShow(stats) }
     </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  })),
}