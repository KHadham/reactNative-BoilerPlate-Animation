/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Animated,
  Easing,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const App = () => {
  const [text, setText] = useState('');
  const [onchangeHeader, setOnchangeHeader] = useState(false);
  const [header] = useState(new Animated.Value(1)); // Initial value for opacity: 0
  const [searchBAr] = useState(new Animated.Value(0)); // Initial value for opacity: 0
  const [nilaiYangDiAnimasikan] = useState(new Animated.Value(0));

  const animate = easing => {
    nilaiYangDiAnimasikan.setValue(0);
    Animated.timing(nilaiYangDiAnimasikan, {
      toValue: 10,
      duration: 1000,
      easing,
    }).start();
  };

  const Button = ({onPress, easing}) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{easing}</Text>
    </TouchableOpacity>
  );

  // Men skala kan nilai 1 ~ 0 ke 10 ~ 300
  const marginLeft = nilaiYangDiAnimasikan.interpolate({
    inputRange: [0, 10],
    outputRange: [10, 300],
  });

  const _header = easing => {
    // fadeAnim.setValue(0);
    setOnchangeHeader(!onchangeHeader);
    Animated.timing(header, {
      toValue: onchangeHeader ? 1 : 0,
      duration: 500,
      easing,
    }).start();
    Animated.timing(searchBAr, {
      toValue: onchangeHeader ? 0 : 1,
      duration: 500,
      easing,
    }).start();
  };

  const moveSearchBar = searchBAr.interpolate({
    // inputRange: [0, 0, 0, 0, 0.8, 0.9, 1],
    // outputRange: [-1600, -1500, -220, -150, -90, -40, 0],
    inputRange: [0, 0, 0, 0.5, 1],
    outputRange: [-500, -400, -300, -200, 0],
  });

  return (
    <View style={styles.container}>
      <View>
        <Animated.View
          style={[
            styles.header,
            {transform: [{scale: header}], opacity: header},
          ]}>
          {/* <Animated.View style={[styles.header]}> */}
          <TouchableOpacity onPress={() => _header()} style={styles.left}>
            <Icon name="bars" size={30} color="grey" />
          </TouchableOpacity>
          <View style={styles.center}>
            <Text style={{color: 'grey', fontSize: 20}}>Application</Text>
          </View>
          <TouchableOpacity
            onPress={() => _header(Easing.inOut(Easing.quad))}
            style={[styles.right, {backgroundColor: 'white'}]}>
            <Icon name="search" size={30} color="grey" />
          </TouchableOpacity>
        </Animated.View>
        {/* ///////////////////////////////////////////////////////////////////////// */}
        <Animated.View
          style={[
            styles.header,
            {position: 'absolute', left: moveSearchBar, opacity: searchBAr},
          ]}>
          {/* <Animated.View
          style={[styles.header, {position: 'absolute', opacity: 0.2}]}> */}
          <TouchableOpacity
            style={styles.left}
            onPress={() => _header(Easing.inOut(Easing.quad))}>
            <Icon name="arrow-left" size={30} color="grey" />
          </TouchableOpacity>
          <View style={styles.center}>
            {onchangeHeader && (
              <TextInput
                style={{
                  color: 'grey',
                  padding: -20,
                  fontSize: 20,
                }}
                autoFocus
                placeholder="Search something..."
                onChangeText={tulisan => setText(tulisan)}
                value={text}
              />
            )}
          </View>
          <TouchableOpacity
            onPress={() => _header(Easing.inOut(Easing.quad))}
            style={[styles.right, {backgroundColor: 'white'}]}>
            <Icon name="microphone" size={30} color="grey" />
          </TouchableOpacity>
        </Animated.View>
      </View>
      {/* <Animated.View style={[styles.block, {marginLeft, opacity}]} /> */}
      <ScrollView styles={{marginTop: 30}}>
        <Button
          easing="header"
          onPress={() => _header(Easing.inOut(Easing.quad))}
        />
        <Button easing="Bounce" onPress={() => animate(Easing.bounce)} />
        <Button easing="Cubic" onPress={() => animate(Easing.cubic)} />
        <Button easing="Back" onPress={() => animate(Easing.back(1))} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  block: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    padding: 15,
  },
  left: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
