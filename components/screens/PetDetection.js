import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
export const PetDetection = () => {
  const [image, setImage] = useState(null);
  

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };
  const [result, setresult] = useState(false);
  const [pettype, setpettype] = useState("");
  axios
  .get("" , {
    headers: {
      Cookie: "cookie1=value; cookie2=value; cookie3=value;",
      Authorization: "Bearer my-token",
    },
    withCredentials: true,
  })
  .then((res) => {
    setpettype(res);
  })
  .catch((err) => {
    console.log(err);
  });

  function seeresult()
  {
    setresult(true)
    axios.post('', {
        headers: {
          Cookie: "cookie1=value; cookie2=value; cookie3=value;",
          Authorization: "Bearer my-token",
        },
        withCredentials: true,
        image : image,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <>
<SafeAreaView style ={styles.container2}>
   
      <View style={styles.header}>
      <Text style={styles.input}>Know your pet's type</Text>
      </View>
      <View style={imageUploaderStyles.container}>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <View style={imageUploaderStyles.uploadBtnContainer}>
          <TouchableOpacity
            onPress={addImage}
            style={imageUploaderStyles.uploadBtn}
          >
            <Text>{image ? "Edit" : "Upload"} Image</Text>
            <AntDesign name="camera" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.buttoncontainer1} onPress={seeresult} >
        <Text style={styles.buttontext1}>Submit</Text>
      </TouchableOpacity>
  {
    result == true && image!=null?  <Text style={styles.input1}>{pettype} </Text> : <View></View>
  }
    </SafeAreaView>

</>
  );
};

const styles = StyleSheet.create({
    container2: {
      flex: 1,
      marginBottom: 0,
      alignItems: "center",
      backgroundColor: "white",
    },
    input: {
      color: "#084594",
      top:35,
      textAlign: "center",
      fontSize: 28,
      marginTop: 0,
      fontWeight:"bold",
    },
    header:{
      backgroundColor:"rgba(253,239,197,1)",
    height: 100,
    width:410,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    },
    buttoncontainer1: {
      borderRadius: 15,
      width: 200,
      height: 50,
      backgroundColor: "#ED7354",
      paddingTop: 1,
      justifyContent: "center",
      marginTop: 120,
      paddingLeft: 50,
      marginLeft:10
    },
    buttontext1: {
      textAlign: "center",
      color: "white",
      fontSize: 20,
      right: 28,
      fontWeight:"bold"
    },
    signuptext: {
      textAlign: "center",
      color: "black",
      fontSize: 18,
      flexDirection: "row",
      marginTop: 20,
    },
    input1:{
        color: "#084594",
        top:35,
        textAlign: "center",
        fontSize: 28,
        marginTop: 0,
        fontWeight:"bold",
    },
  });
  const imageUploaderStyles = StyleSheet.create({
    container: {
      elevation: 2,
      height: 200,
      width: 200,
      top: 60,
      backgroundColor: "#efefef",
      position: "relative",
      borderRadius: 999,
      overflow: "hidden",
    },
    uploadBtnContainer: {
      opacity: 0.7,
      position: "absolute",
      right: 0,
      bottom: 0,
      backgroundColor: "lightgray",
      width: "100%",
      height: "25%",
    },
    uploadBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });