import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from "../features/CartSlice";


function Products() {
    const [products, setProducts] = useState([])
    const [query, setQuery] = useState('')
    const dispath = useDispatch();
    const { id } = useParams();

    useEffect(() => {
    const fetchPage = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
            if (!response.ok) {
                throw new Error('Network response was not ok');
        } else {
            console.log(data);
            return data
            }
        } catch (error) {
            console.log('Error:', error)

        } 
    };

        fetchPage();
    }, []);



    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };


    const filteredProducts = products.filter(product => (
            product.title.toLowerCase().includes(query.toLowerCase())
            //product.price.toLowerCase().includes(query.toLowerCase())
        ));
    
    const handleAddToCart = (id) => {
        dispath(addToCart(id))
    }


    return (
        <div>
            <Container className="products">
            <Form.Group>
                    <Form.Control 
                        controlId='formSearch'
                        type='text'
                        placeholder='Search'
                        aria-label='formSearchLabel'
                        value={query}
                        onChange={handleQueryChange} />
                </Form.Group>
                <br />

                <DropdownButton id="dropdown-button" title="Categories" className="dropdown">
                    <Dropdown.Item href="/products/categories/electronics">Electronics</Dropdown.Item>
                    <Dropdown.Item href="/products/categories/jewelry">Jewelery</Dropdown.Item>
                    <Dropdown.Item href="/products/categories/mensclothing">Men's Clothing</Dropdown.Item>
                    <Dropdown.Item href="/products/categories/womensclothing">Women's Clothing</Dropdown.Item>
                </DropdownButton>
                <br />

                
                <ul> 
                {
                    filteredProducts.map(product => (
                        <li key={product.id} id="noDecor">
                        <img src={product.image} alt={product.title} width={100} height={100} />
                        <br />
                        <p>
                        {`$${product.price}`}
                        </p>
                        {product.title}
                        <p>
                        {product.description}
                        </p>
                        <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                        </li>   
                    )) 
                } 
                </ul>
        </Container>
        </div>
    )
};

export default Products;