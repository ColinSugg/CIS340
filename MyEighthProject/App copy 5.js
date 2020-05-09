import React, {useState} from 'react';
import { StyleSheet, Text, View, ToucableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'// import

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false){
      alert("Permission is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({localUri: pickerResult.uri});
  };

  // display the selected Image
  if (selectedImage !== null){
    return(
      <View style={styles.container}>
        <image source={{ uri: selectedImage.localUri}} style={styles.selImage}></image>
      </View>
    )
  }
  //End of code

  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png'}}
            style={styles.logo}/>
     

      <Text style={styles.insts}>
        Press the button below to select an image on your Phone!
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={openImagePickerAsyncs}>
        <Text style={styles.buttonText}> Pick Image </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFE0'
  },

  button: {
   
    backgroundColor: "#778899",
    borderRadius: 5
  },

  insts: {
    fontSize: 18,
    color: "#87CEFA",
    marginHorizontal: 15,
    marginBottom: 10
  },

  logo: {
    width: 310,
    height: 300,
    marginBottom: 20
  },

  buttonText: {
    fontSize: 20,
    color: "#fff"
  },

  selImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
  
});
