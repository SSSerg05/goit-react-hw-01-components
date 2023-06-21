import css from '../FriendList.module.css'

export const ItemFriends = ({ id, isOnline, name, avatar }) => {
  return (
    <li className={css.item} key={id}>
      <span className={css.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  )
}