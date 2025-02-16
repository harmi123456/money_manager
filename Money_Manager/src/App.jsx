import React from 'react'
import Redux_mny from './Redux_money/Redux_mny'
import { Provider } from 'react-redux'
import store from './App/Store'

export default function App() {
  return (
    <div>

      {/* <Redux_mny/> */}

      <Provider store={store}>
        <Redux_mny/>
      </Provider>
      
    </div>
    
  )
}
