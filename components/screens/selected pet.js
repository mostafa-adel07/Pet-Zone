import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView,StatusBar,ScrollView,TouchableOpacity } from 'react-native';

export const SelectedPet=()=>{
  return(
  <View style={styles.container1}>
     <Text>Welcome to selected pet</Text>
 </View>
  );
}

const styles = StyleSheet.create({
    container1:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        paddingBottom:50
      },
    });