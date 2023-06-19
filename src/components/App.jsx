import { Profile } from "./Profile";
import User from '../data/user.json';

import { Statistics } from "./Statistics";
import data from '../data/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={User.username}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        stats={User.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

    </div>
  );
};
