import logo from './logo.svg';
import './App.css';
import Company from './components/Company/Company';
import Counter from './components/Counter/Counter';

function App() {
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
      </header>
    </div>
  );
}

export default App;
