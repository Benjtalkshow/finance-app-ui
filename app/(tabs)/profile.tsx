import Colors from '@/constants/Colors'
import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Page = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
      </View>
    </>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black
  },
  text: {
    color: Colors.white,
  }
})