import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const calendar = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerClassName="pb-32 px-7"
      >
        <View>
          <Text>Calendar Page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default calendar