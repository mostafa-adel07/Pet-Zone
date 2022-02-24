import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./login";
import { TypeSignup } from "./userSignup/role";
import { SignupUser } from "./userSignup/SignupUser";
import { SignupUser1 } from "./userSignup/SignupUser1";
import { SignupUser2 } from "./userSignup/SignupUser2";
import { Splashscreen } from "./splashscreen";
import { SP1 } from "./serviceProvider/SP1";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SP2 } from "./serviceProvider/SP2";
import { Drawer1 } from "./Drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Filter } from "./Filter";
import { AdoptionList } from "./AdoptionList";
const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();
export const RootStackSCreen = ({ navigation }) => (
  <RootStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "transparent",
      },
      headerTransparent: true,
      headerTitle: "",
      headerLeft: null,
    }}
  >
    <RootStack.Screen name="Splahscreen" component={Splashscreen} />
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="Drawer1" component={Drawer1} />
    <RootStack.Screen name="typeSignup" component={TypeSignup} />
    <RootStack.Screen name="SignupUser" component={SignupUser} />
    <RootStack.Screen name="SignupUser1" component={SignupUser1} />
    <RootStack.Screen name="SignupUser2" component={SignupUser2} />
    <RootStack.Screen name="SP1" component={SP1} />
    <RootStack.Screen name="SP2" component={SP2} />
    <RootStack.Screen name="Filter" component={Filter} />
    <RootStack.Screen name="AdoptionList" component={AdoptionList} />
  </RootStack.Navigator>
);
