import React,{useState,useEffect} from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View ,FlatList,Button,TouchableOpacity,ScrollView,Image} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons'; 
import { Card } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import {Adoption} from './Adoption';
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons'; 
//import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
export const BreedingList =()=>{
//const [datainfo, Setdatainfo] = useState([]);
const datainfo = [
  {petName:"charlie" , petType: "cat",petsex:"male",petBreed:"persian" ,petage:'10' ,petWeight:'56' , petColor:"white",   petProfilePic:"https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg"},
{petName: "leo" ,petType: "dog"  ,petsex:"male",petBreed:"pug"  ,petage:'15'  ,petWeight:'72' ,  petColor:"fawn",    petProfilePic: "https://media.istockphoto.com/photos/pug-sitting-and-panting-1-year-old-isolated-on-white-picture-id450709593?k=20&m=450709593&s=612x612&w=0&h=82zzJc3Cz39B6LyrQ_N2b4zXxYzZIEH9aNDZWzrZspg="},
{petName:"simba"  ,petType: "dog",petsex:"male",petBreed:"Labrador Retriever"  ,petage:'10'  ,petWeight:'40', petColor:"black"  ,  petProfilePic:"https://elevageduverger.ca/wp-content/uploads/2019/12/Mel-and-Jak-24_square.jpg"},
{petName:"luna" ,petType: "dog",petsex:"female",petBreed:"Maltipoo"  ,petage:'20'  ,petWeight:'96'  , petColor:"brown" , petProfilePic:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F02%2F23%2Fmaltipoo-on-table-390083464-2000.jpg"},
 {petName: "lola" ,petType:"cat" ,petsex:"female" ,petBreed:"Siberian"  ,petage:'8'  ,petWeight:'48' ,  petColor:"white" ,  petProfilePic:"https://cf.ltkcdn.net/cats/images/orig/246623-1877x1251-siberian-cat.jpg"}
];
/*const AuthStr = 'Bearer '.concat(USER_TOKEN); 
useEffect(()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/photos',{ headers: { Authorization: AuthStr } })
    .then(res=>{
      console.log(res)
      Setdatainfo(res.data)
      console.log(datainfo)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])*/
 const[petType,setpetType]=useState('')
 //console.log(petType)

    const data1 = [
    { label1:'male', value1: '1' },
    { label1:'female', value1: '2' },
  ];
   const data2 = [
    { label2:'fawn', value2: '1' },
    { label2:'black', value2: '2' },
    { label2:'white', value2: '3' },
    { label2:'brown', value2: '4' },
  ];
const [searchTerm, SetsearchTerm] = useState("");
const [value, setValue] = useState(null);
const [label, setlabel] = useState("");
const [isFocus, setIsFocus] = useState(false);
const [value1, setValue1] = useState(null);
const [label1, setlabel1] = useState("");
const [isFocus1, setIsFocus1] = useState(false);
const [value2, setValue2] = useState(null);
const [label2, setlabel2] = useState("");
const [isFocus2, setIsFocus2] = useState(false);
const filterdata = searchTerm ? datainfo.filter(val=>
  (val.petType.toLowerCase().includes(searchTerm.toLowerCase()))):label&&label1&&label2?datainfo.filter(val=>
  (val.petType.toLowerCase().includes(label.toLowerCase()))&&
  (val.petsex.toLowerCase()==(label1.toLowerCase()))&&(val.petColor.toLowerCase()==(label2.toLowerCase()))):label&&label1?datainfo.filter(val=>
  (val.petType.toLowerCase().includes(label.toLowerCase()))&&
  (val.petsex.toLowerCase()==(label1.toLowerCase()))):label&&label2?datainfo.filter(val=>
  (val.petType.toLowerCase().includes(label.toLowerCase()))&&
  (val.petColor.toLowerCase()==(label2.toLowerCase()))):label1&&label2?datainfo.filter(val=>
  (val.petsex.toLowerCase().includes(label1.toLowerCase()))&&
  (val.petColor.toLowerCase()==(label2.toLowerCase()))):label?datainfo.filter(val=>
  (val.petType.toLowerCase().includes(label.toLowerCase()))):label1?datainfo.filter(val=>
  (val.petsex.toLowerCase()==(label1.toLowerCase()))):label2?datainfo.filter(val=>
  (val.petColor.toLowerCase().includes(label2.toLowerCase()))):datainfo;
 return(
<SafeAreaView style ={styles.container}> 
<View style = {styles.header}>
  <Text style = {styles.textheader}>
    Breeding
  </Text>
</View>
<Text style ={styles.txt}>
  Types
</Text>
<View style ={styles.types}>
<TouchableOpacity style = {styles.type1} onPress={()=>setpetType('dog')}>
   <Image style={styles.imagestyle} source={{uri:'https://icons.veryicon.com/png/o/animal/pet-icon/dog-24.png'}}/>
   <Text style ={styles.txt1}>Dogs</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.type2} onPress={()=>setpetType('cat')}>
    <Image style={styles.imagestyle} source={{uri:'https://cdn-icons-png.flaticon.com/512/1818/1818401.png'}}/>
    <Text style ={styles.txt1}>Cats</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.type3} onPress={()=>setpetType('bird')}>
    <Image style={styles.imagestyle} source={{uri:'https://cdn-icons-png.flaticon.com/512/3069/3069114.png'}} />
    <Text style ={styles.txt1}>Birds</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.type4} onPress={()=>setpetType('hamster')}>
    <Image style={styles.imagestyle} source={{uri:'https://cdn-icons.flaticon.com/png/512/1959/premium/1959947.png?token=exp=1645157925~hmac=3f0bebc2efdacae2e4dd214daa211ef0'}} />
    <Text style ={styles.txt2}>Hamsters</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.type5} onPress={()=>setpetType('rabbit')}>
    <Image style={styles.imagestyle} source={{uri:'https://cdn-icons-png.flaticon.com/512/802/802389.png'}} />
    <Text style ={styles.txt3}>Rabbits</Text>
</TouchableOpacity>
</View>
<Ionicons style={styles.icon} name="filter" size={24} color="black"
/>
<View style ={styles.container}>
   <FlatList
   data = {filterdata}
   renderItem = {({ item })=>{
     return <Adoption info ={item}/>;
   }}
  keyExtractor = {(info)=>info.petName}
  contentContainerStyle ={{padding:10}}
  />
 </View>
 </SafeAreaView>
 );
};
const styles = StyleSheet.create({
 container:{
  flex:1,
  marginTop:30,
  backgroundColor:"white", 
},
txt:{
 color:'#325288',
 fontSize:20,
 marginLeft:10,
 marginTop:10
},
types:{
 width:50,
 height:65,
 flexDirection:"row",
},
type1:{
 backgroundColor:'rgb(250, 219, 216)',
 marginLeft:10,
 top:10,
 borderRadius:5
},
type2:{
  backgroundColor:'rgb(250, 219, 216)',
  marginLeft:20,
  top:10,
  borderRadius:5
 },
 type3:{
  backgroundColor:'rgb(250, 219, 216)',
  marginLeft:20,
  top:10,
  borderRadius:5
 },
 type4:{
  backgroundColor:'rgb(250, 219, 216)',
  marginLeft:20,
  top:10,
  borderRadius:5
 },
 type5:{
  backgroundColor:'rgb(250, 219, 216)',
  marginLeft:20,
  top:10,
  borderRadius:5
 },
 txt1:{
 color:'#325288',
 marginLeft:15,
 marginTop:20,
 fontSize:12,
 fontWeight:"bold"
 },
 txt2:{
  color:'#325288',
  marginLeft:4,
  marginTop:20,
  fontSize:11,
  fontWeight:"bold"
  },
  txt3:{
    color:'#325288',
    marginLeft:8,
    marginTop:20,
    fontSize:12,
    fontWeight:"bold"
    },
imagestyle:{
  width:60,
  height:50,
  marginLeft:2,
  top:7,
  resizeMode: 'contain'
},
header:{
  backgroundColor:"rgb(250, 219, 216)",
  height:100,
  borderBottomLeftRadius:30,
  borderBottomRightRadius:30,
  alignItems:"center"
},
textheader:{
marginTop:30,
fontSize:30,
color:"rgb(221,74,72)",
fontWeight:"bold"
},
icon:{
marginLeft:370,
marginTop:50
},
search:{
  marginRight:6,
  marginLeft:7,
  
},
scroll:{
 flexDirection:"row",
 height:100
},
 dropdown: {
      height: 40,
      width:100,
      marginLeft:10,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      top:50,
      backgroundColor:"rgb(255, 89, 89)",
     justifyContent: 'space-between',
      paddingHorizontal: 12,
    },
      dropdown1: {
      height: 40,
      width:100,
      marginLeft:190,
      top:10,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      backgroundColor:"rgb(255, 89, 89)",
      paddingHorizontal: 12,
    },
});