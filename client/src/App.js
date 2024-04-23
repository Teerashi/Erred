import {Switch, Route, Link} from 'react-router-dom';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import RegistrationPage from './pages/Registration';
import {useState} from 'react'
import UserContext from './contexts/userContext';
import UsersPage from './pages/Users';



const userMockdData = {
    id: 1,
    firstName: 'User',
    lastName: 'Userenko',
    email: 'user@user.com',
    password: '1234user',
    isMale: true
}

function App() {

  const [user, setUser] = useState({userMockdData})
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/registration' component={RegistrationPage}/>
        <Route path='/profile' component={ProfilePage}/>
        <Route path='/users' component={UsersPage}/>
      </Switch>
    </UserContext.Provider>
  );
}

export default App;