
import { PostData } from '@/.expo/types/post';
import { Stack } from 'expo-router';
import Post from '@/components/Post';
import { useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


export default function HomeScreen() {

  const [posts, setPosts] = useState<PostData[]>([
    {
      title: "Mitt første innlegg",
      description: "Helt sykt bra innlegg!"
    },
    {
      title: "Mitt andre innlegg",
      description: "Også et bra innlegg!"
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Pressable onPress={() => setIsModalVisible(true)}
        style={{
          backgroundColor: "green",
          padding: 12,
          borderRadius: 8,
          marginBottom: 16,
          alignSelf: "center"
        }}
      >
        <Text style={{color: "white", fontSize: 16}}>Add new post</Text>
      </Pressable>

      <Modal visible = {isModalVisible} animationType ="slide" transparent={false}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", padding: 16 }}>
          <Text style={{fontSize: 24, marginBottom: 12}}>Lag et nytt innlegg</Text>

          {/*TextInput for title */}
          <TextInput
            placeholder="Tittel"
            value={title}
            onChangeText={setTitle}
              style={{
                width: "100%",
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 8,
                marginBottom: 12,
                borderRadius: 4,
          }}
          />

          {/*TextInput for description */}
          <TextInput
            placeholder = "Description"
            value={description}
            onChangeText={setDescription}
            style={{
              width: "100%",
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 8,
              marginBottom: 12,
              borderRadius: 4,
            }}
          />

          { /* Button to add post */}
          <Pressable 
            onPress={() => {
              setPosts([...posts, { title, description}]);
              setTitle(""); //this will empty the input after sending
              setDescription(""); //same here
              setIsModalVisible(false); //close the modal
            }}
            style={{
              backgroundColor: "blue",
              padding: 10,
              borderRadius: 6,
            }}
          >
            <Text style={{color: "white"}}>Add post</Text>
          </Pressable>

          {/* Button to close the modal without adding */}
          <Pressable onPress ={() => setIsModalVisible(false)} style={{marginTop: 12}}>
            <Text style={{color: "red"}}>Close modal</Text>
          </Pressable>
        </View>
      </Modal>

      {/* List of posts */}
      <FlatList
        data={posts}
        ItemSeparatorComponent={() => <View style={{height: 12}}></View>}
        renderItem={(posts) => <Post postData={posts.item} />}
      />
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
}); 


