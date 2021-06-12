import './home.css'
import React, { useContext, useEffect, useState } from 'react';
import { GlobalQuestionStoreContext } from '../context/store';
import { Card, Button, Container, Form, Radio, List, Table, Icon } from 'semantic-ui-react'
import { useHistory } from 'react-router'


const CreateChoice = () => {
    const history = useHistory();
    const { createQuiz, changeQuizData, addChoiceToQuestion, addQuestion } = useContext(GlobalQuestionStoreContext);
    const [choice, setChoice] = useState({
        correctOption: null
    });
    const [finalState, setFinalState] = useState([]);



    const handleChange = (e) => {
        setChoice({
            ...choice,
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
                    <Card style={{ width: "50%" }}>
                        <Card.Content>
                            <Card.Header>Add a Choice</Card.Header>
                            <Form className='left'>

                                <Form.Field>
                                    <label>Write Choice</label>
                                    <input name='choice' onChange={handleChange} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Correct Option</label>
                                    <input name='correctOption' onChange={handleChange} />
                                </Form.Field>
                                <Form.Group>
                                    <Table color='red'>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Choices</Table.HeaderCell>
                                                <Table.HeaderCell>Actions</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell>
                                                        {console.log(choice)}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <Button icon>
                                                            <Icon name='edit' />
                                                        </Button>
                                                        <Button icon>
                                                            <Icon name='delete' />
                                                        </Button>
                                                    </Table.Cell>
                                                </Table.Row>
                                        </Table.Body>
                                    </Table>

                                </Form.Group>

                                <Form.Field>
                                    <Button floated='right' basic color='red' onClick={handleSubmit}>Add Choice</Button>
                                    <Button floated='right' basic color='red' onClick={() => {
                                        history.push("/")
                                    }}>Add Question</Button>
                                </Form.Field>

                            </Form>
                        </Card.Content>
                        <Card.Content extra>
                            <div>
                                <Button.Group floated='right'>
                                    <Button floated='right' basic color='red'>Cancel</Button>
                                    <Button.Or />
                                    <Button floated='right' positive onClick={() => {
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