package com.example.quizappbackend.Model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor
public class QuizData {

    @Id
    Long id;

    String title;
    String totalPoints;
    String timeAllowed;
    String deadline;
    String totalPointperquestion;


}
