import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Skills = ({skills}) => {
  return (
    <View style={{width:150,justifyContent:'center', marginHorizontal:'auto',margin:10, padding:20,backgroundColor:'lightgreen'}}>
    <Text style={{color:'black',alignSelf:'center',fontWeight:'bold',fontStyle:'italic'}}>{skills}</Text>
  </View>
  )
}

export default Skills

const styles = StyleSheet.create({})