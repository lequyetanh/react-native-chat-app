import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from './../firebase';

export default class ChatSreen extends React.Component {
  state = {
    messages: []
  }

  get user(){
    return {
      _id: Fire.uid,
      name: this.props.navigation.state.params.name
    }
  }

  componentDidMount(){
    Fire.get(message => this.setState(previous => ({
      messages: GiftedChat.append(previous.messages, message)
    })))
  }

  componentWillUnmount(){
    Fire.off()
  }

  render(){
    const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />;
    if(Platform.OS === 'android' || Platform.OS === 'ios'){
      return (
        <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={30} enabled>
          {chat}
        </KeyboardAvoidingView>
      )
    }
    return <SafeAreaView style={{flex: 1}}>{chat}</SafeAreaView>
  }
}