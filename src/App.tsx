import React from 'react'
import { Provider } from 'react-redux'
import { Store } from './redux/Store'
import { SafeAreaView, View, Text } from 'react-native'

export const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView>
        <View>
          <Text>App</Text>
        </View>
      </SafeAreaView>
    </Provider>
  )
}
