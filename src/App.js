import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => <Dialogs stateDialogs = {props.state.DialogPage} />}/>
          <Route path='/profile' render={ () => <Profile stateProfile = {props.state.ProfilePage} />}/>
          <Route path='/news' component={News}/>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
