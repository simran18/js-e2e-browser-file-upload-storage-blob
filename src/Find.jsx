import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button, Image } from 'react-bootstrap';
import body_image from "./images/form-body-selection.png";
import InteractiveImage from "./InteractiveImage";

function Find() {
    const [value, setValue] = React.useState(0);
    
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
                                    value={value}
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
                            <Form.Check label="Asthma" />
                            <Form.Check label="Back pain" />
                            <Form.Check label="Carpal tunnel syndrome" />
                        </Col>
                        <Col>
                            <Form.Check label="Digestion" />
                            <Form.Check label="Fatigue" />
                            <Form.Check label="Fitness" />
                        </Col>
                        <Col>
                            <Form.Check label="Flexibility" />
                            <Form.Check label="Headaches" />
                            <Form.Check label="High blood pressure" />
                        </Col>
                        <Col>
                            <Form.Check label="Insomnia" />
                            <Form.Check label="Menopause" />
                            <Form.Check label="Menstruation" />
                        </Col>
                        <Col>
                            <Form.Check label="Neck pain" />
                            <Form.Check label="Osteoporosis" />
                            <Form.Check label="Pregnancy" />
                        </Col>
                        <Col>
                            <Form.Check label="Balance" />
                            <Form.Check label="Sciatica" />
                            <Form.Check label="Flat feet" />
                        </Col>
                    </Row>
                    <Row>
                        <h6 class="text-primary"> Mental Health </h6>
                        <Col>
                            <Form.Check label="Anxiety" />
                            <Form.Check label="Calm" />
                            <Form.Check label="Confidence" />
                            <Form.Check label="Depression" />

                        </Col>
                        <Col>
                            <Form.Check label="Energy" />
                            <Form.Check label="Stress" />
                            <Form.Check label="Focus" />
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