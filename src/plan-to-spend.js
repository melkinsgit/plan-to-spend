import logo from './logo.svg';
import './plan-to-spend.css';

function PlanToSpend() {
  return (
    <div className="plan-to-spend">
      <header className="plan-to-spend-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/PlanToSpend.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default PlanToSpend;
