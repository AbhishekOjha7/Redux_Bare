import React from 'react'
import { Provider } from 'react-redux'
import store from './src/reducer/store'
import Navigator from './src/navigator/index'

export default function App() {

  return ( 
    <Provider store = {store}>
     {/* <Form/> */}
     {/* <UserDetails/> */}
     <Navigator/>
    </Provider>

  );
}

