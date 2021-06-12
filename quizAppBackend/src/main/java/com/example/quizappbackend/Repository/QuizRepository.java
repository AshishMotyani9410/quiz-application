package com.example.quizappbackend.Repository;

import com.example.quizappbackend.Model.QuizData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizRepository extends CrudRepository<QuizData,Long> {

}
