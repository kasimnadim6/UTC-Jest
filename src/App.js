import logo from './logo.svg';
import './App.css';
import Company from './components/Company/Company';
import Counter from './components/Counter/Counter';
import Movies from './Container/Movies/Movies';
import Todos from './components/Todos/Todos';
import Users from './components/Users/Users';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

function App() {
  const movieInfo = {
    id: 1,
    name: 'Wanted',
    url: 'https://www.imdb.com/title/tt0493464/mediaviewer/rm1082512384',
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Unit Testing using Jest & Enzyme
        </a>
        <div className="line"></div>

        <Company name="Cognizant Technology Solution" />
        <div className="line"></div>

        <Counter />
        <div className="line"></div>

        <Movies info={movieInfo} />
        <div className="line"></div>

        <Todos />
        <div className="line"></div>

        <Users />
        <div className="line"></div>

        <ThemeSwitcher />
        <div className="line"></div>
      </header>
    </div>
  );
}

export default App;
