import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from "styled-components";



export default function Home() {
    return (
        <Container>
            <div className="container">
                <div className="main">
                    <h1>
                        Class 9 Guide
                    </h1>
                </div>
                <div className="card mx-auto">
                    <Card>
                        <Card.Body>
                            <Card.Title>Chat App</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Private Chat Application</Card.Subtitle>
                            <Card.Text>
                                Our chat app is user-to-user encrypted.
                            </Card.Text>
                            <Card.Link href='https://school-chat-app-vibe.netlify.app/'>Click Here</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="chat-app">

                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`

.main{
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    width: 18rem;
}

`;