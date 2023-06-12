import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

// each value represents a goal ring in Progress chart
const data = {
  labels: ["Water", "Hydrogen", "Oxygen"], // optional
  data: [0.4, 0.6, 0.8]
};

const chartConfig = {
  backgroundGradientFrom: "#171717",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#171717",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const Mars = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Mars</Text>
    <ProgressChart
      data={data}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      strokeWidth={16}
      radius={32}
      chartConfig={chartConfig} // Pass the chartConfig object separately
      hideLegend={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  }
});

export default Mars;