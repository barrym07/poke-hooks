import { Route, Link, useRouteMatch } from 'react-router-dom';
import Product1 from "./Product1"
import Product2 from "./Product2"

function Products() {
  let match = useRouteMatch()
  return (
    <div>
      <p>Khajiit has wares, if you have coin.</p>
      <ul>
        <li><Link to={`${match.url}/product1`}>Product 1</Link></li>
        <li><Link to={`${match.url}/product2`}>Product 2</Link></li>
      </ul>



      <Route path={`${match.path}/product1`} component={Product1} />
      <Route path={`${match.path}/product2`} component={Product2} />
    </div>
  )
}
export default Products;