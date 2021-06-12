package com.example.quizappbackend;

import com.example.quizappbackend.Model.QuizData;
import com.example.quizappbackend.Service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    QuizService quizService;

    @PostMapping("/quiz")
    public List<QuizData> saveData(@RequestBody QuizData quizData){
    return quizService.saveQuiz(quizData);
    }
}
