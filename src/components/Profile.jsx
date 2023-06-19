import "../css/profile.css"


export const Profile = (props) => {
  const {username, tag, location, stats} = props;

  return (
    <div class="profile">
      <div class="description">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          class="avatar"
        />
        <p class="name">{username}</p>
        <p class="tag">{'@' + tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers </span>
          <span class="quantity">{new Intl.NumberFormat('en-IN').format(stats.followers)}</span>
        </li>
        <li>
          <span class="label">Views </span>
          <span class="quantity">{new Intl.NumberFormat('en-IN').format(stats.views)}</span>
        </li>
        <li>
          <span class="label">Likes </span>
          <span class="quantity">{new Intl.NumberFormat('en-IN').format(stats.likes)}</span>
        </li>
      </ul>
    </div>
  );
}
