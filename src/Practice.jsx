import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Accordion} from "react-bootstrap";
import DWChart from "react-datawrapper-chart";
import ReactPlayer from "react-player";

function CardDisplay() {
  
  return (
    <div>
      <Card >
       <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url="https://www.youtube.com/embed/npMDGKAw0tU"
      />
    </div>
        <Card.Body>
          <Card.Title>Connected To The Sun </Card.Title>
          <Card.Text>
            Please join this beginner-level 90-minute yoga session with instructor Pavel to improve the state of your body and mind. 
            {" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Find Out More</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li> Instructor: Pavel Dmitriev</li>
                <li> Primary  health benefits  of this practice include (but are not limited to) helping with insomnia, sciatica, depression, asthma,  anxiety. </li>
                <li> Main focus of this session is on the following muscle groups: Spine extender, deltoid, Glute muscles, Quadricepts, triceps. </li>
                <DWChart title="Map" src="https://datawrapper.dwcdn.net/7sbcj/1/" />
             </ul>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
        </Card.Footer>
      </Card>
      <Card>
      <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url="https://www.youtube.com/embed/npMDGKAw0tU"
      />
    </div>
        <Card.Body>
          <Card.Title>Connected To The Sun </Card.Title>
          <Card.Text>
            Please join this beginner-level 90-minute yoga session with instructor Pavel to improve the state of your body and mind. 
            {" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Find Out More</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li> Instructor: Pavel Dmitriev</li>
                <li> Primary  health benefits  of this practice include (but are not limited to) helping with insomnia, sciatica, depression, asthma,  anxiety. </li>
                <li> Main focus of this session is on the following muscle groups: Spine extender, deltoid, Glute muscles, Quadricepts, triceps. </li>
                <DWChart title="Map" src="https://datawrapper.dwcdn.net/7sbcj/1/" />
             </ul>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
        </Card.Footer>
      </Card>

      <Card>
      <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url="https://www.youtube.com/embed/npMDGKAw0tU"
      />
    </div>
        <Card.Body>
          <Card.Title>Connected To The Sun </Card.Title>
          <Card.Text>
            Please join this beginner-level 90-minute yoga session with instructor Pavel to improve the state of your body and mind. 
            {" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Find Out More</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li> Instructor: Pavel Dmitriev</li>
                <li> Primary  health benefits  of this practice include (but are not limited to) helping with insomnia, sciatica, depression, asthma,  anxiety. </li>
                <li> Main focus of this session is on the following muscle groups: Spine extender, deltoid, Glute muscles, Quadricepts, triceps. </li>
                <DWChart title="Map" src="https://datawrapper.dwcdn.net/7sbcj/1/" />
             </ul>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
        </Card.Footer>
      </Card>


      </div>
    
  );
}


function Practice() {
  return (
    <div>
      <div >
        <div >
          <div >
            <h2 >Practice</h2>
            <p>
              Practice yoga anywhere, anytime with personalized yoga sessions. It’s yoga every day with some of the world's best teachers and guides. 
              Roll out your mat and choose your style, amount of time you have to practice, your teacher and level to get <a href="/find">started</a>.
              No matter where you are in your yoga journey, beginner to advanced, we have a session for you!
            </p>
            <CardDisplay />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practice;