import logo from './logo.svg';
import './App.css';
import Company from './components/Company/Company';
import Counter from './components/Counter/Counter';
import Movies from './Container/Movies/Movies';
import Todos from './components/Todos/Todos';
import Users from './components/Users/Users';

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
        <hr />
        <Company name="Cognizant Technology Solution" />
        <Counter />
        <hr />
        <Movies info={movieInfo} />
        <Todos />
        <hr />
        <Users />
      </header>
    </div>
  );
}

export default App;
