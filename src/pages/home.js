import './home.css'
import React, { useContext, useState, useEffect } from 'react';
import { GlobalQuestionStoreContext } from '../context/store';
import { Card, Button, Container, Form, Table, Icon } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';


const CreateQuiz = () => {

    const { changeQuizData, createQuiz } = useContext(GlobalQuestionStoreContext);
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        console.log(createQuiz);
    }, []);


    const dateChanger = (date) => {
        setStartDate(date)
    }

    const postData = async () => {

        try {
            let result = await fetch('https://webhook.site/7559e1f8-173d-4982-be60-a74560b38667', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(createQuiz)
            });

            console.log('Result', result);
        } catch (e) {
            console.log(e);
        }
    }



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
                            <Card.Header>Create a quiz</Card.Header>
                            <Form className='left'>
                                <Form.Field>
                                    <label>Quiz Title</label>
                                    <input name='title' value={createQuiz.title} onChange={changeQuizData} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Total Points</label>
                                    <input name='totalPoints' value={createQuiz.totalPoints} onChange={changeQuizData} />
                                </Form.Field>
                                <Form.Group widths='equal'>
                                    <Form.Field fluid>
                                        <label>Time Allowed (Minutes)</label>
                                        <input name='timeAllowed' value={createQuiz.timeAllowed} onChange={changeQuizData} />
                                    </Form.Field>
                                    <Form.Field fluid>
                                        <label>Deadline</label>
                                        <input type='date' name='deadline' value={createQuiz.deadline} onChange={changeQuizData} />
                                    </Form.Field>
                                </Form.Group>
                                <Form.Group>
                                    <Table color='red'>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Questions</Table.HeaderCell>
                                                <Table.HeaderCell>Type</Table.HeaderCell>
                                                <Table.HeaderCell>Action</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            <Table.Row>

                                                <Table.Cell>
                                                    {createQuiz.question}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {createQuiz.questionType}
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
                                    <Button floated='right' basic color='red' onClick={() => history.push("/question")}>Add Question</Button>
                                </Form.Field>
                            </Form>
                        </Card.Content>
                        <Card.Content extra>
                            <div>
                                <Button.Group floated='right'>
                                    <Button floated='right' basic color='red'>Cancel</Button>
                                    <Button.Or />
                                    <Button floated='right' positive onClick={postData}>Create</Button>
                                </Button.Group>
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Container>
        </div>
    );
}

export default CreateQuiz;