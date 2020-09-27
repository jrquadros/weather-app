import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { Store } from './redux/Store'
import { Test } from './components/Test'

export const App = () => {
  return (
    <Provider store={Store}>
      <Test />
    </Provider>
  )
}
