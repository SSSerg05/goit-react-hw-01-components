import css from '../FriendList.module.css'

export const friendsShow = (friends) =>
  friends.map(({ id, isOnline, name, avatar }) => 
    <li className={css.item} key={id}>
      <span className={css.status} style={ {backgroundColor: isOnline ? 'green':'red'} }></span>
      <img className={css.avatar} src={ avatar } alt="User avatar" width="48" />
      <p className={css.name}>{ name }</p>
    </li>)