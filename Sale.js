import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import EachComp from './android/app/eachcomp';
const Sale = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        borderColor: 'red',
        alignContent: 'center',
        borderRadius: 6,
      }}>
      <ScrollView>
        <Text
          style={{
            color: 'red',
            fontSize: 26,
            fontFamily: 'Arial',
            alignContent: 'center',
          }}>
          Here is the sales department data area
        </Text>
        <Text
          style={{
            color: 'blue',
            fontSize: 16,
            fontFamily: 'Arial',
            alignContent: 'center',
          }}>
          Sals report will be displayed here, EachComp report template will
          accept data for sales report from this area.
        </Text>
      </ScrollView>

      <View>
        <Text>
          this is the sales report area to pass data into Eachcomp template for
          generating report details
        </Text>
        <EachComp
          name="AI GPT-5"
          addr="123 water street, St Leonards, 2065, NSW"
        />
      </View>
    </SafeAreaView>
  );
};
export default Sale;
