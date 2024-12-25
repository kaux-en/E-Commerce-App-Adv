import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';



function Homepage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
    const fetchPage = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=5')
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
    


    return (
        <div>
        <h1>Welcome Back</h1>

        <Row>
            <Col fluid-md={2} className="d-flex">
            
                {
                    products.map(product => (
                        <Card key={product.id} style={{ width: '15rem' }} className="flex-fill">
                            <Card.Img className='cardImg' variant="top" src={product.image} />
                            <Card.Body>
                            <Card.Title>
                                {product.title} <br /><br />
                                {`$${product.price}`}
                            </Card.Title>
                            <Card.Text>
                            {product.description}
                            </Card.Text>
                        </Card.Body>
                      </Card>
                    ))
                }
            
            </Col>
        </Row>
        </div>
    )
};

export default Homepage;