import { StyleSheet, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Test from '../components/Test';
import { Text } from '@components';
import { RootDrawerScreenProps } from '../types';

export function TabOneScreen({ navigation }: RootDrawerScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />

      <Test />
      <EditScreenInfo path='/screens/TabOneScreen.tsx' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
