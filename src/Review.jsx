
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup, Card, Accordion, Image } from "react-bootstrap";
import review_video from "./images/practice-video1.png";
import connected_data1 from "./images/connected-sun-data1.png";
import connected_data2 from "./images/connected-sun-image2.png";
import foundation_pavel from "./images/foundation-pavel.png";


function Review() {
  function CardDisplay() {
    return (
      <CardGroup>
        <Card>
        <Card.Img variant="top" src={review_video} />
        <Card.Body>
          <Card.Title>Session 1 </Card.Title>
        </Card.Body>
        <Card.Footer>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Find Out More</Accordion.Header>
            <Accordion.Body>
              <ul>
              <li> Session Date: 20th Oct, 2021</li>
              <li> Session Duration: 15 mins</li>
              <li> Session Health Benefits: Spine extender, deltoid, Glute muscles, Quadricepts, triceps.</li>
              <Image src={connected_data1} rounded fluid/>
                <Image src={connected_data2} rounded fluid/>
             </ul>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={foundation_pavel} />
        <Card.Body>
          <Card.Title>Session 2</Card.Title>
        </Card.Body>
        <Card.Footer>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Find Out More</Accordion.Header>
            <Accordion.Body>
            <ul>
              <li> Session Date: 10th Oct, 2021</li>
              <li> Session Duration: 10 mins</li>
              <li> Session Health Benefits: Spine extender, deltoid, Glute muscles, Quadricepts, triceps.</li>
             </ul>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
        </Card.Footer>
      </Card>
      </CardGroup>
    );
  }


    return (
    
      <div >
        <h2>Review My Sessions</h2>
        <p> To upload a new session, <a href="https://blue-bay-08015c010.azurestaticapps.net"> click here</a> </p>
        <h3> Here are your past sessions </h3>
        <CardDisplay />
      </div>
    );
  }

  export default Review;