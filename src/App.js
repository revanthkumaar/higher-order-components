import logo from './logo.svg';
import './App.css';
import UserProfile from './components/user-profile/user-profile.component'
import './App.scss';

import UserList from './components/user-list/user-list.component';

function App() {
  return (
    <div className="App">
     <UserProfile name='revanth' email='revnahtada'/>
     <UserList name='revanth' email='revnahtada'/>
    </div>
  );
}

export default App;
