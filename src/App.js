import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => <DialogsContainer />}/>
          <Route path='/profile' render={ () => <Profile />}/>
          <Route path='/users' render={ () => <UsersContainer />}/>
          <Route path='/news' component={News}/>
        </div>
        <Footer />
      </div>
    );
}

export default App;
