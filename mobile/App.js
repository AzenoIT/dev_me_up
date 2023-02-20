import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Subheader } from 'react-native-material-design';

export default function App() {
  return (
    <View style={styles.container}>
      <Subheader text="Normal Subheader"/>
      <Subheader text="Normal Subheader with color" color="paperRed" />
      <Subheader text="Normal Subheader" inset />
      <Subheader text="Normal Subheader with color" color="paperOrange" inset />
      <Text>Say my name</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
