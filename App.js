/* eslint-disable react-hooks/exhaustive-deps */
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
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';

const App = () => {
  const [text, setText] = useState('');
  const [onchangeHeader, setOnchangeHeader] = useState(false);
  const [value, setValue] = useState(new Animated.Value(0)); // Initial value for opacity: 0
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0
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

  const opacity = nilaiYangDiAnimasikan.interpolate({
    inputRange: [0, 10],
    outputRange: [0, 1],
  });
  // React.useEffect(() => {
  //   Animated.timing(value, {
  //     toValue: 1,
  //     duration: 1000,
  //   }).start(() => setValue(new Animated.value(0)));
  // }[value]);

  // React.useEffect(() => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 5000,
  //   }).start(() => setFadeAnim(new Animated.value(0)));
  // }, []);

  const coba = () => {
    setOnchangeHeader(!onchangeHeader);
    if (!onchangeHeader) {
      fadeIn();
    } else {
      console.log('hello');
      fadeOut();
    }
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.in,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.out,
    }).start();
  };

  // const animateIcon = () => {
  //   setOnchangeHeader(!onchangeHeader);
  //   Animated.spring(value, {
  //     toValue: 1,
  //     friction: 3,
  //     stretch: 100,
  //   }).start(setValue(0.75));
  // };

  let animatedValue = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [5000, 0],
  });
  console.log('fadeAnim', fadeAnim);
  return (
    <View style={styles.container}>
      {!onchangeHeader ? (
        // <Animated.View style={[styles.header, {transform: [{scale: value}]}]}>
        <View style={[styles.header]}>
          <TouchableOpacity onPress={() => coba()} style={styles.left}>
            <Icon name="bars" size={30} color="grey" />
          </TouchableOpacity>
          <View style={styles.center}>
            <Text style={{color: 'grey', fontSize: 20}}>Application</Text>
          </View>
          <TouchableOpacity
            onPress={() => coba()}
            style={[styles.right, {backgroundColor: 'white'}]}>
            <Icon name="search" size={30} color="grey" />
          </TouchableOpacity>
        </View>
      ) : (
        // <Animated.View style={[styles.header]}>
        <Animated.View
          style={[styles.header, {opacity: fadeAnim, left: animatedValue}]}>
          <TouchableOpacity style={styles.left} onPress={() => coba()}>
            <Icon name="arrow-left" size={30} color="grey" />
          </TouchableOpacity>
          <View style={styles.center}>
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
          </View>
          <TouchableOpacity
            onPress={() => coba()}
            style={[styles.right, {backgroundColor: 'white'}]}>
            <Icon name="microphone" size={30} color="grey" />
          </TouchableOpacity>
        </Animated.View>
      )}
      <Animated.View style={[styles.block, {marginLeft, opacity}]} />
      <ScrollView styles={{marginTop: 30}}>
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
