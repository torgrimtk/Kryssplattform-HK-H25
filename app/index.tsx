
import { Platform, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View>
      <View style={styles.post}>
        <Text>My first post!</Text>
        <View>
          <Text>This is the content of my first post!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  }
});
