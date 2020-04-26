import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

const dog = {
  uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png',
  width: 64,
  height: 64
};

export default MyScrollViewApp = () => (
    
    <ScrollView style={{padding: 40}}>
      <Text style={{fontSize: 80}}> Try to scroll down </Text>
      <image source={require('./assets/dog2.png')} style={{width: 80, height: 80}} />
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <Text style={{fontSize: 80}}> Try to scroll down again, if you like </Text>
      <image source={dog} />
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} />
      <Text style={{fontSize: 80}}> Try to scroll down </Text>
      <image source={dog} />
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} />
      <Text style={{fontSize: 80}}> Try to scroll down </Text>
      <image source={dog} />
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} />
      <Text style={{fontSize: 80}}> React Native Component! </Text>
      <image source={dog} />
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} /> 
      <image source={dog} />
    </ScrollView>

  );



