import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from 'react-bootstrap';
import InteractiveImage from "./InteractiveImage";

function Find() {
    const [setValue] = React.useState(0);
    
        const URL =
          "http://www.shapesense.com/images/blank-muscle-anatomy.jpg";
    
    return (
        <div>
            <br />
            <h2>Find the PERFECT yoga session for YOU!</h2>
            <Form>
                <Form.Group>
                    <Form.Label>
                        How much time do you have?
                    </Form.Label>
                    <Form.Group>
                        <Row>
                            <Form.Label column="sm" lg={1}>
                                0 mins
                            </Form.Label>
                            <Col>
                                <Form.Range
                                    value={60}
                                    onChange={e => setValue(e.target.value)}
                                    tooltip='on'
                                />
                            </Col>
                            <Form.Label column="sm" lg={2}>
                                90 mins
                            </Form.Label>
                        </Row>
                    </Form.Group>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column> Please select Health Benefits you would like to prioritize today </Form.Label>
                </Form.Group>
                <Form.Group controlId="formHorizontalCheck" class="p-3 mb-2 bg-light text-dark">
                    <Row>
                        <h6 class="text-primary"> Physical Health </h6>
                        <Col>

                            <Form.Check label="Back pain" />
                            <Form.Check label="Balance" />
                            <Form.Check label="Digestion" />
                            <Form.Check label="Fitness-Strength" />
                        </Col>
                        <Col>
                            <Form.Check label="Flexibility" />
                            <Form.Check label="Insomnia" />
                            <Form.Check label="Menstruation" />
                            
                        </Col>
                        <Col>
                            <Form.Check label="Pregnancy" />
                            <Form.Check label="Flat feet" />
                            <Form.Check label="Core Strength" />
                        </Col>
                    </Row>
                    <Row>
                        <h6 class="text-primary"> Mental Health </h6>
                        <Col>                        
                            <Form.Check label="Calming" />
                            <Form.Check label="Energy" />
                        </Col>
                        <Col>
                            <Form.Check label="Focus" />
                            <Form.Check label="Stress" />
                        </Col>
                        <Col></Col>
                        <Col> </Col>
                    </Row>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column> Please select the muscle group you would like to practice today. </Form.Label>
                    <Row xs={6} md={4}>
                         <InteractiveImage URL={URL} />
                     </Row>
                </Form.Group>
                <br />
                <br />
                <Form.Group as={Row}>
                    <Col sm={{ span: 10 }}>
                        <Button type="submit" variant="outline-primary" href="/practice">I'm ready to get started!</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Find;