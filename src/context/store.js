import React, { createContext, useState, useEffect } from 'react';
import CreateChoice from '../pages/choice';


const GlobalQuestionStoreContext = createContext({
    setCreateQuiz: () => { }
})

const GlobalQuestionnStoreProvider = (props) => {
    const [createQuiz, setCreateQuiz] = useState({
        title: '', totalPoints: '', timeAllowed: '', deadline: '', questions:[],
        totalPointperquestion: ''
    });
    
    function changeQuizData(e) {
        setCreateQuiz({ ...createQuiz, [e.target.name]: e.target.value });
    }

    const addQuestion = (e) => {
        setCreateQuiz({...createQuiz, questions: [
            ...createQuiz.questions,
            {...e}
        ]})
    }

    const addChoiceToQuestion = (choices) => {
        console.log(createQuiz.questions)
        createQuiz.questions[createQuiz.questions.length - 1].choices = [];
        createQuiz.questions[createQuiz.questions.length - 1].choices.push(choices);
    }

    useEffect(() => {
        console.log(createQuiz.questions)
    }, [createQuiz.questions])

    return <GlobalQuestionStoreContext.Provider value={{ createQuiz, changeQuizData, addQuestion, addChoiceToQuestion}}>
        {props.children}
    </GlobalQuestionStoreContext.Provider>
}

export { GlobalQuestionnStoreProvider, GlobalQuestionStoreContext };