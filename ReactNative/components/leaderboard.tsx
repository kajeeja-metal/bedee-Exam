import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LeaderBoardProps {
  scores: { name: string; score: number }[];
}

const LeaderBoard: React.FC<LeaderBoardProps> = ({ scores }): JSX.Element => {
  
  const sortedScores = scores.sort((a, b) => b.score - a.score).map((score, index) => ({
    name: score.name,
    score: score.score,
    rank: index + 1 
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leader Board</Text>
      {sortedScores.map((score,i) => (
        <Text key={score.name+i} style={styles.scoreText}>
          {score.rank}. {score.name}: {score.score}
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
    marginTop: 20,
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
