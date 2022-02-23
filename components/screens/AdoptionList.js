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
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import { Adoption } from "./Adoption";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
//import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
export const AdoptionList = ({ navigation }) => {
  const [datainfo, Setdatainfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.1.13:3000/api/v1/offerAdoption")
      .then((res) => {
        Setdatainfo(res.data.adoptedOffer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getfilter() {
    axios
      .get("http://192.168.1.13:3000/api/v1/offerAdoption" + url, {
        headers: {
          Cookie: "cookie1=value; cookie2=value; cookie3=value;",
          Authorization: "Bearer my-token",
        },
        withCredentials: true,
      })
      .then((res) => {
        Setdatainfo(res.data.adoptedOffer);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  const [petType, setpetType] = useState("");
  const [value, setValue] = useState(null);
  const [label, setlabel] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [value1, setValue1] = useState(null);
  const [label1, setlabel1] = useState("");
  const [isFocus1, setIsFocus1] = useState(false);
  const [value2, setValue2] = useState(null);
  const [label2, setlabel2] = useState("");
  const [url, seturl] = useState("");
  const [isFocus2, setIsFocus2] = useState(false);

  function filterTypeDog() {
    seturl("?petType=dog");
    getfilter();
  }
  function filterTypeCat() {
    seturl("?petType=cat");
    getfilter();
  }
  function filter() {
    navigation.navigate("Filter", {
      petType: petType,
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textheader}>Adoption</Text>
      </View>
      <Text style={styles.txt}>Types</Text>
      <View style={styles.types}>
        <TouchableOpacity style={styles.type1} onPress={filterTypeDog}>
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://icons.veryicon.com/png/o/animal/pet-icon/dog-24.png",
            }}
          />
          <Text style={styles.txt1}>Dogs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.type2} onPress={filterTypeCat}>
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1818/1818401.png",
            }}
          />
          <Text style={styles.txt1}>Cats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.type3}
          onPress={() => setpetType("bird")}
        >
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3069/3069114.png",
            }}
          />
          <Text style={styles.txt1}>Birds</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.type4}
          onPress={() => setpetType("hamster")}
        >
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons.flaticon.com/png/512/1959/premium/1959947.png?token=exp=1645157925~hmac=3f0bebc2efdacae2e4dd214daa211ef0",
            }}
          />
          <Text style={styles.txt2}>Hamsters</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.type5}
          onPress={() => setpetType("rabbit")}
        >
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/802/802389.png",
            }}
          />
          <Text style={styles.txt3}>Rabbits</Text>
        </TouchableOpacity>
      </View>
      <Ionicons
        style={styles.icon}
        name="filter"
        size={24}
        color="black"
        onPress={filter}
      />
      <View style={styles.container}>
        <FlatList
          data={datainfo}
          renderItem={({ item }) => {
            return <Adoption info={item} />;
          }}
          keyExtractor={(info) => info._id}
          contentContainerStyle={{ padding: 10 }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "white",
  },
  txt: {
    color: "#325288",
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  types: {
    width: 50,
    height: 65,
    flexDirection: "row",
  },
  type1: {
    backgroundColor: "rgb(250, 219, 216)",
    marginLeft: 10,
    top: 10,
    borderRadius: 5,
  },
  type2: {
    backgroundColor: "rgb(250, 219, 216)",
    marginLeft: 20,
    top: 10,
    borderRadius: 5,
  },
  type3: {
    backgroundColor: "rgb(250, 219, 216)",
    marginLeft: 20,
    top: 10,
    borderRadius: 5,
  },
  type4: {
    backgroundColor: "rgb(250, 219, 216)",
    marginLeft: 20,
    top: 10,
    borderRadius: 5,
  },
  type5: {
    backgroundColor: "rgb(250, 219, 216)",
    marginLeft: 20,
    top: 10,
    borderRadius: 5,
  },
  txt1: {
    color: "#325288",
    marginLeft: 15,
    marginTop: 20,
    fontSize: 12,
    fontWeight: "bold",
  },
  txt2: {
    color: "#325288",
    marginLeft: 4,
    marginTop: 20,
    fontSize: 11,
    fontWeight: "bold",
  },
  txt3: {
    color: "#325288",
    marginLeft: 8,
    marginTop: 20,
    fontSize: 12,
    fontWeight: "bold",
  },
  imagestyle: {
    width: 60,
    height: 50,
    marginLeft: 2,
    top: 7,
    resizeMode: "contain",
  },
  header: {
    backgroundColor: "rgb(250, 219, 216)",
    height: 100,
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
  icon: {
    marginLeft: 370,
    marginTop: 50,
  },
  search: {
    marginRight: 6,
    marginLeft: 7,
  },
  scroll: {
    flexDirection: "row",
    height: 100,
  },
  dropdown: {
    height: 40,
    width: 100,
    marginLeft: 10,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    top: 50,
    backgroundColor: "rgb(255, 89, 89)",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  dropdown1: {
    height: 40,
    width: 100,
    marginLeft: 190,
    top: 10,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: "rgb(255, 89, 89)",
    paddingHorizontal: 12,
  },
});
