import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

type PageProps = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: PageProps) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

export default PageContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
