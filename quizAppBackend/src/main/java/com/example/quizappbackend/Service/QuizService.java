package com.example.quizappbackend.Service;

import com.example.quizappbackend.Model.QuizData;
import com.example.quizappbackend.Repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    @Autowired
    private QuizRepository quizRepository;

    public Iterable<QuizData> getAll(){
       return quizRepository.findAll();
    }

    public List<QuizData> saveQuiz(QuizData quizData) {

        return (List<QuizData>) quizRepository.save(quizData);
    }
}
