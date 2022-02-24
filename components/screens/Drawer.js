import { NavigationContainer } from "@react-navigation/native";
import React,{useState,useEffect} from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View ,FlatList,Button,TouchableOpacity,ScrollView,Image} from "react-native";
import { MainTabScreen } from "./MainTabScreen";
import { DrawerContent } from "./DrawerContent";
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { styles } from "react-native-element-dropdown/src/TextInput/styles";
const Drawer = createDrawerNavigator();
export const Drawer1=()=>{
    return(
      <Drawer.Navigator style ={styles.header}  drawerContent={props => <DrawerContent {...props} />}
          screenOptions={{
           headerStyle:{
              height:100
           },
           headerTransparent:true,
           headerShown:true,
           marginTop:20,
           headerTitle:'',
          }}>
         <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
         </Drawer.Navigator>

     
        )
}

