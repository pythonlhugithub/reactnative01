import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Alert,
} from 'react-native';
import Sale from './Sale';
import Imgk from './android/app/imgk';
const Home = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <Text style={styles.text}>AI Report Area</Text>
        <View>
          <Text style={styles.layout}>The AI face </Text>
          <Image
            style={styles.imgss}
            source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
          />
          <TextInput
            style={styles.container}
            defaultValue="accept input from user"
          />
          <Button
            title="submit"
            onPress={() => {
              alert('the input has been submitted');
            }}>
            Click
          </Button>
        </View>
        <View>
          <Text style={styles.layout}>The AI Sales Report Collection</Text>
          <Sale style={styles.layout} />
        </View>
        <View style={styles.layout}>
          <Imgk />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 24, fontWeight: 'bold', color: 'blue'},
  imgss: {width: 200, height: 200, alignContent: 'center'},
});
export default Home;
