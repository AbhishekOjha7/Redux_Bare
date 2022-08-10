import { View, Text ,StyleSheet,SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import {useDispatch, useSelector } from 'react-redux';


export default function UserDetails() {
    const dispatch=useDispatch();
    const {name,age}=useSelector((store)=>store.UserDetailsReducer);

    const Add=()=>{
        dispatch({type:'update name',payload:{name}})
    }

  return (
      <SafeAreaView style={{flex:1,backgroundColor:'aqua'}}>
      <View style={styles.container}>
      <Text style={styles.head}>UserDetails</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.innercard}>{name}</Text>
      <Text style={styles.innercard}>{age}</Text>
   </View>
      <View style={styles.add}>
          <TouchableOpacity onPress={Add}>
              <Text>{'Add Details'}</Text>
          </TouchableOpacity>
      </View>
      </SafeAreaView>
     
  )
}
const styles = StyleSheet.create({
    container: {
       backgroundColor: 'black',
        // justifyContent:'center',
        alignItems:'center'
      },
      head:{
       color:'white',
       fontSize:30
      },
      card:{

          textAlign:'center',
          justifyContent:'center',
          borderWidth:1,
          margin:10,
          marginTop:40
      },
      innercard:{
          textAlign:'center',
          padding:5
      },
      add:{
          marginTop:700,
          position:'absolute',
          alignItems:'center',
          borderWidth:2,
          marginLeft:150,
          backgroundColor:'yellow'

      }
    });
