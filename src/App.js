
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";

function App() {
  return (
    <div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;
