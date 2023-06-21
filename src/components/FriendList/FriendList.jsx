import PropTypes from 'prop-types'; // ES6
import { ItemFriends } from './ItemFriends/ItemFriends'
import css from './FriendList.module.css'

// import { friendsShow } from './Utils/friendsShow'

export const FriendList = ({ friends } ) => {

  return (
    <section className={css.friends}>
      <ul className={css.list}>
        {
          friends.map(item => 
            <ItemFriends
                key={item.id}
                id = {item.id}
                isOnline={item.isOnline}
                name={item.name}
                avatar={item.avatar}>
            </ItemFriends>)
        }
      </ul>
    </section>   
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar : PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}