import "../css/statistics.css";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const listShow = (stats) => stats.map(({ id, label, percentage }) => (
    <li class="item" key={id} style={{ backgroundColor: getRandomHexColor()}
}>
      <span class="label-stat">{label}</span>
      <span class="percentage">{percentage + '%'}</span>
    </li>
  ));

const titleShow = (title) => { 
  if (!title) {
    return
  }
  return (<h2 class="title">{title}</h2>)
}


export const Statistics = (props) => {
  const { title, stats } = props;

  return (
    <section class="statistics">
      
      { titleShow(title) }

     <ul class="stat-list">
        { listShow(stats) }
     </ul>
    </section>
  );
}