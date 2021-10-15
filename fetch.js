

function Pokemon (){
    useEffect(() => {
        fetchItems();
    }, []);
    
    const [item, setItem] = useState ({});

    const fetchItems = async () => {
        const data = await fetch(
            'https://pokeapi.co/api/v2/pokemon/?limit=10'
        );
    
        const items = await data.json();
        console.log(items.items);
        setItems(items,items);
        };

        return (
            <div>
                {items.map(item => (
                    <h1 key={itElement.itemid}>
                        <Link to={`/pokemon/${item.itemid}`}>{item.name}</Link>
                    </h1>
                ))}
            </div>
        );
   
}