import React, { useEffect, useState } from 'react';
import { SafeAreaView, Image, View, Text, TouchableOpacity } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'

import logo from '../../assets/logo.png'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import styles from './styles'
import api from '../../services/Api'

export default function Main() {

  const route = useRoute();
  let login = route.params._id

   const [users, setUsers] = useState([]);

    useEffect(() => {
      async function loadUsers(){
        const response = await api.get('/devs', {
          headers: {user: login}        
          
        });

        setUsers(response.data)

      }
      
      loadUsers();

    }, [route.params.id]);

    async function handleLike(){
      
      const [user, ...rest] = users;
      
      await api.post(`/devs/${user._id}/likes`, null,{
        headers: {user: login}
      })
      setUsers(rest)
    }

    async function handleDislike(){
      const [user, ...rest] = users;
      
      await api.post(`/devs/${user._id}/dislikes`, null,{
        headers: {user: login}
      })
      setUsers(rest)
    }
 
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo}/>

      <View style={styles.cardsContainer}>
        { users.length == 0
        ? <Text style={styles.empty}>Acabou :(</Text>
        : users.map((user, index) =>(
          <View key={user._id} style={[styles.card, {zIndex: users.length - index}]}>
            <Image style={styles.avatar} source={{uri: user.avatar_url}}/>
            <View style={styles.footer}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.bio} numberOfLines={3}>{user.bio}</Text>
            </View>
        </View>
        )) }
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDislike}>
          <Image source={dislike}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLike}>
          <Image source={like}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
