import { useState } from 'react'
import Item from "./Item"
import "./ItemListContainer.css"

const categories = {
    CAMISAS: "camisas",
    PANTALONES: "pantalones",
    ZAPATILLAS: "zapatillas"
}


function ItemList({ items }) {
    const [ selectedCategory, setSelectedCategory ] = useState("")
    
    if ( !items || !Array.isArray( items )) {
        return <p>Cargando productos...</p>
    }

    const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : items;

    return (
        <div>
            <div className='sdada'>
                <button onClick={() => setSelectedCategory(categories.CAMISAS)}>
                    Camisas piolas
                </button>
                <button onClick={() => setSelectedCategory(categories.PANTALONES)}>
                    Pantalones piolas
                </button>
                <button onClick={() => setSelectedCategory(categories.ZAPATILLAS)}>
                    Zapatillas piolas
                </button>
            </div>

            <div id='container-grid'>
                {filteredItems.map(item => (
                    <Item
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        category={item.category}  
                        name={item.name}
                        price={item.price}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default ItemList