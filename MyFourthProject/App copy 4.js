import React from 'react';
import { Text, View, FlatList } from 'react-native';


export default StateApp = () => {
  return (
    <View style={{flex: 1, paddingTop:22}}>
        <FlatList
          data={[
            {key: 'Alabama'},
            {key: 'Alaska'},
            {key: 'Arizona'},
            {key: 'Arkansas'},
            {key: 'California'},
            {key: 'Colorado'},
            {key: 'Delaware'},
            {key: 'Florida'},
            {key: 'Georgia'},
            {key: 'Hawaii'},
            {key: 'Idaho'},
            {key: 'Illinois'},
            {key: 'Indiana'},
            {key: 'Iowa'},
            {key: 'Kansas'},
            {key: 'Kentucky'},
            {key: 'Maine'},
            {key: 'Maryland'},
            {key: 'Massachusetts'},
            {key: 'Michigan'},
            {key: 'Minnestota'},
            {key: 'Mississippi'},
          ]}
        returnItem={({item}) => <Text stydle={{padding: 10, fontSize: 20, height: 44 }}> {item.key} </Text>}
         /> 
    </View>


  );// end of return statement
}


