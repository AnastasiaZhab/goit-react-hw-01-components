import logo from './logo.svg';
import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics'
import './App.css';
import user from '../src/user.json'
import data from '../src/data.json'

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
        <Statistics
        title={data}
        stats={data}
        />
    </div>
  
  );
}

export default App;
