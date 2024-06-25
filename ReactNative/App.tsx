import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Question from './components/question';
import LeaderBoard from './components/leaderboard';
import { questionsData, Question as QuestionType  } from './services/mockup';

const getRandomQuestions = (questions: QuestionType[], count: number) => {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const App = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [leaderBoard, setLeaderBoard] = useState<{ name: string; score: number }[]>([]);
  const [showLeaderBoard, setShowLeaderBoard] = useState(false);

  useEffect(() => {
    const randomQuestions = getRandomQuestions(questionsData, 20);
    setQuestions(randomQuestions);
  }, []);

  const handleAnswerSelect = (answerId: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.correctAnswerId === answerId) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setLeaderBoard([...leaderBoard, { name: 'Player', score }]);
      setShowLeaderBoard(true);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {!showLeaderBoard ? (
        <View style={styles.content}>
          {questions.length > 0 && (
            <Question
              question={questions[currentQuestionIndex].question}
              answers={questions[currentQuestionIndex].answers}
              onSelectAnswer={handleAnswerSelect}
            />
          )}
        </View>
      ) : (
        <View style={styles.content}>
          <LeaderBoard scores={leaderBoard} />
          <TouchableOpacity
            style={styles.answerButton}
            onPress={() => setShowLeaderBoard(false)}
          >
            <Text style={styles.answerText}>Continue</Text>
          </TouchableOpacity>
        </View>
        
        
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  answerButton: {
    backgroundColor: '#3498db',
    padding: 10,
    marginVertical: 4,
    borderRadius: 5,
  },
  answerText: {
    color: '#fff',
    fontSize: 16,
    textAlign : "center"
  },
});

export default App;
