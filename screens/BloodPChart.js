import { StyleSheet, Text, View,Dimensions, Pressable } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { BarChart } from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { VictoryChart ,VictoryTheme,VictoryBar, VictoryArea, VictoryAxis, VictoryPolarAxis, VictoryPie, VictoryLine } from 'victory-native'
import Backward from '../components/Backward';
import DataChart from '../components/DataChart';
import Title from '../components/Title';

const BloodPChart = () => {
    
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);



      const sampleData = [
        { x: 1, y: 20 },
        { x: 2, y: 90 },
        { x: 3, y: 20},
        { x: 4, y: 10 }
      ]

  return (
    <SafeAreaView>
    <View className="mx-auto">
    <Pressable onPress={()=>navigation.pop()}>
    <Backward />
    </Pressable>
    
     <DataChart Title={"Average Blood Pressure"} num={"110"} unit={"mmHg"}/>

     <VictoryChart>
  <VictoryLine
    style={{
        data: { stroke: "red" }
      }}
    data={sampleData}
  />
</VictoryChart>
    </View>
    </SafeAreaView>
  )
}

export default BloodPChart

const styles = StyleSheet.create({})