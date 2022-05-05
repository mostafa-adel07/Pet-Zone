import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ImageBackground,
  TouchableRipple,
  
} from 'react-native';
import { Switch } from 'react-native-paper';
import Svg, { Ellipse } from 'react-native-svg';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import axios from "axios";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';



export const PetProfile = ({route}) => {
const [petinfo, Setpetinfo] = useState([]);
const{id} = route.params
const datainfo = [
  {petName:"charlie" , petType: "cat",petGender:"male",petBreed:"persian" ,petage:'10' ,petWeight:'56' , petColor:"white",   petProfilePic:"https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg"},
{petName: "leo" ,petType: "dog"  ,petGender:"male",petBreed:"pug"  ,petage:'15'  ,petWeight:'72' ,  petColor:"fawn",    petProfilePic: "https://media.istockphoto.com/photos/pug-sitting-and-panting-1-year-old-isolated-on-white-picture-id450709593?k=20&m=450709593&s=612x612&w=0&h=82zzJc3Cz39B6LyrQ_N2b4zXxYzZIEH9aNDZWzrZspg="},
{petName:"simba"  ,petType: "dog", petGender:"male",petBreed:"Labrador Retriever"  ,petage:'6'  ,petWeight:'40', petColor:"black"  ,  petProfilePic:"https://elevageduverger.ca/wp-content/uploads/2019/12/Mel-and-Jak-24_square.jpg"},
{petName:"luna" ,petType: "dog",petGender:"female",petBreed:"Maltipoo"  ,petage:'20'  ,petWeight:'96'  , petColor:"brown" , petProfilePic:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F02%2F23%2Fmaltipoo-on-table-390083464-2000.jpg"},
 {petName: "lola" ,petType:"cat", petGender:"female",petBreed:"Siberian"  ,petage:'8'  ,petWeight:'48' ,  petColor:"white" ,  petProfilePic:"https://cf.ltkcdn.net/cats/images/orig/246623-1877x1251-siberian-cat.jpg"}
];
  const [image, SetImage] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg'
  );

  useEffect(() => {
    axios
      .get("http://192.168.1.13:3000/api/v1/offerAdoption",id)
      .then((res) => {
        Setpetinfo(res.data.adoptedOffer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, id);
const [isSwitchOn, setIsSwitchOn] = React.useState(false);
const [isSwitchOn1, setIsSwitchOn1] = React.useState(false);
  const onToggleSwitch = () => {
  console.log(id)
  axios
  .post("", id, {
    headers: {
      Cookie: "cookie1=value; cookie2=value; cookie3=value;",
      "Content-Type": "application/json",
      "My-Custom-Header": "foobar",
    },
    withCredentials: true,
  })
  .then((res) => {
    setIsSwitchOn(!isSwitchOn)
  })
  .catch((err) => {
    console.log(err.response.data);
  });
  };
   const onToggleSwitch1 = () => {
     console.log(id)
     axios
     .post("", id, {
       headers: {
         Cookie: "cookie1=value; cookie2=value; cookie3=value;",
         "Content-Type": "application/json",
         "My-Custom-Header": "foobar",
       },
       withCredentials: true,
     })
     .then((res) => {
      setIsSwitchOn1(!isSwitchOn1)
     })
     .catch((err) => {
       console.log(err.response.data);
     });
    };
   

return (
   <SafeAreaView>
     <View style ={styles.container}>
 <View style={styles.header}>
    
      <MaterialIcons
          style={styles.icon1}
          name="notifications-none"
          size={24}
          color="#3D405B"
        />
   <TouchableOpacity style={styles.buttoncontainer} >
        <Text style={styles.buttontext}>Edit Profile</Text>
      </TouchableOpacity>

        <Image
                source={{ uri: image }}
                resizeMode="stretch"
                style={styles.avatar}></Image>
                <Text  style={styles.title0}> Gabaski</Text>

<Text style = {styles.title1}>  Gender: {datainfo.petGender}</Text>
<Text style = {styles.title2}>  Type: {datainfo.petType}</Text>
          <View style={styles.veiwcard}>
 
         <Card  style={styles.card} onPress={()=>{console.log("hhhh")}}>
    
     
      <Text style = {styles.title}>Age: {datainfo.petage}</Text>
    </Card>

     <Card  style={styles.card} onPress={()=>{console.log("hhhh")}}>
    
      
      <Text style = {styles.title}>Gender: {datainfo.petGender}</Text>
    </Card>
           </View>
           <Text style = {styles.title3}>  Age: {datainfo.petage}</Text>
<Text style = {styles.title4}>  Breed: {datainfo.petBreed}</Text>
 <View style={styles.veiwcard2}>
         <Card  style={styles.card} onPress={()=>{console.log("hhhh")}}>
    
     
      <Text style = {styles.title}>Breed: {datainfo.petBreed}</Text>
    </Card>

     <Card  style={styles.card} onPress={()=>{console.log("hhhh")}}>
    
     
      <Text style = {styles.title}>Type: {datainfo.petType}</Text>
    </Card>
           </View>

       </View>
        <View style={styles.container1}>
           <Switch style={styles.switch1}
        value={isSwitchOn} 
        onValueChange={onToggleSwitch}
        
      />
        <Text style = {styles.switchtext}>Offer For Adoption {datainfo.petType}</Text>
        <Switch style={styles.switch1}
        value={isSwitchOn1} 
        onValueChange={onToggleSwitch1}
      />
        <Text style = {styles.switchtext}>Offer For Breeding {datainfo.petType}</Text>
    </View>
    <Text  style = {styles.descrptiontitle }> Descrption </Text>
        <Text style = {styles.descrption}>Despite my dog leaning on me each time we meet other big dogs in the street, I am certain his/her lean nature is an advantage when I am not present</Text>
     </View>
      
       
    </SafeAreaView>
)
}

const styles = StyleSheet.create({

header: {
    backgroundColor: "#FDEFC5",
    height: 130,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
textheader: {
    marginTop: 30,
    fontSize: 30,
    color: "rgb(221,74,72)",
    fontWeight: "bold",
  },
 avatar: {
    width: 110,
    height: 120,
    borderRadius: 100,
    justifyContent: 'center',
     left: 0,
      top: -5,
  },
veiwcard: {
flexDirection:"row",
top:-55,
left:-15,

},
veiwcard2: {
flexDirection:"row",
top:-115,
left:-15,

},
buttoncontainer: {
    borderRadius: 15,
    width: 110,
    height: 48,
   backgroundColor: "#3D405B",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 15,
    paddingLeft: 60,
    top:55,
    left:120,
  },
   buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    right: 30,
  },
   icon1: {
    position: "absolute",
    top: 28,
    left: 315,
  },
card:{backgroundColor:"white",marginBottom:20, marginLeft:"7%",width:"43%",height:40,borderColor:"white",borderRadius:15,
 shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
 },
 switch1:{
   top:250,
   paddingBottom:0,
   left:-350,
   
 },
 switchtext:{
   top:215,
   paddingBottom:0,
   left:60,
    paddingLeft:15,
    fontWeight:'bold'
 },
 title0:{
fontSize:25,
fontWeight:"bold",
left:-5,
 },
 descrptiontitle:{
fontSize:20,
color:"black",
fontWeight:"bold",
left:-2,
marginBottom:5,
top:250,
 },
 descrption:{
fontSize:17,
color:"black",
top:260,
//fontWeight:"bold",
//left:-125,
//marginBottom:5,
 },
 title:{ fontWeight:"bold", fontSize:15, color:"gray",left:45,top:5,},

title1:{paddingBottom:0, left:86,bottom:5, fontWeight:"bold", fontSize:13,color:"black"},

 title2:{paddingBottom:25, left:86,bottom:-52, fontWeight:"bold",marginBottom:15, fontSize:13,color:"black"},

 title3:{paddingBottom:0, left:-94,bottom:140, fontWeight:"bold", fontSize:13,color:"black"},

 title4:{paddingBottom:25, left:-95,bottom:84, fontWeight:"bold",marginBottom:15, fontSize:13,color:"black"},
});