import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const GivingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>GivingScreen</Text>
    </SafeAreaView>
  )
}

export default GivingScreen

const styles = StyleSheet.create({
  container: { flex: 1 },
});
