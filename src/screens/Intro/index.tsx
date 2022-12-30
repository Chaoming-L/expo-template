import { ImageBackground, TouchableOpacity, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

const Intro = () => {
  return (
    <ImageBackground
      source={require('assets/sign-in/intro.png')}
      style={styles.img}
    >
      <TouchableOpacity>
        <View style={styles.button}>
          <Text>Enter</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Intro;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 30,
    padding: 12,
    width: 200,
    backgroundColor: 'white',
    textAlign: 'center',
  },
});
