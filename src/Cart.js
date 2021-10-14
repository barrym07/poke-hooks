import { Route, Link, useRouteMatch } from 'react-router-dom';
import Checkout from './Checkout';

function Cart() {
  let match = useRouteMatch();
  return (
    <div>
      <p>It would appear that because we don't actually have anything to sell the cart isn't working.</p>

      <Link to={`${match.url}/checkout`}>Checkout</Link>
      <Route path={`${match.path}/checkout`} component={Checkout} />
    </div>
  )
}

export default Cart;

