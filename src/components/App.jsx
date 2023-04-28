import data from './data.json';
import user from './user.json';
import friends from './friends.json'
import transactions from './transactions'

import Profile from './Profile';
import Section from './Section';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory'

export const App = () => {
  return (
    <div>
      {/* style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }} */}

      <Section title="Task 1">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />      
      </Section>

      <Section title="Task 2">
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Section>

      <Section title="Task 3">
        <FriendList friends={friends} />;
      </Section>

      <Section title="Task 4">
      <TransactionHistory items={transactions} />;
      </Section>
    </div>
  );   
};
