import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {ScrollView, ActivityIndicator} from 'react-native';
import UserCard from '../../components/UserCard';
import styles from './styles';

export default function App ({navigation}) {
  const[users, setUsers] = useState([]);
  const[loading, setLoading] = useState(true);

  const usersReponse = async() => {
    const response = await api.get('users')
    setUsers(response.data);
    setLoading(false);
  }

  useEffect(() => {
    usersReponse();
  },[])
  
  return (
    <ScrollView style={styles.scrollview}>
      {users.map(({id, login, avatar_url}) => (
        <UserCard key={id} userName={login} profileImg={avatar_url} onClick={() => navigation.navigate('Repositories', {user: login})}/>
      ))} 
      <ActivityIndicator size="large" style={{marginTop: 250}} color="#555" animating={loading}/> 
    </ScrollView>
  )
}