import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'


const Jewelery = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
    const fetchItems = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
            const data = await response.json();

            if (!response.ok) {
                throw new Error('Error fetching category')
            }
            console.log(data)
            setItems(data)

        } catch (error) {
            console.log("Error", error)
        }
    } 
        fetchItems();
    }, [])

    return (
        <Container>
            <Row className="g-0">
            <Col md={6}>
            {
                items.map(item => (
                    <Card key={item.id}>
                        <Card.Img src={item.image} alt={item.title} />
                        <br />
                        {item.title} - {item.price}
                        <br />
                        {item.description}
                    </Card>
                ))
            }
            </Col>
            </Row>
        </Container>
    )
};

export default Jewelery;