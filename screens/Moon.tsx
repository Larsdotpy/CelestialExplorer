import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PieChart} from 'react-native-svg-charts'
import { getPieChartData } from '/Users/larsdebruijn/CelestialExplorer/utilities'

export const PieChartComponent = () => {
    const data10 = [40, 83, 60, 30, 75, 90, 27, 52]
    const pieChartData = getPieChartData(data10)

    return (
        <PieChart
            style={{ width: 200, height: 200 }}
            data={pieChartData}
        />
    )
}

const Moon = () => (
  <View style={styles.background}>
    <Text style={styles.text}>Moon</Text>
    
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#171717',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '48%',
    alignItems: 'center',
    marginTop: 20,
  },
  circle: {
    width: 130,
    height: 130,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  percentage: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
});

export default Moon;