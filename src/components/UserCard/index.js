import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import styles from './styles'

export default function UserCard ({userName, profileImg, onClick}) {
  return (
  <TouchableHighlight onPress={onClick} underlayColor='#FFF'>
    <View style={styles.card}>
      <Image style={styles.profileImg} source={{uri: profileImg}} />
      <Text style={styles.title}>{userName}</Text>
      <Text style={styles.details}>Details </Text>
    </View>
  </TouchableHighlight> 
  )
}