import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from "./Home";
import Products from "./Products";

function App() {
  return (
    <div>
      {/* The unordered list below could also be a navigation bar */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
    </div>
  );
}

export default App;
