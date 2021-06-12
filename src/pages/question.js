import './home.css'
import React, { useContext, useEffect, useState } from 'react';
import { GlobalQuestionStoreContext } from '../context/store';
import 'semantic-ui-css/semantic.min.css'
import { Card, Button, Container, Form, Radio, List, Label } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import { InputGroup } from 'react-bootstrap';



const CreateQuestion = () => {
    const { createQuiz, changeQuizData, addQuestion } = useContext(GlobalQuestionStoreContext);
    const [question, setQuestion] = useState({
        question: '',
        questionType: '',
        totalPointperquestion: ''
    });

    const handleChange = (e) => {
        setQuestion({
            ...question,
            [e.target.name]: e.target.value
        });
    }


    useEffect(() => {
        console.log(question);
    }, [question])

    const handleSubmit = () => {
        addQuestion(question);
    }

    const history = useHistory();

    useEffect(() => {
        console.log(createQuiz);
    }, [createQuiz]);

    return (
        <div style={{
            width: "100vw",
            position: 'absolute',
            top: '10%',
            left: '25%'
        }}>
            <Container fluid>
                <Card.Group fluid >
                    <Card style={{ width: "50%" }}>
                        <Card.Content>
                            <Card.Header>Add a Question</Card.Header>
                            <Form className='left'>
                                <Form.Field>
                                    <label>Write Question</label>
                                    <input name='question' onChange={handleChange} />
                                </Form.Field>
                                <Form.Group widths='equal'>
                                    <Form.Field>
                                        <InputGroup>
                                            <List>
                                                <label className='component-margin-left'>Single Choice</label>
                                                <input type='radio' className='component-margin-left' value='single' name='questionType' onChange={handleChange} />

                                                <label className='component-margin-left'>Multiple Choice</label>
                                                <input type='radio' className='component-margin-left' value='multiple' name='questionType' onChange={handleChange} />
                                            </List>
                                        </InputGroup>
                                    </Form.Field>

                                    <Form.Field fluid>
                                        <label>Question Points</label>
                                        <input name='totalPointperquestion' onChange={handleChange} />
                                    </Form.Field>
                                </Form.Group>
                                <Form.Field>
                                    <Button floated='right' basic color='red' onClick={() => {
                                        handleSubmit();
                                        history.push("/choice");
                                    }}>Add Choice</Button>
                                </Form.Field>
                            </Form>
                        </Card.Content>
                        <Card.Content extra>
                            <div>
                                <Button.Group floated='right'>
                                    <Button floated='right' basic color='red'>Cancel</Button>
                                    <Button.Or />
                                    <Button floated='right' positive>Create</Button>
                                </Button.Group>
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Container>
        </div>
    );
}

export default CreateQuestion;
