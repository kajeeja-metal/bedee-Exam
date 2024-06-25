import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

interface Answer {
  id: number;
  text: string;
}

interface QuestionProps {
  question: string;
  answers: Answer[];
  onSelectAnswer: (answerId: number) => void;
}
const shuffle = (arr : any) => [...arr].sort(() => Math.random() - 0.5);
const Question: React.FC<QuestionProps> = ({ question, answers, onSelectAnswer }): JSX.Element => {
  return (
    <Card style={styles.card}>
      <Text style={styles.question}>{question}</Text>
      {shuffle(answers).map((answer) => (
        <TouchableOpacity
          key={answer.id}
          style={styles.answerButton}
          onPress={() => onSelectAnswer(answer.id)}
        >
          <Text style={styles.answerText}>{answer.text}</Text>
        </TouchableOpacity>
      ))}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    padding: 16,
  },
  question: {
    fontSize: 18,
    marginBottom: 12,
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
  },
});

export default Question;
