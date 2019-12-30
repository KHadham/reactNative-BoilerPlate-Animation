/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {
  Text,
  View,
  Easing,
  Animated,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import styles from './styles';
const App = () => {
  const [nilaiYangDiAnimasikan] = useState(new Animated.Value(0));

  const animate = easing => {
    nilaiYangDiAnimasikan.setValue(0);
    Animated.timing(nilaiYangDiAnimasikan, {
      toValue: 10,
      duration: 5000,
      easing,
    }).start();
  };

  const Button = ({onPress, easing}) => (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <Text>{easing}</Text>
    </TouchableHighlight>
  );

  // Men skala kan nilai 1 ~ 0 ke 10 ~ 300
  const marginLeft = nilaiYangDiAnimasikan.interpolate({
    inputRange: [0, 10],
    outputRange: [10, 300],
  });

  const opacity = nilaiYangDiAnimasikan.interpolate({
    inputRange: [0, 10],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.block, {marginLeft, opacity}]} />
      <ScrollView>
        <Text style={{textAlign: 'center'}}>Scroll up for more animations</Text>
        <Button easing="Bounce" onPress={() => animate(Easing.bounce)} />
        <Button easing="Cubic" onPress={() => animate(Easing.cubic)} />
        <Button easing="Back" onPress={() => animate(Easing.back(2))} />
        <Button easing="Elastic" onPress={() => animate(Easing.elastic(2))} />
        <Button easing="Ease" onPress={() => animate(Easing.ease)} />
        <Button
          easing="InOut"
          onPress={() => animate(Easing.inOut(Easing.quad))}
        />
        <Button easing="In" onPress={() => animate(Easing.in(Easing.quad))} />
        <Button easing="Out" onPress={() => animate(Easing.out(Easing.quad))} />
        <Button easing="Sin" onPress={() => animate(Easing.sin)} />
        <Button easing="Linear" onPress={() => animate(Easing.linear)} />
        <Button easing="Quad" onPress={() => animate(Easing.quad)} />
      </ScrollView>
    </View>
  );
};

export default App;
