import React from 'react'
import Item from '../ItemListContainer/Item'
import TextilProducts from '../../data/products'
import './FeaturedProductsSection.css'

function FeaturedProductsSection() {

    const featuredProductsIds = [1, 2, 5, 6, 9, 10 ]

    const featuredItems = TextilProducts.filter(product => featuredProductsIds.includes(product.id)
    )

    return (
        <section className="featured-section">
            <h2 className="featured-title">[[Productos destacados]]</h2>
            <div className="featured-grid">
                {featuredItems.map(item => (
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
        </section>
    )
}

export default FeaturedProductsSection