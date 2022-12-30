import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const IntroScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>go go go!</Text>
    <StatusBar style="auto" />
  </SafeAreaView>
);

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
