import React, { useState, useEffect } from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import {CheckBox} from "react-native-elements";
import DatePicker from 'react-native-datepicker';
import { Card } from "react-native-paper";
import axios from "axios";
//import ReactNativeStyleAttributes from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
export const HistoryVaccines = ({route,navigation}) => {

const{id,petType} = route.params;

//const [Vaccieninfo, SetVaccieninfo] = useState([]);
const Vaccineinfo = [
{VaccineName:"Rabies",VaccineDate:"1M 3D",Vaccineselected:true},
{VaccineName:"Distemper",VaccineDate:"2M 5D",Vaccineselected:true},
{VaccineName:"Hepatitis",VaccineDate:"4M 2D",Vaccineselected:false},
{VaccineName:"Parvovirus",VaccineDate:"0M 0D",Vaccineselected:false},
]
//const [state, setState] = useState(Vaccineinfo);
 const Vaccineinfo1 = [
{VaccineName:"Rabies1",VaccineDate:'09-10-2021',Vaccineselected:true},
{VaccineName:"Distemper1",VaccineDate:'09-11-2021',Vaccineselected:true},
{VaccineName:"Hepatitis1",VaccineDate:'09-12-2021',Vaccineselected:false},
{VaccineName:"Parvovirus1",VaccineDate:'09-5-2021',Vaccineselected:false},
]
const recuring = []
const nonrecuring = []
/*const vaccine1 = [
  {
      "_id": "626541fe1935b590ded0fc1a",
      "vaccineName": "newVaccine123",
      "vaccineDescription": "healthy",
      "required": true,
      "recurring": true,
      "recurringEvery": 3,
      "forPets": "Dogs"
  },
  {
      "_id": "62654f16a264754b3c508c6f",
      "vaccineName": "newVaccine567",
      "vaccineDescription": "healthy4",
      "required": true,
      "recurring": false,
      "forPets": "Cats"
  },
  {
      "_id": "6265797df9d0ccd3a23648bf",
      "vaccineName": "newVacc",
      "vaccineDescription": "healthy4",
      "required": false,
      "recurring": false,
      "forPets": "Cats"
  },
  {
      "_id": "626579a6f9d0ccd3a23648ca",
      "vaccineName": "newVac11c",
      "vaccineDescription": "healthy4",
      "required": false,
      "recurring": false,
      "forPets": "Cats"
  },
  {
    "_id": "626579a6f9d0ccd3a23648cb",
    "vaccineName": "new1Vac11c",
    "vaccineDescription": "healthy4",
    "required": false,
    "recurring": true,
    "forPets": "Cats"
}
];*/
const [vaccine,Setvaccine] = useState([]);
/*vaccine.forEach(v =>{
  v["check"] = false
})*/
vaccine.forEach(v=>{
  if (v.recurring == true)
  {
    recuring.push(v)
  }
  else{
    nonrecuring.push(v)
  }
})
recuring.forEach(v =>{
  v["date"] = "01-01-2021"
})
//console.log(vaccine)
console.log("recuring vaccine",recuring)
console.log("non_recuring vaccine",nonrecuring)
//const [state, setState] = useState(Vaccineinfo);
const [state, setState] = useState(nonrecuring);
const [state1, setState1] = useState(recuring);
const [date, setDate] = useState('09-10-2021');
var string2 = "?forpets="+petType
axios
  .get("" + string2, {
    headers: {
      Cookie: "cookie1=value; cookie2=value; cookie3=value;",
      Authorization: "Bearer my-token",
    },
    withCredentials: true,
  })
  .then((res) => {
    Setvaccine(res);
  })
  .catch((err) => {
    console.log(err);
  });

  
function saveHistory(){
  const arr = []
  state1.forEach(v =>{
    if(v.check == true){
      arr.push({"_id": v._id, "date": v.date})
    }
  })
  state.forEach(v=>{
    if(v.check == true){
      arr.push({"_id":v._id})
    }
  })
  console.log("arr",arr)
  axios.post('', {
    headers: {
      Cookie: "cookie1=value; cookie2=value; cookie3=value;",
      Authorization: "Bearer my-token",
    },
    withCredentials: true,
    history: arr,
    petID: id,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
/*let [Vaccineinfo, setVaccineinfo] = useState(
[
{VaccineName:"Rabies",VaccineDate:"1M 3D",Vaccineselected:true},
{VaccineName:"Distemper",VaccineDate:"2M 5D",Vaccineselected:false},
{VaccineName:"Hepatitis",VaccineDate:"4M 2D",Vaccineselected:false},
{VaccineName:"Parvovirus",VaccineDate:"0M 0D",Vaccineselected:false},
]
  );*/
  // console.log(Vaccineinfo)    
 console.log("state1",state1)
 console.log("state",state)

return(
<>
<SafeAreaView style ={styles.container1}>
<View style={styles.header1}>
        <Text style={styles.textheader1}>History Vaccines</Text>
      </View>
      <View style={styles.container1}>
       <Text style={styles.textheader2}>Once in a lifetime vaccination</Text>
        <FlatList
          data={state}
         renderItem={({ index }) => {
        
           return  <Card style={styles.card}>
         
              <CheckBox
        
        

           title= {state[index].vaccineName}
            checked={state[index].check}
          onPress={()=>
            
            {
              let temp_state = [...state];
	
	// 2. Make a shallow copy of the element you want to mutate
	let temp_element = { ...temp_state[index] };
	// console.log(temp_element)
	// 3. Update the property you're interested in
	temp_element.check = !temp_element.check;
	
	// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
	temp_state[index] = temp_element;
 // console.log(temp_state[item])
	
	// 5. Set the state to our new copy
	setState( temp_state );

            }
           
          }
           
          
       
        backgroundColor="white"
          checkedColor="rgb(221,74,72)"
        
          style={styles.checkbox}
        />
 
           
            </Card>
          }}
          
          keyExtractor={(item) => item._id}
         
          contentContainerStyle={{ padding: 10 }}
        />

         
  
        
      </View>



       <View style={styles.container1}>
       <Text style={styles.textheader2}>frequent vaccination</Text>
        <FlatList
          data={state1}
         renderItem={({ index }) => {
        
           return  <Card style={styles.card1}>
         
              <CheckBox
        
             backgroundColor="white"
        
          checkedColor="rgb(221,74,72)"
        
          style={styles.checkbox1}

           title= {state1[index].vaccineName}
            checked={state1[index].check}
          onPress={()=>
            
            {
              let temp_state = [...state1];
	
	// 2. Make a shallow copy of the element you want to mutate
	let temp_element = { ...temp_state[index] };
	// console.log(temp_element)
	// 3. Update the property you're interested in
	temp_element.check = !temp_element.check;
	
	// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
	temp_state[index] = temp_element;
 // console.log(temp_state[item])
	
	// 5. Set the state to our new copy
	setState1( temp_state );

            }
           
          }
           
          
       
       
        />
   <DatePicker
          style={styles.datePickerStyle}
          date={state1[index].date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -25,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
              right:-25,
            },
            placeholderText: {
              fontSize: 17,
              color: "gray"
            },
            dateText: {
              fontSize: 17,
            }
          }}
          onDateChange={(date) => {
           let temp_state = [...state1];
	
	// 2. Make a shallow copy of the element you want to mutate
	let temp_element = { ...temp_state[index] };
	// console.log(temp_element)
	// 3. Update the property you're interested in
	temp_element.date = date;
	
	// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
	temp_state[index] = temp_element;
 // console.log(temp_state[item])
	
	// 5. Set the state to our new copy
	setState1( temp_state );

          }}
        />
           
            </Card>
          }}
          
          keyExtractor={(item) => item._id}
         
          contentContainerStyle={{ padding: 10 }}
        />

         
<TouchableOpacity style={styles.buttoncontainer}  onPress={() => {navigation.navigate('VaccineDescription',{id:id})}}>
          <Text style={styles.buttontext}>Add Vaccines</Text>
      </TouchableOpacity>
        
      <TouchableOpacity style={styles.buttoncontainer1}  onPress={saveHistory}>
          <Text style={styles.buttontext1}>Save History</Text>
      </TouchableOpacity>
      </View>
</SafeAreaView>

</>
  );
 
};

const styles = StyleSheet.create({
  container1:{
    flex: 1,
    marginTop: 30,
    backgroundColor: "white",
  },
  header1: {
    backgroundColor:"rgba(253,239,197,1)",
    height: 100,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  textheader1: {
    marginTop: 30,
    fontSize: 30,
    color: "rgb(221,74,72)",
    fontWeight: "bold",
    right:-7,
  },
   textheader2: {
    marginTop: -15,
    fontSize: 20,
    color: "rgb(221,74,72)",
    fontWeight: "bold",
    right:-15,
  },
  card: {
    backgroundColor: "white",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    height: 58,
    borderColor:"white",
    borderRadius:15,
    //borderStartWidth:2,
    shadowColor: "#000",
 shadowOffset: {
 width: 0,
 height: 2,
},

shadowOpacity: 0.25,
shadowRadius: 4.84,
elevation: 5,

  },

   card1: {
    backgroundColor: "white",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    height: 58,
    borderColor:"white",
    borderRadius:15,
    //borderStartWidth:2,
    shadowColor: "#000",
 shadowOffset: {
 width: 0,
 height: 2,
},

shadowOpacity: 0.25,
shadowRadius: 4.84,
elevation: 5,

  },
  title1: {
    paddingBottom: 10,
    marginLeft: 20,
    bottom: -25,
    fontSize: 16,
    color:"#5C7A95",
    fontWeight:"bold"
  },
 
  checkbox: {
    alignSelf: "center",
  
  },
 checkbox1: {
    alignSelf: "center",

  },
   card1: {
    backgroundColor: "white",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    height: 118,
    borderColor:"white",
    borderRadius:15,
    //borderStartWidth:2,
    shadowColor: "#000",
 shadowOffset: {
 width: 0,
 height: 2,
},

shadowOpacity: 0.25,
shadowRadius: 4.84,
elevation: 5,

  },

  buttoncontainer: {
    borderRadius: 15,
    width: 160,
    height: 48,
   backgroundColor: "#3D405B",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 15,
    paddingLeft: 60,
    top:10,
    left:20,
  },
   buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    right: 30,
  },
  buttoncontainer1: {
    borderRadius: 15,
    width: 160,
    height: 48,
   backgroundColor: "#3D405B",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 15,
    paddingLeft: 60,
    bottom:50,
    left:230,
  },
   buttontext1: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    right: 30,
  },
});

