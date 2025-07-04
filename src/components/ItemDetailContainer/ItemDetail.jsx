// import TextilProducts from "../../data/products";

// import { useParams } from "react-router-dom";

// function Detail() {

//     const {id} = useParams()

//     console.log(id);

//     const product = TextilProducts.find(prod => prod.id === id)

//     if(!product) {
//         return <h2>El producto seleccionado no existe</h2>
//     }

//     return (
//         <div>
//             <h2>Detales del producto</h2>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <h3>{product.price}</h3>
//         </div>
//     )
// }

// export default Detail

import TextilProducts from "../../data/products";
import { useParams } from "react-router-dom";

function Detail() {

    const { id } = useParams();
    console.log("ID desde URL:", id);
    console.log("Productos:", TextilProducts);

    const product = TextilProducts.find(prod => prod.id == id); // importante: usar ==

    if (!product) {
    return <h2>El producto seleccionado no existe</h2>;
    }

    return (
        <div>
            <h2>Detalles del producto</h2>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h4>Precio: ${product.price}</h4>
        </div>
    );
}

export default Detail;
