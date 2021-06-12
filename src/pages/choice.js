import './home.css'
import React, { useContext, useEffect, useState } from 'react';
import { GlobalQuestionStoreContext } from '../context/store';
import { Card, Button, Container, Form, Radio, List } from 'semantic-ui-react'
import { useHistory } from 'react-router'


const CreateChoice = () => {
    const history = useHistory();
    const { createQuiz, changeQuizData,  addChoiceToQuestion } = useContext(GlobalQuestionStoreContext);
    const [choice, setChoice] = useState();
    const [finalState, setFinalState] = useState([]);



    const handleChange = (e) => {
        setChoice({
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        setFinalState([
            ...finalState,
            choice
        ])
    }


    useEffect(() => {
        // console.log(createQuiz);
        console.log(finalState);
    }, [finalState]);


    return (
        <div style={{
            width: "100vw",
            position: 'absolute',
            top: '10%',
            left: '25%'
        }}>
                <Container fluid>
                    <Card.Group fluid >
                        <Card style={{width: "50%"}}>
                            <Card.Content>
                                <Card.Header>Add a Choice</Card.Header>
                                <Form className='left'>
                                <Form.Field>
                                        <label>{createQuiz.questions.question}</label>
                                        
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Write Choice</label>
                                        <input name='choice'  onChange={handleChange}/>
                                    </Form.Field>
                                   

                                    <Form.Group>
                                        <Form.TextArea>
                                        </Form.TextArea>
                                        <Button onClick={handleSubmit}>Add Choice</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Content>
                            <Card.Content extra>
                                <div>
                                    <Button.Group floated='right'>
                                        <Button floated='right' basic color='red'>Cancel</Button>
                                        <Button.Or />
                                        <Button floated='right' positive onClick={() => {
                                            // history.push("/")
                                            addChoiceToQuestion(finalState);
                                        }}>Create</Button>
                                    </Button.Group>
                                </div>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Container>
                </div>
    )
}
export default CreateChoice;