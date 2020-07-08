import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../RepositoriesCard/styles';

export default function RepositoriesCard ({repositories}) {
  return(
    <ScrollView style={{marginTop: 10,}}>
      {repositories.map(({name, id}) => (
        <Text style={styles.title} key={id} >{name}</Text> 
      ))}
    </ScrollView>
  )
}