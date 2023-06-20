import PropTypes from 'prop-types'; // ES6
import "../css/friendList.css"

const isOnlineShow = (isOnline) => {
  if (!isOnline) {
    return <span className="status" style={{backgroundColor: 'red'} }></span>  
  }
  
  return <span className="status" style={{ backgroundColor: 'green' }}></span>  
  
}

const friendsShow = (friends) =>
  friends.map(({ id, isOnline, name, avatar }) => 
      <li className="item-friends" key={id}>
          { isOnlineShow(isOnline) }
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
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    name: PropTypes.string,
    avatar : PropTypes.string,
  })),
}