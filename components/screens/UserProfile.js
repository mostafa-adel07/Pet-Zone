import React, { Component,useEffect,useState } from "react";
import { StyleSheet, View, Text, Switch, Image,TouchableOpacity,FlatList,SafeAreaView } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import {Title,Card,Button} from 'react-native-paper';
import {MaterialIcons,Entypo,Ionicons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { PetList } from "./PetList";
import { ScrollView } from "react-native-gesture-handler";
export const UserProfile=()=> {
    const [user,Setuser] = useState({})
    const [id,Setid] = useState(1)
    const [username, Setname] = useState("Stan Smith");
    const [phone, Setphone] = useState("12345");
    const [email, Setemail] = useState("abc@abc.com");
    const [image, SetImage] = useState("https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg");
    const [city, Setcity] = useState("cairo");
    const [country, Setcountry ] = useState("Egypt");

    const [petinfo, Setpetinfo] = useState([]);

  const [filterdata1, Setfilterdata1] = useState(datainfo);
    useEffect(()=>{
    axios
    .get('http://192.168.1.13:3000/api/v1/users/me'+{
      headers: {
        Cookie: "cookie1=value; cookie2=value; cookie3=value;",
        Authorization: "Bearer my-token",
      },
      withCredentials: true,
    })
    .then(res=>{
      console.log(res)
      Setuser(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  })
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 859.43 890.3" style={styles.ellipse}>
          <Ellipse style={styles.ellipse}
            strokeWidth={1}
            fill="#FDEFC5"
            cx={430}
            cy={445}
            rx={429}
            ry={445}
          ></Ellipse>
        </Svg>
        <View style={styles.settingsList}>
          <View style={styles.account}>
            <Text style={styles.expanded1}>ACCOUNT INFORMATION</Text>
            
               
      
                 <Card style={styles.mycard} onPress={()=>{Linking.openURL("mailto:abc@abc.com")}}>
                    <View style={styles.cardContent}>
                      <MaterialIcons name="email" size={32} color="#006aff" />
                      <Text style={styles.mytext}> {email}</Text>


                            </View>
                            </Card>
               <Card style={styles.mycard} onPress={()=>openDial()}>
               <View style={styles.cardContent}>
                <Entypo name="phone" size={32} color="#006aff"/>
                    <Text style={styles.mytext}>{phone}</Text>
                 </View>
                    </Card>
         
                   <Text style={styles.expanded}>{"\n"}My Pets</Text>
                    
             
                  
    <View style ={styles.container1}>
   <FlatList
   data = {datainfo}
  
   renderItem = {({ item })=>{
     return <PetList info ={item}/>;
   }}
  keyExtractor = {(info)=>info.petName}
  contentContainerStyle ={{padding:10}}
  />
      <TouchableOpacity
         style={styles.buttoncontainer}
         onPress={()=>openDial()}
        // onPress={() => navigation.navigate('TypeSignup')}
        /**/
      >
        <Text style={styles.buttontext}>ADD PET+</Text>
      </TouchableOpacity>
 </View>
           
          
          </View>
         
        </View>
        <View style={styles.userInfo}>
          <View style={styles.avatarRow}>
            <Image
              source={{ uri: image }}
              resizeMode="stretch"
              style={styles.avatar}
            ></Image>
             
            <Text style={styles.userName}>{username}</Text>
            <Text style={styles.citycountry}>{city},  {country}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.pageName}>PET OWNER</Text>
      <TouchableOpacity>
       <Ionicons
          style={styles.icon1}
          name="settings-outline"
          size={30}
          color="black"
        />
        </TouchableOpacity>
    </View> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(210, 180, 159)",
    width: 420,
    height: 660
  },
 
  container1:{
  //flexDirection:'row'
  width:500,
  height:500
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 859,
    height: 890,
    position: "absolute"
  },
  settingsList: {
    left: 51,
    height: 408,
    position: "absolute",
    right: 450,
    bottom: 274
  },
  account: {
    height: 165,
    marginTop: 15,
    marginLeft: 24,
    marginRight: 24
  },
  expanded: {
    color: "rgba(237,115,84,1)",
    fontSize: 25,
    marginTop: -20,
     fontWeight: "bold",
  },
   expanded1: {
    color: "rgba(237,115,84,1)",
    fontSize: 20,
    marginTop: -30,
     fontWeight: "bold",
  },
  userInfo: {
    top: 55,
    left: 87,
    height: 200,
    position: "absolute",
    right: 451,
    flexDirection: "row"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  avatar1: {
    width: 50,
    height: 50,
    borderRadius: 200/1
  },
 buttoncontainer: {
    borderRadius: 150,
    width: 105,
    height: 80,
    backgroundColor: "rgb(210, 180, 159)",
    paddingTop: 0,
    justifyContent: "center",
    marginBottom: 55,
    paddingLeft: 60,
    top:-100,
    left:230,
    flex:0,
    marginLeft:40
  },

  buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    right: 30,
    marginTop: 0,
   paddingTop: 0,
  },
  userName: {
    color:  "rgba(90,116,139,1)",
    fontSize: 30,
    marginTop: 12,
    marginLeft: 55,
  },
  citycountry:{
     marginTop:45,
    marginLeft: -105,
    color:"rgba(237,115,84,1)"
  },
  avatarRow: {
    height: 100,
    flexDirection: "row",
    flex: 1,
    marginRight: 159
  },
  ellipseStack: {
    height: 890,
    marginTop: 43,
    marginLeft: -50,
    marginRight: -449
  },
  pageName: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: -899,
    marginLeft: 35
  },
  mycard:{ 
  margin:3,
  width:325,
  paddingLeft:5,
  marginLeft:-5,
},
mycard1:{ 
  margin:3,
  width:225
},
cardContent:{
  flexDirection:"row",
  padding:8
},
mytext:{
fontSize:18,
marginTop:3,
marginLeft:5
},
 icon1: {
    position: "absolute",
    top: -20,
    left: 350,
  },
});

//export default Index;