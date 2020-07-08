import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import {View, Text, ActivityIndicator} from 'react-native';
import RepositoriesCard from '../../components/RepositoriesCard';

export default function Repositories ({route, navigation}) {
  const[repositories, setRepositories] = useState([]);
  const[loading, setLoading] = useState(true);

  const { user } = route.params;

  const usersReponse = async() => {
    const response = await api.get(`users/${user}/repos`)
    setRepositories(response.data);
    setLoading(false);
  }

  useEffect(() => {
    usersReponse();
  },[])  
  
  return (
    <View>
      <RepositoriesCard repositories={repositories} />
      <ActivityIndicator size="large" style={{marginTop: 250}} color="#555" animating={loading} />
    </View>
  )
}