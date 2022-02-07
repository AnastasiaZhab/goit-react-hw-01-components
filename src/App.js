import Profile from './components/Profile'
import Statistics from './components/Statistics'
import FriendList from './components/FriendList/Friendlist';
import TransactionHistory from './components/Transaction/TransactionHistory';
import './App.css';
import user from './data/user.json'
import data from './data/data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'
import './App.css'

function App() {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
        <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory transactions={transactions} />;
        
    </div>
  
  );
}

export default App;
