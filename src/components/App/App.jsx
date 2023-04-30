import data from '../Statistics/data.json';
import user from '../Profile/user.json';
import friends from '../FriendList/friends.json'
import transactions from '../TransactionHistory/transactions.json'

import Profile from '../Profile/Profile';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory'

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>

      <Section title="Task 1 'Profile'">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />      
      </Section>

      <Section title="Task 2 'Statistics'">
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Section>

      <Section title="Task 3 'Friends List'">
        <FriendList friends={friends} />
      </Section>

      <Section title="Task 4 'Transaction History'">
      <TransactionHistory items={transactions} />
      </Section>
    </Container>
  );   
};
