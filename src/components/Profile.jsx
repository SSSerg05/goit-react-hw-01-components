import "../css/profile.css"


export const Profile = (props) => {
  const {username, tag, location, stats} = props;

  return (
    <section className="user-profile">
      <div className="profile">
        <div className="description">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
            className="avatar"
          />
          <p className="name-profile">{username}</p>
          <p className="tag">{'@' + tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers </span>
            <span className="quantity">{new Intl.NumberFormat('en-IN').format(stats.followers)}</span>
          </li>
          <li>
            <span className="label">Views </span>
            <span className="quantity">{new Intl.NumberFormat('en-IN').format(stats.views)}</span>
          </li>
          <li>
            <span className="label">Likes </span>
            <span className="quantity">{new Intl.NumberFormat('en-IN').format(stats.likes)}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
