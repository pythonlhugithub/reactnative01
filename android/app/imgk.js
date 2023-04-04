import {SafeAreaView, Image, StyleSheet} from 'react-native';

const Imgk = () => {
  return (
    <SafeAreaView style={{alignContent: 'center'}}>
      <Image source={require('./imgs/f2.jpg')} style={styles.imgg} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  imgg: {height: 200, width: 200, borderRadius: 6, alignContent: 'center'},
});

export default Imgk;
