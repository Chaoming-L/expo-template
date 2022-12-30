import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from 'screens';

export default function App() {
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
}
