import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';



function Homepage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
    const fetchPage = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=10')
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
        <br />
        <h1>Welcome Back</h1>
        <br />
            <Container>
                <Row sm={1}>    
            
                {
                    products.map(product => (
                        <Col sm={6}>
                        <Card key={product.id} className="flex-wrap justify-content-center d-flex" >
                            <Card.Img className='cardImg' variant="top" src={product.image} />
                            <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Title>{`$${product.price}`}</Card.Title>
                                    {/*<Card.Text>{product.description}</Card.Text>*/}
                            </Card.Body>
                      </Card>
                      </Col>
                    ))
                }
            
          
            </Row>
        </Container>
    </div>
    )
};

export default Homepage;