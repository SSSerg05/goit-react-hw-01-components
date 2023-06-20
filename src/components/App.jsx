// 1-task. User + Profile
import { Profile } from "./Profile";
import User from '../data/user.json';

// 2-task. Data + Statistics
import { Statistics } from "./Statistics";
import Data from '../data/data.json';

// 3-task. Friends + FriendList
import { FriendList } from "./FriendList"
import Friends from '../data/friends.json';

// 4-task. Data + Statistics
import { TransactionHistory } from "./TransactionHistory"
import Transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* 1-task */}
      <Profile
        username={User.username}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        stats={User.stats}
      />

      {/* 2-task */}
      <Statistics title="Upload stats" stats={Data} />
      <Statistics stats={Data} />

      {/* 3-task */}
      <FriendList friends={Friends} />
      
      {/* 4-task */}
      <TransactionHistory items={Transactions} />;

    </div>
  );
};
