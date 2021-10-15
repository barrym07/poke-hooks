;import { Route, Link, useRouteMatch } from 'react-router-dom';
import Product1 from "./Product1"
import Product2 from "./Product2"

function Pokemon(pokeList) {
  let match = useRouteMatch()
  return (
    <div>
      <p>Khajiit has wares, if you have coin.</p>
      <ul>
        <li><Link to={`${match.url}/product1`}>Product 1</Link></li>
        {/* possibly map over pokelist */}
        
      </ul>
      
 {/* Can you guys see this???? 
very
fetch.js

it would have to be inputed into here and if the fetch is working, it will already render the poken on here

just have to change the variable to the correct attribute names from the api
i think poken api does id.id   id.id.name, etc */}

i may dable with it tonight a bit to try to get ahead

      <Route path={`${match.path}/product1`} component={Product1} />
      
    </div>
  )
}
export default Pokemon;


// <li><Link to={`${match.url}/product1`}>Product 1</Link></li>
// <li><Link to={`${match.url}/product2`}>Product 2</Link></li>
// </ul>



// <Route path={`${match.path}/product1`} component={Product1} />
// <Route path={`${match.path}/product2`} component={Product2} />