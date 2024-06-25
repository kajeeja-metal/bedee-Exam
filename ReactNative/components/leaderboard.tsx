import React from 'react';
import { View, Text, StyleSheet , TouchableOpacity } from 'react-native';

interface LeaderBoardProps {
  scores: { name: string; score: number }[];
}

const LeaderBoard: React.FC<LeaderBoardProps> = ({ scores }): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leader Board</Text>
      {scores.map((score, index) => (
        <Text key={index} style={styles.scoreText}>
          {score.name}: {score.score}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default LeaderBoard;
