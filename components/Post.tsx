import { PostData } from "@/.expo/types/post";
import { View, Text, StyleSheet } from "react-native";

export type PostProps = {
    postData: PostData;
};

export default function Post({postData}: PostProps) {
    return (
        <View style={styles.post}>
                <Text>{postData.title}</Text>
                <View>
                  <Text>{postData.description}</Text>
                </View>
              </View>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    //backgroundColor: "cyan",
    paddingHorizontal: 16,
    paddingTop: 12, 
  },
  
  post: {
      backgroundColor: 'white',
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 8,
    }
});