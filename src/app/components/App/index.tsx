import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}> Hello World</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Quicksand-Bold',
  },
})
