import PropTypes from 'prop-types'; // ES6
import "../css/friendList.css"

const friendsShow = (friends) =>
  friends.map(({ id, isOnline, name, avatar }) => 
    <li className="item-friends" key={id}>
      <span className="status" style={ {backgroundColor: isOnline ? 'green':'red'} }></span>
      <img className="avatar" src={ avatar } alt="User avatar" width="48" />
      <p className="name">{ name }</p>
    </li>)


export const FriendList = ({ friends } ) => {

  return (
    <section className="friends">
      <ul className="list-friends">
        { friendsShow(friends) }
      </ul>
    </section>   
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar : PropTypes.string.isRequired,
  })),
}