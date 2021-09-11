import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements'

export default function LoginScreen({ navigation }) {

  const [name,setName]=useState("")

  return (
    <View style={styles.container}>
      <View style={styles.circle}/>
      <View style={{
        // marginTop: 20
      }}>
        <Image
          source={require("../assets/chat.png")}
          style={{
          width: "100%",
          height: 200,
          alignSelf: "center"
        }}/>
      </View>
      <View style={{
        marginHorizontal: 32
      }}>
        <Text style={styles.header}>User Name</Text>
        <TextInput style={styles.input} placeholder="your username..."
            onChangeText={name=>{setName(name)}}
            value={name}
        />
        <View style={{alignItems: "flex-end", marginTop: 64}}>
            <TouchableOpacity style={styles.movingOn} 
            onPress={()=> navigation.navigate('Chat', {name: name}) }
            >
               <Icon
                name='arrow-forward-outline'
                type='ionicon'
                color='#fff'
              />
            </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(89, 113, 201)'
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20
  },
  header: {
      fontWeight: "800",
      fontSize: 30,
      color: "#514E5A",
      marginTop: 32,
  },
  input: {
      marginTop: 32,
      height: 50,
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 30,
      paddingHorizontal: 16,
      color: "#514E5A",
      fontWeight: "600",
  },
  movingOn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#9075E3",
    alignItems: "center",
    justifyContent:"center"
  }
});
