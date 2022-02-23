import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View,FlatList,TouchableOpacity} from "react-native";
import { Card } from "react-native-paper";
import { Searchbar } from "react-native-paper";

 export const PetList = ({info}) => {
   //console.log(info);
   
  return (
   <Card  style={styles.card} onPress={()=>{console.log("hhhh")}}>
      <Card.Cover key={info.petName} style={styles.cover} source={{ uri: info.petProfilePic }} />
      <Text style ={styles.title}> Name: {info.petName}</Text>
      <Text style = {styles.title1}> Age:  {info.petage}</Text>
      <Text style = {styles.title2}>Type: {info.petType}</Text>
    </Card>
 
  );
};

const styles = StyleSheet.create({
 card:{backgroundColor:"rgb(250, 219, 216)",marginBottom:20, marginLeft:"-3%",width:"55%",height:120},
 cover:{width:"40%",height:120,padding:0,backgroundColor:"rgb(250, 219, 216)"},
 title:{paddingBottom:16, marginLeft:140,bottom:110, fontWeight:"bold",marginBottom:35, fontSize:13},
 title1:{paddingBottom:5, marginLeft:145,bottom:140, fontWeight:"bold",marginBottom:25, fontSize:13},
 title2:{paddingBottom:5, marginLeft:145,bottom:150, fontWeight:"bold",marginBottom:10, fontSize:13},
 buttoncontainer1:
 {
  backgroundColor:"rgb(255, 89, 89)",
  marginLeft:210,
    marginBottom:-40,
    bottom:70,
  paddingLeft:30,
  justifyContent:"center",
  width:100,
  height:35,
},
buttontext1:
{
  fontSize:17,
  fontWeight:"bold",
  alignContent:"center",
  marginLeft:-3
},
});