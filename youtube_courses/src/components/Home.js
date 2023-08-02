import React, { useEffect } from "react";
import {Container,Button} from "reactstrap";

const Home=()=>{
    useEffect(()=>{
        document.title="Home || Learn Code with Marar";
    },[]);
    return (
        <div className="p-3 text-center text-white bg-secondary"> 
            <h1>Learn Code with Marar</h1>
            <p>This is a learning platform for beginners. Front end using React Js and backend using Spring Boot.</p>
            <Container>
                <Button color="outline-primary">Start Using</Button>
            </Container>
        </div>
    )
}

export default Home;