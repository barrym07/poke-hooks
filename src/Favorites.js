// import {React, useState, useEffect} from "react"
// import {Link} from 'react-router-dom';

// function Favorites (favorite){
//     const [favorites, setFavorites] = useState([])
//     useEffect(() => {
     
//       getFavorites(pokemon);
//       console.log("fav favs",favorites)
      
//    }, []);    
//    const getFavorites  = (pokemon) => {
//     setFavorites ();
// }
   

    
// return(
//     <div>
//             <form onSubmit={getFavorites(name)}>
//       <div>
//         <label>Favorite Pokemon Name</label>      
        
//         <input type="text" name="pokemon" value={name}required />
//       </div>
    
//       <button type="submit">Add to Favorites</button>
//     </form>
//         {favorites.map(favorite => (
//         <h1>
//             <Link to={`/characters/${favorite}`}>{favorite}</Link>
//         </h1>
//     ))}</div>
// )
    
// }

// export default Favorites;