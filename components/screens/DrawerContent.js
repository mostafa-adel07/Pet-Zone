import React, { useState } from "react";
import { View, StyleSheet,SafeAreaView,StatusBar,ScrollView,TouchableOpacity ,Image} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export function DrawerContent({route,props}){
 // const {userid} = route.params;
  //console.log("oo",userid)
    return(
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
        <Drawer.Section style={styles.drawerSection}>
        <DrawerItem 
            icon={({color, size}) => (
                <Icon 
                name="home-outline" 
                color={color}
                size={30}
                />
            )}
            label="Home"
            marginLeft={17}
            onPress={() => {props.navigation.navigate('Home')}}
        />
        <DrawerItem 
            icon={({color, size}) => (
                <Icon 
                name="account-outline" 
                color={color}
                size={30}
                />
            )}
            label="Profile"
            marginLeft={17}
           // initialParams={{userid: userid}}
            onPress={() => {props.navigation.navigate('UserProfile')}}
        />
        <DrawerItem 
            icon={({color, size}) => (
                <Image style={styles.imagestyle1} source={{uri:'https://cdn-icons-png.flaticon.com/512/88/88003.png'}}/>
            )}
            label="Adoption"
            marginLeft={10}
            onPress={() => {props.navigation.navigate('AdoptionList')}}
        />
        <DrawerItem 
            icon={({color, size}) => (
                <Image style={styles.imagestyle} source={{uri:'https://cdn-icons-png.flaticon.com/512/2002/2002490.png'}}/>
            )}
            label="Breeding"
            marginLeft={10}
            onPress={() => {props.navigation.navigate('BreedingList')}}
        />
         
        </Drawer.Section>
</DrawerContentScrollView>
    <Drawer.Section style={styles.bottomDrawerSection}>
                 <DrawerItem 
                    icon={({color, size}) => (
                      <Icon
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Log Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
 </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    imagestyle1:{
        width:35,
        height:30,
        marginLeft:2,
        top:2,
        resizeMode: 'contain',
      },
      imagestyle:{
        width:35,
        height:40,
        marginLeft:2,
        top:2,
        resizeMode: 'contain',
      },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 20,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });