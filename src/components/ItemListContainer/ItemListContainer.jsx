import { useEffect, useState } from "react";
import ItemList from "./ItemList";

import TextilProducts from "../../data/products"
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
    // Simulación de carga asincrónica
    const fetchData = async () => {
        try {
        // simulación con un delay
        const data = await new Promise((resolve) =>
            setTimeout(() => resolve(TextilProducts), 500)
        );
        setItems(data);
        } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
};

    fetchData();
    }, []);

    return (
    <ItemList items={items} />    
    ) 
    
};


export default ItemListContainer