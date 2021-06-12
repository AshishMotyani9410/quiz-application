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
            {...e, choices: []}
        ]})
    }

    

    const addChoiceToQuestion = (choices) => {
        setCreateQuiz({
            ...createQuiz,
            questions: [
                ...createQuiz.questions,
                createQuiz.questions[createQuiz.questions.length - 1].choices = [...choices],
            ]
        })

        setCreateQuiz({
            ...createQuiz,
            questions: [[...createQuiz.questions]].pop()
        })
        // createQuiz.questions.pop();
        console.log({_1: createQuiz.questions})
    }

    useEffect(() => {
        // createQuiz.questions.choices.map(choice => {
        //     console.log(choice.choice);
        //     console.log(choice.correctOption);
        // })
    }, [createQuiz.questions])

    return <GlobalQuestionStoreContext.Provider value={{ createQuiz, changeQuizData, addQuestion, addChoiceToQuestion}}>
        {props.children}
    </GlobalQuestionStoreContext.Provider>
}

export { GlobalQuestionnStoreProvider, GlobalQuestionStoreContext };