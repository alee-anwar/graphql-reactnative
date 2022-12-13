import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
import React, { Component, useEffect, useState } from 'react';

import { useQuery, gql } from '@apollo/client';
import { COUNTRY_QUERY, Task_2, Task_3 } from './query';


export default function Home({navigation}) {

  const{data, loading} = useQuery(Task_3)
  const{data:data1, loading1} = useQuery(Task_2)

  useEffect(()=>{
    console.log('GraphQL ===', data)
    console.log('Task ===', data1)
    // loading[useQuery(Task_2)]
    // console.log('GraphQL ===', data)
  })
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <Text style={{fontSize:38, justifyContent:'center'}}> GraphQL </Text>
      <FlatList
        data={data?.countries}
        renderItem={ ({item}) =>
          <View style={{backgroundColor:'green', marginBottom:10, height:40}}>
            <Text style={{color:'white'}}>{item.name}</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});




