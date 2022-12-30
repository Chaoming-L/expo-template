import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Intro from 'screens/Intro';

const Stack = createNativeStackNavigator();
const fullScreenOptions = { headerShown: false };

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="intro">
      <Stack.Group screenOptions={fullScreenOptions}>
        <Stack.Screen name="intro" component={Intro} />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
