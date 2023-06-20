import "../css/friendList.css"

const isOnlineShow = (isOnline) => {
  if (!isOnline) {
    return <span class="status" style={{backgroundColor: 'red'} }></span>  
  }
  
  return <span class="status" style={{ backgroundColor: 'green' }}></span>  
  
}

const friendsShow = (friends) =>
  friends.map(({ id, isOnline, name, avatar }) => 
      <li class="item-friends" id={id}>
          { isOnlineShow(isOnline) }
          <img class="avatar" src={ avatar } alt="User avatar" width="48" />
          <p class="name">{ name }</p>
      </li>)


export const FriendList = ({ friends } ) => {

  return (
    <section class="friends">
      <ul class="list-friends">
        { friendsShow(friends) }
      </ul>
    </section>   
  );
}