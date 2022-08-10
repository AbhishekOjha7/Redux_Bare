
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from '../Modules/userList'

const Stack = createNativeStackNavigator()

const Navigator = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="UserList" component={UserList}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator;