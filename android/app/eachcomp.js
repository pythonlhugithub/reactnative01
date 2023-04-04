import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EachComp = props => {
  return (
    <View style={syl.snme}>
      <Text>The report name: {props.name} </Text>
      <View style={syl.addrs}>
        <Text>The report address: {props.addr}</Text>
      </View>
    </View>
  );
};

const syl = StyleSheet.create({
  snme: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  addrs: {margin: 5, padding: 8, borderWidth: 1, borderRadius: 6},
});
export default EachComp;
