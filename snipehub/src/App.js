import logo from './logo.svg';
import './App.css';
import AuthRoute from './components/AuthRoute';
import { BrowserRouter } from 'react-router-dom';
// import LandingPage from './components/landingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <AuthRoute/>



  </BrowserRouter>

  );
}

export default App;
