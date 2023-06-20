import PropTypes from 'prop-types'; // ES6
import css from './FriendList.module.css'

const friendsShow = (friends) =>
  friends.map(({ id, isOnline, name, avatar }) => 
    <li className={css.item} key={id}>
      <span className={css.status} style={ {backgroundColor: isOnline ? 'green':'red'} }></span>
      <img className={css.avatar} src={ avatar } alt="User avatar" width="48" />
      <p className={css.name}>{ name }</p>
    </li>)


export const FriendList = ({ friends } ) => {

  return (
    <section className={css.friends}>
      <ul className={css.list}>
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