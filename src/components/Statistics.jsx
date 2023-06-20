import "../css/statistics.css";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const List = (stats) => stats.map(({ id, label, percentage }) => (
    <li class="item" id={id} style={{ backgroundColor: getRandomHexColor()}
}>
      <span class="label-stat">{label}</span>
      <span class="percentage">{percentage + '%'}</span>
    </li>
  ));

export const Statistics = (props) => {
  const { title, stats } = props;



  return (
    <section class="statistics">
     <h2 class="title">{title}</h2>

     <ul class="stat-list">
        { List(stats) }
     </ul>
    </section>
  );
}