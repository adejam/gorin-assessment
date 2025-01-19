import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ClassesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ClassesScreen</Text>
    </SafeAreaView>
  )
}

export default ClassesScreen

const styles = StyleSheet.create({
  container: { flex: 1 },
});
