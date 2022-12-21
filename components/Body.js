import { View, Text,ScrollView,Image,TextInput,Dimensions } from 'react-native'
import React from 'react'
import { clr, styles } from '../styles'

const fillerList = [
  {
    title: 'CPEN 441 Assignment 2',
    dueDatetime: new Date(2022,10,14,23,59),
    estTime: 5, //hours
  },
  {
    title: 'Job Application Deadline',
    dueDatetime: new Date(2022,10,15,12),
    estTime: 5, //hours
  },
  {
    title: 'CPEN 441 Quiz 2',
    dueDatetime: new Date(22,10,16,13),
    estTime: 5, //hours
  }
];

const dateOptions = { timeZone: 'PST', month: 'long', day: 'numeric',hour: 'numeric',minute:'2-digit' };


const Body = () => {
  return (
    <View style={{
      overflow: 'hidden'
    }}>
      <Text style={styles.h2}>most recent due:</Text>
      <View style={{display:'flex',flexDirection: 'row',justifyContent:'center'}}><TextInput 
        style={{
          marginTop: 16,
          marginHorizontal: 10,
          paddingHorizontal: 16,
          height: 60, 
          width: 300,
          borderRadius: 20,
          backgroundColor: clr.darker,
          color: clr.light,
          fontSize: 16,
          fontWeight: '500'
        }}
        defaultValue='Nothing at the moment.'
      /></View>
      <Text style={styles.h2}>upcoming deadlines:</Text>
      {fillerList.map((item,index) => { return ( <>
        <View 
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: (index === 0) ? 20: 0
          }}
        >
          <View style={{
            marginHorizontal: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
              <View style={{
                width: 30,
                height: 30,
                borderRadius: 9999,
                borderWidth: 3,
                borderColor: clr.darker
              }}/>
              {index !== fillerList.length -1 && <View style={{
                width: 3,
                height:60,
                backgroundColor: clr.darker
              }}/>}
          </View>
          <View style={{marginLeft: 4}}>
            <Text style={{marginTop: 5,...styles.h3}}>{item.title}</Text>
            <Text style={{marginTop: 16, marginLeft:24,...styles.listItemDate}}>
              {item.dueDatetime.toLocaleString('en-us', dateOptions)}
            </Text>
          </View>
        </View>
      </>)})}
    </View>
  )
}

export default Body