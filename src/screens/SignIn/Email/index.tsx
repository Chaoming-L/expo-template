import { ImageBackground,  Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

const Email = () => {
  return (
    <ImageBackground
      source={require('assets/sign-in/intro.png')}
      style={styles.img}
    >
      <View>
        <Text>333</Text>
      </View>
    </ImageBackground>
  );
};

export default Email;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
