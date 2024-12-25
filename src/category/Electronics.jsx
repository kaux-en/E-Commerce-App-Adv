import React, { useEffect, useState } from "react";


const Electronics = () => {
    const [items, setItems] = useState([])

    useEffect(() => { 
    const fetchItems = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/category/electronics');
            const data = await response.json();

            if (!response.ok) {
                throw new Error('Error fetching category')
            }
            console.log(data)
            setItems(data)

        } catch (error) {
            console.log("Error", error)
        }
    }; 
    
        fetchItems();
    }, [])

    return (
        <div>
            <ul>
            {
                items.map(item => (
                    <li key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <br />
                        {item.title} - {item.price}
                        <br />
                        {item.description}
                    </li>
                ))
            }
            </ul>
        </div>
    )
};


export default Electronics;